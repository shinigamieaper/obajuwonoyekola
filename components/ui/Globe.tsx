"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic';
// Import countries data statically to avoid dynamic import issues
import countries from "@/data/globe.json";

// Helper function for color conversion
function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

export interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
  countriesData: any; // geojson type
}

const BaseGlobeComponent = React.memo(({ globeConfig, data, countriesData }: WorldProps) => {
  // Use a ref for mutable state that doesn't need re-renders
  const numbersOfRings = useRef<Set<number>>(new Set([0]));

  // Helper function to check if a number exists in the set
  const hasNumber = useCallback((num: number) => numbersOfRings.current.has(num), []);

  // Helper function to add a number to the set
  const addNumber = useCallback((num: number) => numbersOfRings.current.add(num), []);

  const [globeData, setGlobeData] = useState<{
    size: number;
    order: number;
    color: (t: number) => string;
    lat: number;
    lng: number;
  }[] | null>(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  // Memoize default props to prevent unnecessary recalculations
  const defaultProps = useMemo(() => ({
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  }), [globeConfig]);

  // Debounce globe updates
  const [isUpdating, setIsUpdating] = useState(false);
  
  const updateGlobe = useCallback(() => {
    if (!globeRef.current || isUpdating) return;
    
    setIsUpdating(true);
    requestAnimationFrame(() => {
      _buildData();
      _buildMaterial();
      setIsUpdating(false);
    });
  }, [isUpdating]);

  useEffect(() => {
    if (globeRef.current) {
      updateGlobe();
    }
  }, [data, defaultProps, updateGlobe]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // filter out points with invalid lat/lng
    const validPoints = points.filter(
      (p) => [p.lat, p.lng].every((v) => typeof v === 'number' && isFinite(v))
    );
    // remove duplicates for same lat and lng
    const filteredPoints = validPoints.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countriesData.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor((e) => {
          return defaultProps.polygonColor;
        });
      startAnimation();
    }
  }, [globeData, countriesData, globeConfig]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: any) => (e as { color: string }).color)
      .arcAltitude((e) => {
        return (e as { arcAlt: number }).arcAlt * 1;
      })
      .arcStroke((e) => {
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime((e) => defaultProps.arcTime);

    globeRef.current
      .pointsData(data)
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor((e: any) => (t: any) => e.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      
      // Generate new ring IDs and add them to our set
      const ringIds = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      );
      ringIds.forEach((id: number) => addNumber(id));

      // Update rings with current set of IDs
      globeRef.current.ringsData(
        globeData.filter((d, i) => hasNumber(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeData, data]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
});

export function WebGLRendererConfig() {
  const { gl } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
  }, [gl]);

  return null;
}

const World: React.FC<WorldProps> = React.memo((props) => {
  const { globeConfig, data, countriesData } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  // Memoize camera settings
  const cameraSettings = useMemo(() => new PerspectiveCamera(50, aspect, 180, 1800), []);

  // Set camera position
  useEffect(() => {
    cameraSettings.position.set(0, 0, cameraZ);
  }, [cameraSettings, cameraZ]); // Add cameraZ to dependency array

  // Memoize orbit control settings
  const orbitSettings = useMemo(() => ({
    enableZoom: false,
    enablePan: false,
    autoRotate: props.globeConfig.autoRotate,
    autoRotateSpeed: props.globeConfig.autoRotateSpeed || 0.5,
    minPolarAngle: Math.PI / 3.5,
    maxPolarAngle: Math.PI - Math.PI / 3
  }), [props.globeConfig.autoRotate, props.globeConfig.autoRotateSpeed]);

  return (
    <Canvas camera={cameraSettings}>
      <directionalLight
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <OrbitControls {...orbitSettings} />
      <BaseGlobeComponent globeConfig={props.globeConfig} data={props.data} countriesData={props.countriesData} />
    </Canvas>
  );
});

const genRandomNumbers = (min: number, max: number, count: number): number[] => {
  return Array.from({ length: count }, () => 
    Math.floor(Math.random() * (max - min + 1)) + min
  );
};

// Export the World component
export { World };
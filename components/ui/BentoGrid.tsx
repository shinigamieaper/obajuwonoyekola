"use client";
import { useState, useEffect, useRef, useMemo } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { FaHubspot, FaGoogle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import DynamicGlobe from "./DynamicGlobe";
import MagicButton from "../MagicButton";
import { MarketingExperienceCounter } from "@/components/MarketingExperienceCounter";
import { globeData } from "@/data/globe-data";
import countries from "@/data/globe.json";
import animationData from "@/data/confetti.json";
import { TextGenerateEffect } from "./TextGenerateEffect";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  
const leftLists = [
  { label: "Hubspot marketing", icon: <FaHubspot className="inline-block mr-2 " /> },
  { label: "Gooogle Digital Garage", icon: <FaGoogle className="inline-block mr-2" /> },
];
 // const rightLists = ["VueJS", "NuxtJS", "GraphQL"];//

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "oyekolaobajuwon@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center ")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl font-heading "></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 1 ? (
  <div ref={ref} className="z-10 space-y-2 p-1">
    {inView && (
      <>
        <div className="text-[#C1C2D3] text-sm lg:text-xl font-extralight font-body  p-1">
          <TextGenerateEffect
            words={typeof description === "string" ? description : ""}
            highlightWords={['Marketing,','Marketing',  'Development,', 'Strategy','Design,','Community','Empowered.','True','Seen,','Understood,','Storyteller','Strategist' ,'Dream','Community.','Storytelling', 'Data,','Empathy,','Problem-solving', 'Creativity,' , 'Clarity,' ,'Freelancer,']}
          />
        </div>
        <div className="text-white text-lg lg:text-3xl font-bold ">
          <TextGenerateEffect
            words={typeof title === "string" ? title : ""}
           
          />
        </div>
      </>
    )}
  </div>
) : (
  <>
    <div className="font-body font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
      {description}
    </div>
    <div className="font-heading text-lg lg:text-3xl max-w-96 font-bold z-10">
      {title}
    </div>
  </>
)}


          {id === 2 && (
            <div className="absolute inset-0 flex items-center flex-col justify-end  overflow-visible z-50">
              <div className="w-[400px] h-[220px] -mb-24 relative">
                <DynamicGlobe 
                globeConfig={{
                  pointSize: 6,
                  globeColor: "#062056",
                  showAtmosphere: true,
                  atmosphereColor: "#FFFFFF",
                  atmosphereAltitude: 0.15,
                  emissive: "#062056",
                  emissiveIntensity: 0.15,
                  shininess: 1,
                  polygonColor: "rgba(255,255,255,0.98)",
                  ambientLight: "#38bdf8",
                  directionalLeftLight: "#ffffff",
                  directionalTopLight: "#ffffff",
                  pointLight: "#ffffff",
                  arcTime: 800,
                  arcLength: 1,
                  rings: 2,
                  maxRings: 3,
                  initialPosition: { lat: 22.3193, lng: 114.1694 },
                  autoRotate: true,
                  autoRotateSpeed: 1.4
                }}
                data={[
                  {
                    order: 1,
                    startLat: 51.5074,
                    startLng: -0.1278,
                    endLat: 40.7128,
                    endLng: -74.0060,
                    arcAlt: 0.3,
                    color: "#3b82f6"
                  },
                  {
                    order: 1,
                    startLat: 35.6762,
                    startLng: 139.6503,
                    endLat: 22.3193,
                    endLng: 114.1694,
                    arcAlt: 0.2,
                    color: "#06b6d4"
                  },
                  {
                    order: 2,
                    startLat: 48.8566,
                    startLng: 2.3522,
                    endLat: 52.5200,
                    endLng: 13.4050,
                    arcAlt: 0.1,
                    color: "#6366f1"
                  },
                  {
                    order: 2,
                    startLat: 1.3521,
                    startLng: 103.8198,
                    endLat: -33.8688,
                    endLng: 151.2093,
                    arcAlt: 0.4,
                    color: "#06b6d4"
                  }
                ]}
                countriesData={countries}
              />
              </div>
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col pt-2 gap-3 md:gap-3 lg:gap-3">
                {leftLists.map((item, i) => (
  <span
    key={i}
    className="flex items-center lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
  >
    {item.icon}
    {item.label}
  </span>
))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="absolute bottom-0 left-0 w-full flex flex-row justify-between items-center p-4">
              <MarketingExperienceCounter 
                className="flex flex-row items-center gap-1 lg:gap-4"
                itemClassName="flex flex-col items-center "
                valueClassName=" sm:text-xl lg:text-4xl font-bold text-white"
                labelClassName="text-sm text-gray-400 ml-1"
              />
             
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div className="absolute -bottom-5 right-0">
                  <Lottie 
                    animationData={animationData} 
                    height={200} 
                    width={400} 
                    loop={false}
                  />
                </div>
              )}

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
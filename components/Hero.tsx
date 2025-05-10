"use client";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {

  return (
    <section id="hero" className="py-20">

    <div className="py-20 pt-36">
      {/* Spotlights for visual effect */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div
        className="absolute inset-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        pointer-events-none z-0"
      >
        <div
          className="absolute inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"
        />
      </div>

      <div className="flex justify-center relative z-10 pt-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="font-body uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Blending development with marketing for impact
          </p>

        <TextGenerateEffect
  words="Strategic Marketing That Builds Communities and Tells Compelling Stories"
  className="font-heading text-center text-[35px] md:text-5xl lg:text-5xl"
  highlightWords={[ "Strategic", "Communities", "Compelling" ,"Stories"  ]}
/>


          <p className="font-body text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m Juwon A Full Stack Digital Marketer specializing in Marketing, Design, and Development based in Lagos Nigeria.
          </p>

          <a href="#about">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";
import { IconType } from "react-icons";
import { FaGoogle, FaHubspot } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";

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
  const certificationIcons: { [key: string]: IconType } = {
    "Google Digital Garage": FaGoogle,
    "HubSpot Marketing": FaHubspot
  };
  const leftLists = ["Google Digital Garage", "HubSpot Marketing"];

  const [copied, setCopied] = useState(false);

  const [marketingExperience, setMarketingExperience] = useState({
    years: 4,
    months: 3,
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2019-12-15');
    const updateExperience = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setMarketingExperience({ years, months, days, hours, minutes, seconds });
    };

    updateExperience();
    const timer = setInterval(updateExperience, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

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
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 1 ? (
  <div ref={ref} className="z-10 space-y-2 p-5">
    {inView && (
      <>
        <div className="text-[#C1C2D3] text-sm lg:text-base font-extralight z">
          <TextGenerateEffect
            words={typeof description === "string" ? description : ""}
          />
        </div>
        <div className="text-white text-lg lg:text-3xl font-bold ">
          <TextGenerateEffect
            words={typeof title === "string" ? title : ""}
            highlightWords={['marketing']}
          />
        </div>
      </>
    )}
  </div>
) : (
  <>
    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
      {description}
    </div>
    <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
      {title}
    </div>
  </>
)}

          {id === 2 && <GridGlobe />}

          {id === 5 && (
            <div className="flex flex-col justify-center space-y-4 w-1/2 h-full p-4">
              {[
                { label: 'Years', value: marketingExperience.years },
                { label: 'Months', value: marketingExperience.months },
                { label: 'Days', value: marketingExperience.days },
                { label: 'Hours', value: marketingExperience.hours },
                { label: 'Minutes', value: marketingExperience.minutes },
                { label: 'Seconds', value: marketingExperience.seconds }
              ].map(({ label, value }) => (
                <div 
                  key={label} 
                  className="flex items-center space-x-2"
                >
                  <span className="text-lg font-bold text-white w-16">{value}</span>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-4 md:gap-4 lg:gap-8 px-4">
                {leftLists.map((item, i) => {
                  const Icon = certificationIcons[item];
                  return (
                    <div
                      key={i}
                      className="flex items-center space-x-3 lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg bg-[#10132E] w-full"
                    >
                      {Icon && <Icon className="w-6 h-6 mr-2 text-white" />}
                      <span className="text-white">{item}</span>
                    </div>
                  );
                })}
              </div>
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
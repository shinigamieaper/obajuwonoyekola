"use client";

import React, { useState } from "react";
import { portfolioItems } from "@/data";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { FaSync as SyncIcon } from "react-icons/fa";
import Image from "next/image";

export default function PortfolioSection() {
  const [resetTrigger, setResetTrigger] = useState(0);

  const handleResetCards = () => {
    setResetTrigger(prev => prev + 1);
  };

  return (
    <section id="portfolio" className="py-20 relative z-10">
      {/* Background grid */}
      <div className="absolute inset-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] pointer-events-none z-0">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      </div>

      <div className="container  px-4 max-w-7xl relative z-0">
        <h1 className="font-heading heading">
        My Creative {" "}
        <span className="text-purple">Portfolio</span>
      </h1>
        <div className="relative w-full">
          <div className="flex justify-center items-center my-4 px-6 mx-6 ">
            <MagicButton
              title="Reset Cards"
              icon={<SyncIcon />}
              handleClick={handleResetCards}
              position="right"
              otherClasses="  sm:w-full transition-colors items-center justify-center"
            />
          </div>
          <DraggableCardContainer key={resetTrigger} className="relative min-h-[650px] w-full flex items-center justify-center overflow-clip">
            <p className="font-accent absolute top-1/2 mx-auto max-w-xs md:max-w-sm -translate-y-3/4 text-center text-xl md:text-2xl lg:text-4xl font-black text-gray-400 dark:text-gray-600">
             Without strategy, content is just stuff, and the world has enough stuff.
            </p>
            {portfolioItems.map((item, index) => (
              <DraggableCardBody key={index} className={item.className}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={256}
                  height={260}
                  className="pointer-events-none relative z-10 h-65 w-64 object-cover rounded-md"
                />
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold font-headingtext-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 font-accent dark:text-gray-400">
                    {item.category}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-bodydark:text-gray-600">
                    {item.performance}
                  </p>
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </div>
    </section>
  );
}
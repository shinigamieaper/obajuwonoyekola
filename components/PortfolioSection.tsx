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

export default function PortfolioSection() {
  const [resetTrigger, setResetTrigger] = useState(0);

  const handleResetCards = () => {
    setResetTrigger(prev => prev + 1);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="heading">
        My Creative {" "}
        <span className="text-purple">Portfolio</span>
      </h1>
        <div className="relative w-full">
          <div className="flex justify-center items-center mb-4 px-2 ">
            <MagicButton
              title="Reset Cards"
              icon={<SyncIcon />}
              handleClick={handleResetCards}
              position="right"
              otherClasses=" transition-colors sm:w-full items-center justify-center"
            />
          </div>
          <DraggableCardContainer key={resetTrigger} className="relative min-h-[600px] w-full flex items-center justify-center overflow-clip">
            <p className="absolute top-1/2 mx-auto max-w-xs md:max-w-sm -translate-y-3/4 text-center text-xl md:text-2xl lg:text-4xl font-black text-gray-400 dark:text-gray-600">
             Without strategy, content is just stuff, and the world has enough stuff.
            </p>
            {portfolioItems.map((item, index) => (
              <DraggableCardBody key={index} className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-64 w-64 object-cover rounded-md"
                />
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {item.category}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-600">
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
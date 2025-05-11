"use client";
import React, { useCallback } from "react";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const ExperienceCard = React.memo(({ card }: { card: typeof workExperience[0] }) => {
  const duration = React.useMemo(() => Math.floor(Math.random() * 10000) + 10000, []);
  
  return (
    <Button
      duration={duration}
      borderRadius="1.75rem"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem* 0.96)`,
      }}
      className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
        <Image
          src={card.thumbnail}
          alt={card.thumbnail}
          width={128}
          height={128}
          className="lg:w-32 md:w-20 w-16"
          loading="lazy"
          sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 128px"
        />
        <div className="lg:ms-5">
          <h1 className="font-heading text-start text-xl md:text- font-bold">
            {card.title}
          </h1>
          <p className="font-body text-start text-white-100 mt-3 font-semibold">
            {card.desc}
          </p>
        </div>
      </div>
    </Button>
  );
});

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const renderExperienceCards = useCallback(() => {
    return workExperience.map((card) => (
      <ExperienceCard key={card.id} card={card} />
    ));
  }, []);

  return (
    <div className="py-20 w-full relative">
      <div 
        className="absolute inset-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] pointer-events-none z-0"
        style={{ willChange: 'opacity' }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"
          style={{ willChange: 'opacity' }}
        />
      </div>
      <div className="relative z-10" ref={ref}>
        <h1 className="font-heading heading text-center justify-center items-center">
          My{" "}
          <span className="text-purple">work experience</span>
        </h1>
        <div 
          className={cn(
            "w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10",
            "opacity-0 translate-y-4 transition-all duration-700",
            inView && "opacity-100 translate-y-0"
          )}
        >
          {renderExperienceCards()}
        </div>
      </div>
    </div>
  );
};

export default Experience;

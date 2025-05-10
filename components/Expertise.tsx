"use client";

import React, { useEffect, useRef, useState } from "react";

import { companies } from "@/data";

const Expertise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }, [containerRef, scrollerRef]);

  return (
    <section id="expertise" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h1 
          className="font-heading heading text-center mb-12"
        >
          My Expertise
          <span className="text-purple"> Lies in </span>
        </h1>

        <div
          ref={containerRef}
          className="scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          <div
            ref={scrollerRef}
            className={`flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap ${start ? 'animate-scroll' : ''} hover:[animation-play-state:paused]`}
            style={{ '--animation-duration': '80s' } as React.CSSProperties}
          >
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={`${company.id}-${index}`}
                className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 min-w-[120px] flex-shrink-0"
              >
                <div className="flex  items-center gap-4 bg-white/10 p-4 rounded-xl shadow-2xl">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="w-12 h-12 object-contain transition-transform group-hover:rotate-12 filter grayscale brightness-50 hover:grayscale-0 hover:brightness-100"
                  />
                  <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20 filter grayscale brightness-50 hover:grayscale-0 hover:brightness-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
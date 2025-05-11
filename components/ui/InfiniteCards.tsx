"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import { useInView } from 'react-intersection-observer';

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  // Use MutableRefObject instead of RefObject for containerRef
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Create a callback ref that updates both refs
  const setRefs = React.useCallback(
    (element: HTMLDivElement | null) => {
      // Update the ref we use for animations
      containerRef.current = element;
      
      // Update the intersection observer ref
      if (typeof inViewRef === 'function') {
        inViewRef(element);
      }
    },
    [inViewRef]
  );

  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (!containerRef.current || !scrollerRef.current || start) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    const fragment = document.createDocumentFragment();

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      fragment.appendChild(duplicatedItem);
    });

    if (scrollerRef.current) {
      scrollerRef.current.appendChild(fragment);
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [start]);

  useEffect(() => {
    if (inView) {
      // Use requestAnimationFrame to defer animation setup
      requestAnimationFrame(() => {
        addAnimation();
      });
    }
  }, [inView, addAnimation]);
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={setRefs}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        "will-change-transform",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]
             will-change-transform translate-z-0"
            style={{
              //   background:
              //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            // change to idx cuz we have the same name
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* change text color, text-lg */}
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-body">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                {/* add this div for the profile img */}
                <div className="me-3">
                
                </div>
                <span className="flex flex-col gap-1">
                  {/* change text color, font-normal to font-bold, text-xl */}
                  <span className="text-xl font-bold font-accent leading-[1.6] text-white">
                    {item.name}
                  </span>
                  {/* change text color */}
                  <span className=" text-sm leading-[1.6] text-white-200 font-accent">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

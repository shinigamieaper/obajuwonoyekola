"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    subItems?: { name: string; link: string }[];
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current: any) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // Always show navbar at the very top
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] :min-w-[70vw] lg:min-w-fit  fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <div key={`link=${idx}`} className="relative">
            <div 
              onClick={() => navItem.subItems && toggleDropdown(navItem.name)}
              className={cn(
                "relative dark:text-neutral-50 items-center flex font-accent space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-sm sm:text-[10px]",
                navItem.subItems ? "cursor-pointer font-accent" : ""
              )}
            >
              <Link href={navItem.link}>
                <span className="block font-accent sm:hidden">{navItem.icon}</span>
                <span className="text-xs  flex font-accent items-center">
                  {navItem.name}
                  {navItem.subItems && <ChevronDown className={`ml-1 h-4 w-4 font-accent transition-transform ${openDropdown === navItem.name ? 'rotate-180' : ''}`} />}
                </span>
              </Link>
            </div>
            {navItem.subItems && openDropdown === navItem.name && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  backdropFilter: "blur(16px) saturate(180%)",
                  backgroundColor: "rgba(17, 25, 40, 0.75)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
                className="absolute p-2 mt-2 space-y-2 min-w-[100px] z-50 shadow-lg"
              >
                {navItem.subItems.map((subItem: any, subIdx: number) => (
                  <Link
                    key={`sublink=${subIdx}`}
                    href={subItem.link}
                    className="block text-xs text-neutral-50 hover:bg-white/10 px-2 py-1.5 rounded transition-colors duration-200 font-accent"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};

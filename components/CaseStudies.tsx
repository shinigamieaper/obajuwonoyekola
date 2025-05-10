"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 relative z-10">
      {/* Background grid */}
      <div className="absolute inset-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] pointer-events-none z-0">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      </div>

      <div className="relative z-10">
        <h1 className="font-heading heading ">
          Strategic{" "}
          <span className="text-purple">Marketing Case Studies</span>
        </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={`visit`} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[28vh] lg:h-[40vh] pb-4 mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl z-0"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" width={500} height={300} className="w-full h-full" />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={300}
                  height={200}
                  className="z-122 absolute bottom-0 object-contain"
                />
              </div>

              <h2 className="font-heading font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple">
                {item.title}
              </h2>

              <div className="space-y-2">
                <h3 className="font-accent text-lg font-semibold">Challenge</h3>
                <p
                  className="font-body lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>
              </div>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="tool icon" width={32} height={32} className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    View Case Study
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

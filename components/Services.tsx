"use client";

// React and state management imports
import React, { useState } from "react";

// Data import for services
import { services } from "@/data";

// Component imports
import MagicButton from "./MagicButton";

// Icon imports
import { FaLocationArrow, FaExpand } from "react-icons/fa6";
import Image from "next/image";

/**
 * Services Component
 * Displays a grid of services with expandable content
 * 
 * Key Features:
 * - Dynamic service rendering from data
 * - Expandable service descriptions
 * - Hover effects on service cards
 * - Tech icon display
 * - Contact button at the bottom
 */
type ExpandedContentObject = {
  approach: string[];
  delivers: string[];
  workWithHim: string[];
};

type ExpandedContent = ExpandedContentObject | string;

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  iconLists: string[];
  expandedContent: ExpandedContent;
};

const Services: React.FC = () => {
  // State to track which service is currently expanded
  const [expandedServiceId, setExpandedServiceId] = useState<number | null>(null);

  /**
   * Toggle the expanded state of a service
   * @param id - The ID of the service to expand/collapse
   */
  const toggleExpand = (id: number) => {
    // If the same service is clicked, collapse it. Otherwise, expand the new service
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    // Services section with full-width layout
    <section id="services" className="py-20 relative z-10">
      {/* Background grid */}
      <div className="absolute inset-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] pointer-events-none z-0">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* Section heading with highlighted text */}
        <h1 className="font-heading  heading ">
          My <span className="text-purple">Services</span>
        </h1>

        {/* Flexible grid of service cards */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {/* Map through services and render individual cards */}
        {services.map((service: Service) => (
          <div
            key={service.id}
            // Responsive card sizing and grouping for hover effects
            className="bg-[#13162D] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 sm:w-96 w-[80vw] group"
          >
            {/* Service image container with hover effects */}
            <div className="relative h-48  w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => toggleExpand(service.id)}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/40 transition"
                >
                  <FaExpand />
                </button>
              </div>
            </div>

            {/* Service details container */}
            <div className="p-6">
              {/* Service title */}
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                {service.title}
              </h3>

              {/* Conditional rendering of description (short/expanded) */}
              <div
                className="text-gray-300 mb-4 font-body"
              >
                {expandedServiceId === service.id 
                  ? (typeof service.expandedContent === 'object' && 'approach' in service.expandedContent ? (
                    <>
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Approach:</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {(service.expandedContent as ExpandedContentObject).approach.map((item: string, index: number) => (
                            <li key={index} className="mb-1">{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">What He Delivers:</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {(service.expandedContent as ExpandedContentObject).delivers.map((item: string, index: number) => (
                            <li key={index} className="mb-1">{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Why Work With Him:</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {(service.expandedContent as ExpandedContentObject).workWithHim.map((item: string, index: number) => (
                            <li key={index} className="mb-1">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>{service.expandedContent}</>
                  ))
                  : service.description
                }
              </div>

              {/* Footer of service card with tech icons and expand/collapse button */}
              <div className="flex items-center justify-between">
                {/* Tech icons with overlapping effect */}
                <div className="flex items-center">
                  {service.iconLists.map((icon, index) => (
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

                {/* Expand/Collapse button */}
                <button 
                  onClick={() => toggleExpand(service.id)}
                  className="text-purple hover:text-purple-300 transition"
                >
                  {expandedServiceId === service.id ? 'Collapse' : 'Expand'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact section at the bottom of services */}
      <div className="flex justify-center mt-10">
        <a href="#contact">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Services;

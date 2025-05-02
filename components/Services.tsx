"use client";

// React and state management imports
import React, { useState } from "react";

// Data import for services
import { services } from "@/data";

// Component imports
import MagicButton from "./MagicButton";

// Icon imports
import { FaLocationArrow, FaExpand } from "react-icons/fa6";

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
    <section id="services" className="py-20">
      {/* Section heading with highlighted text */}
      <h1 className="heading">
        My <span className="text-purple">Services</span>
      </h1>

      {/* Flexible grid of service cards */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {/* Map through services and render individual cards */}
        {services.map((service) => (
          <div
            key={service.id}
            // Responsive card sizing and grouping for hover effects
            className="bg-[#13162D] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 sm:w-96 w-[80vw] group"
          >
            {/* Service image container with hover effects */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
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
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>

              {/* Conditional rendering of description (short/expanded) */}
              <p
                className="text-gray-300 mb-4"
              >
                {expandedServiceId === service.id 
                  ? service.expandedContent 
                  : service.description
                }
              </p>

              {/* Footer of service card with tech icons and expand/collapse button */}
              <div className="flex items-center justify-between">
                {/* Tech icons with overlapping effect */}
                <div className="flex items-center space-x-[-10px]">
                  {service.iconLists.map((icon, index) => (
                    <img 
                      key={index} 
                      src={icon} 
                      alt="Tech Icon" 
                      className="w-8 h-8 rounded-full border-2 border-white/20 bg-black"
                    />
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
    </section>
  );
};

export default Services;

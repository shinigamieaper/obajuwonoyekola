"use client";

import { useState, useEffect } from 'react';

interface MarketingExperience {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface MarketingExperienceCounterProps {
  startDate?: string;
  className?: string;
  itemClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export const MarketingExperienceCounter: React.FC<MarketingExperienceCounterProps> = ({
  startDate = '2019-12-15',
  className = 'flex flex-wrap justify-center gap-4',
  itemClassName = 'flex items-center space-x-3',
  valueClassName = 'text-xl font-bold text-white w-12 text-right',
  labelClassName = 'text-xs text-gray-400'
}) => {
  const [marketingExperience, setMarketingExperience] = useState<MarketingExperience>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDateObj = new Date(startDate);
    
    const calculateTimeDifference = (start: Date, end: Date): MarketingExperience => {
      const totalSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);
      
      const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
      const remainingSeconds = totalSeconds % (365 * 24 * 60 * 60);
      
      const months = Math.floor(remainingSeconds / (30 * 24 * 60 * 60));
      const remainingSecondsAfterMonths = remainingSeconds % (30 * 24 * 60 * 60);
      
      const days = Math.floor(remainingSecondsAfterMonths / (24 * 60 * 60));
      const remainingSecondsAfterDays = remainingSecondsAfterMonths % (24 * 60 * 60);
      
      const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
      const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);
      
      const minutes = Math.floor(remainingSecondsAfterHours / 60);
      const seconds = remainingSecondsAfterHours % 60;
      
      return { years, months, days, hours, minutes, seconds };
    };

    const updateExperience = () => {
      const now = new Date();
      const experience = calculateTimeDifference(startDateObj, now);
      setMarketingExperience(experience);
    };

    // Initial update
    updateExperience();

    // Use requestAnimationFrame for smoother updates
    let frameId: number;
    const animateExperience = () => {
      updateExperience();
      frameId = requestAnimationFrame(animateExperience);
    };

    frameId = requestAnimationFrame(animateExperience);

    // Cleanup function
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [startDate]);

  return (
    <div className={className}>
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
          className={itemClassName}
        >
          <span className={valueClassName}>{value}</span>
          <p className={labelClassName}>{label}</p>
        </div>
      ))}
    </div>
  );
};

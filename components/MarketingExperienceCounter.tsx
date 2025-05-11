"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';

interface MarketingExperience {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Memoized time calculation function
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

interface MarketingExperienceCounterProps {
  startDate?: string;
  className?: string;
  itemClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export const MarketingExperienceCounter: React.FC<MarketingExperienceCounterProps> = ({
  startDate = '2021-03-15',
  className = 'flex flex-wrap justify-center gap-4',
  itemClassName = 'flex items-center space-x-3',
  valueClassName = 'font-accent text-xl font-bold text-white w-12 text-right',
  labelClassName = 'font-body text-xs text-gray-400'
}) => {
  // Memoize the start date to prevent unnecessary recalculations
  const startDateObj = useMemo(() => new Date(startDate), [startDate]);

  // Initialize state with actual values instead of zeros
  const [marketingExperience, setMarketingExperience] = useState<MarketingExperience>(() => 
    calculateTimeDifference(startDateObj, new Date())
  );

  // Memoize the update function
  const updateExperience = useCallback(() => {
    const now = new Date();
    setMarketingExperience(prev => {
      const next = calculateTimeDifference(startDateObj, now);
      // Only update if seconds changed to prevent unnecessary rerenders
      return next.seconds !== prev.seconds ? next : prev;
    });
  }, [startDateObj]);

  useEffect(() => {
    // Update every second instead of every frame
    const intervalId = setInterval(updateExperience, 1000);

    return () => clearInterval(intervalId);
  }, [updateExperience]);

  // Memoize the time units to prevent unnecessary recalculations
  const timeUnits = useMemo(() => [
    { label: 'Years', value: marketingExperience.years },
    { label: 'Months', value: marketingExperience.months },
    { label: 'Days', value: marketingExperience.days },
    { label: 'Hours', value: marketingExperience.hours },
    { label: 'Minutes', value: marketingExperience.minutes },
    { label: 'Seconds', value: marketingExperience.seconds }
  ], [marketingExperience]);

  return (
    <div className={className}>
      {timeUnits.map(({ label, value }) => (
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

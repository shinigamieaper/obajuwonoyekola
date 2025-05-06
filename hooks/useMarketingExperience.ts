import { useState, useEffect } from 'react';

interface MarketingExperience {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useMarketingExperience = (startDateString: string = '2019-12-15'): MarketingExperience => {
  const [experience, setExperience] = useState<MarketingExperience>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date(startDateString);
    
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
      const currentExperience = calculateTimeDifference(startDate, now);
      setExperience(currentExperience);
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
  }, [startDateString]);

  return experience;
};

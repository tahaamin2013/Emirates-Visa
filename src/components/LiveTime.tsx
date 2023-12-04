import Image from 'next/image';
import { useState, useEffect } from 'react';

const LiveTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const dubaiTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dubai',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

      const liveTime = `Dubai Local Time - ${dubaiTime}`;
      
      // Set the current time in state
      setCurrentTime(liveTime);
    }, 1000);

    // Clear interval on unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bottom-6 rounded-full bg-white shadow-md py-4 px-5 border w-[320px] flex text-center">
      <Image src="/clock.svg" width={28} className="mr-5" height={28} alt="clock" />
      <span className="mt-[2px]">{currentTime}</span>
    </div>
  );
};

export default LiveTime;

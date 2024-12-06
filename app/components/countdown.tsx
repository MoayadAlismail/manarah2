'use client'
import React, { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date('2024-12-21T23:59:59');

    const timer = setInterval(() => {
      const now = new Date();
      const totalSeconds = Math.floor((deadline.getTime() - now.getTime()) / 1000);

      if (totalSeconds <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-2 text-blue-800 text-sm text-center">
      <span className="font-semibold">ينتهي التسجيل بعد: </span>
      <span>{timeLeft.days} يوم </span>
      <span>{timeLeft.hours} ساعة </span>
      <span>{timeLeft.minutes} دقيقة </span>
      <span>{timeLeft.seconds} ثانية</span>
    </div>
  );
};

export default Countdown;

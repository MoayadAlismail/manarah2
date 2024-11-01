'use client'
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(timer);
      } else {
        setTimeLeft(prevTime => {
          const newTime = { ...prevTime };
          if (newTime.seconds > 0) {
            newTime.seconds--;
          } else if (newTime.minutes > 0) {
            newTime.minutes--;
            newTime.seconds = 59;
          } else if (newTime.hours > 0) {
            newTime.hours--;
            newTime.minutes = 59;
            newTime.seconds = 59;
          } else if (newTime.days > 0) {
            newTime.days--;
            newTime.hours = 23;
            newTime.minutes = 59;
            newTime.seconds = 59;
          }
          return newTime;
        });
      }
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="py-2 text-blue-800 text-sm text-center">
      <span className="font-semibold">ينتهي التسجيل بعد: </span>
      <span>{timeLeft.days} أيام </span>
      <span>{timeLeft.hours} ساعة </span>
      <span>{timeLeft.minutes} دقيقة </span>
      <span>{timeLeft.seconds} ثانية</span>
    </div>
  );
};

export default Countdown;

"use client";
import React, { useState, useEffect } from "react";

const FlashSaleCountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(36000); // 10 hours in seconds

  useEffect(() => {
    // Exit early when we reach 0
    if (!timeLeft) return;

    // Set up an interval
    const timerInterval = setInterval(() => {
      // Decrease time left by 1 second
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <div className="bg-[#E85363] text-white px-5 py-1 rounded-md text-lg w-[50%] mx-auto mt-5">
        <span className="text-2xl">{String(hours).padStart(2, "0")}:</span>
        <span className="text-2xl">{String(minutes).padStart(2, "0")}:</span>
        <span className="text-2xl">{String(seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default FlashSaleCountDown;

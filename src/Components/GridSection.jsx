import React, { useState, useEffect } from "react";
import { Grid_layout } from "../Pages/Grid_Layout";
import { gridbg1 } from "../assets/Images";

export default function GridSection() {
  const [vibrateIndex, setVibrateIndex] = useState(null);

  // Trigger vibration for a random item periodically
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select an indices 1,2,3 to vibrate
      const linkIndices = [1, 2, 3,];
      const randomIndex = linkIndices[Math.floor(
        Math.random() * linkIndices.length
      )];
      setVibrateIndex(randomIndex);

      // Remove vibration after a short delay
      setTimeout(() => {
        setVibrateIndex(null);
      }, 300); // Match the duration of the CSS animation
    }, 2000); // Adjust interval time as needed

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div
      className="w-full grid grid-cols-2 md:bg-main md:grid-cols-3 pt-20 auto-rows-[300px] gap-4"
      style={{
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {Grid_layout.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col justify-center items-center border-2 rounded-lg
            ${
              i === 0
                ? "hidden md:block md:row-span-2 bg-orange-400 bg-opacity-50"
                : ""
            } 
            ${i === 3 ? "col-span-2" : ""} 
            ${vibrateIndex === i ? "vibrate" : ""}`}
          style={{
            backgroundImage: i === 0 ? `url(${gridbg1})` : "",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}

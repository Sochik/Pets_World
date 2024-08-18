import React from 'react'
import { Grid_layout } from '../Pages/Grid_Layout'
import { gridbg1 } from '../assets/Images';

export default function GridSection() {
  return (
    <div
      className="w-full grid grid-cols-2 md:bg-main  md:grid-cols-3 pt-20 auto-rows-[300px] gap-4"
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
              ${i === 0 ? "hidden md:block md:row-span-2  bg-orange-400 bg-opacity-50" : ""} ${
            i === 3 ? "col-span-2" : ""
          }`}
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
 
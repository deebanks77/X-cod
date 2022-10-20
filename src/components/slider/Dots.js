import React from "react";

function Dots({ activeIndex, onclick, imageSlider }) {
  return (
    <div className="all-dots absolute top-[50%] left-[50%] z-100">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`h-[100px] w-[100px] rounded-[50%] border-2px border-red-700 ${
            activeIndex === index ? "dot active-dot" : "dot"
          }`}
          onClick={(index) => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;

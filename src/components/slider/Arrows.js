import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./slider.css";

function Arrows({ prevSlide, nextSlide, testimonial }) {
  return (
    <div className="arrows">
      <ArrowBackIosNewIcon
        fontSize="large"
        className={`prev absolute ${testimonial ? "top-[35%]" : "top-[50%]"} ${
          testimonial ? "left-[-10px]" : "left-[0]"
        } cursor-pointer text-white ${
          testimonial ? "bg-transparent" : "bg-gray-500"
        } ${
          testimonial ? "hover:bg-gray-500" : "hover:bg-gray-500"
        } p-2 rounded-r `}
        onClick={() => prevSlide()}
      />
      <ArrowForwardIosIcon
        fontSize="large"
        className={`next absolute ${testimonial ? "top-[35%]" : "top-[50%]"} ${
          testimonial ? "right-[-10px]" : "right-[0]"
        } cursor-pointer  text-white ${
          testimonial ? "bg-transparent" : "bg-gray-500"
        } ${
          testimonial ? "hover:bg-gray-500" : "hover:bg-gray-500"
        } p-2 rounded-l`}
        onClick={() => nextSlide()}
      />
    </div>
  );
}

export default Arrows;

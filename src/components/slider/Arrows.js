import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Arrows({ prevSlide, nextSlide, testimonial }) {
  return (
    <div className="arrows">
      <BsChevronLeft
        className={`prev absolute tablet:w-[20px] tablet:h-[20px] bigTablet:w-[30px] bigTablet:h-[30px] ${
          testimonial ? "top-[35%]" : "top-[50%]"
        } ${
          testimonial ? "left-[-10px]" : "left-[0]"
        } cursor-pointer text-white ${
          testimonial ? "bg-transparent" : "bg-gray-500"
        } ${
          testimonial ? "hover:bg-gray-500" : "hover:bg-gray-700"
        } p-[2px] bigTablet:p-1 rounded-r `}
        onClick={() => prevSlide()}
      />
      <BsChevronRight
        className={`next absolute tablet:w-[20px] tablet:h-[20px] bigTablet:w-[30px] bigTablet:h-[30px] ${
          testimonial ? "top-[35%]" : "top-[50%]"
        } ${
          testimonial ? "right-[-10px]" : "right-[0]"
        } cursor-pointer  text-white ${
          testimonial ? "bg-transparent" : "bg-gray-500"
        } ${
          testimonial ? "hover:bg-gray-500" : "hover:bg-gray-700"
        } p-[2px] bigTablet:p-1 rounded-l`}
        onClick={() => nextSlide()}
      />
    </div>
  );
}

export default Arrows;

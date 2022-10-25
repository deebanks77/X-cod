import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Arrows({ prevSlide, nextSlide, testimonial }) {
  return (
    <div className="arrows">
      <BsChevronLeft
        className={`prev absolute tablet:w-[20px] tablet:h-[20px] bigTablet:w-[25px] bigTablet:h-[25px] text-black  ${
          testimonial
            ? "top-[35%] left-[-10px] bg-gray-100 text-black hover:bg-gray-200 bg-opacity-30"
            : "top-[50%] left-[-5px] bg-gray-300 hover:bg-gray-300"
        } cursor-pointer text-white  p-[2px] bigTablet:p-1 rounded-[50%] `}
        onClick={() => prevSlide()}
      />
      <BsChevronRight
        className={`next absolute tablet:w-[20px] tablet:h-[20px] bigTablet:w-[25px] bigTablet:h-[25px] text-black ${
          testimonial
            ? "top-[35%] right-[-10px] bg-gray-100 text-black hover:bg-gray-200 bg-opacity-30"
            : "top-[50%] right-[-5px] bg-gray-300 hover:bg-gray-300"
        } cursor-pointer  text-white  p-[2px] bigTablet:p-1 rounded-[50%]`}
        onClick={() => nextSlide()}
      />
    </div>
  );
}

export default Arrows;

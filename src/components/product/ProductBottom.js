import React, { useEffect } from "react";
import "./Product.css";
import images from "../../asset/assets";

function ProductBottom(props) {
  const { image, header } = props;

  return (
    <div className="software flex  mobile:flex-col-reverse bigTablet:flex-row items-center justify-center laptop:justify-between mobile:gap-5  laptop:gap-[100px] mobile:w-full laptop:w-[1000px]  mx-auto mt-[40px] tablet:mt-[70px] desktop:mt-[60px] mb-[80px] laptop:mb-[156px]">
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        className="mobile:mt-[20px] px-4 bigTablet:px-0"
      >
        <img
          src={image}
          alt="/"
          className="mx-auto bigTablet::w-[400px] bigTablet:h-[380px] laptop:w-[500px] laptop:h-[450px]  object-contain "
        />
      </div>

      <div
        data-aos="fade-in"
        className="flex flex-col items-start justify-center mt-[10px] bigTablet:w-[380px] laptop:w-[450px] laptop:h-[400px]  px-3 bigTablet:px-0"
      >
        <h4 className="font-[Inter] font-bold text-[30px] laptop:text-[35px] desktop:text-[43px] mb-30px">
          {header}
        </h4>
        <p className="font-[inter] font-normal text-[18px] laptop:text-[20px] desktop:text-[24px] text-[#909090] mb-[30px] leading-[30px]">
          Never run out of graphics, videos and music assets to use while
          creating your videos. With ReelApps Libraries of stock free images,
          video clips and royalty free music, it has never been this easier.
        </p>
        <div className="flex items-center gap-2">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[15px] py-[10px]  laptop:px-[22px] laptop:py-[16px] text-white rounded-[7px] cursor-pointer">
            View Software
          </button>
          <div className="flex items-center justify-center w-[40px] h-[40px] laptop:w-[57px] laptop:h-[57px] bg-[#4361EE] rounded-[50%]">
            <img
              src={images.arrowRight}
              alt="/"
              className="w-[33pxpx] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBottom;

// desktop:w-[580px] desktop:h-[550px]
// desktop:w-[580px] desktop:h-[450px]

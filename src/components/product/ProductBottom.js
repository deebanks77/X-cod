import React, { useEffect } from "react";
import "./Product.css";
import images from "../../asset/assets";

function ProductBottom(props) {
  const { image, header } = props;

  return (
    <div className="software flex  mobile:flex-col-reverse bigTablet:flex-row laptop:flex-row items-center justify-center mobile:gap-5 laptop:gap-10  gap-20 mobile:w-full laptop:w-[1000px] desktop:w-[1288px]  mx-auto mobile:mt-[70px] mt-[131px] mb-[156px]">
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="mobile:mt-[28px] "
      >
        <img
          src={image}
          alt="/"
          className="mobile:w-[400px] mobile:h-[298px] desktop:w-[500px] desktop:h-[450px] w-[584px] h-[554px] object-contain"
        />
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-col items-start justify-center mt-[10px] mobile:w-[380px] mobile:h-[300px] desktop:w-[500px] desktop:h-[450px]  w-[584px] h-[554px] p-5"
      >
        <h4 className="font-[Inter] font-bold mobile:text-[30px] desktop:text-[43px] mb-30px">
          {header}
        </h4>
        <p className="font-[poppins] font-normal mobile:text-[18px] bigTablet:text-[18px] desktop:text-[24px] text-[#909090] mb-[30px]">
          Never run out of graphics, videos and music assets to use while
          creating your videos. With ReelApps Libraries of stock free images,
          video clips and royalty free music, it has never been this easier.
        </p>
        <div className="flex items-center gap-2">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[22px] py-[16px] text-white rounded-[7px] cursor-pointer">
            View Software
          </button>
          <div className="flex items-center justify-center w-[57px] h-[57px] bg-[#4361EE] rounded-[50%]">
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

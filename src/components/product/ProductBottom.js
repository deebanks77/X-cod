import React, { useEffect } from "react";
import "./Product.css";
import arrowRight from "../../images/arrowRight.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductBottom(props) {
  const { image, header } = props;
  useEffect(() => {
    AOS.init({ offset: 200, duration: 600, easing: "ease-in-sine" });
    AOS.refresh();
  }, []);

  return (
    <div className="software flex items-center gap-20 w-[1288px] mx-auto mt-[131px] mb-[156px]">
      <div data-aos="zoom-in" data-aos-easing="ease-in-sine">
        <img src={image} alt="/" className="w-[584px] h-[554px]" />
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-start justify-center w-[584px] h-[554px]"
      >
        <h4 className="font-[Inter] font-bold text-[43px] mb-30px">{header}</h4>
        <p className="font-[Inter] font-normal text-[24px] text-[#909090] mb-[30px]">
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
              src={arrowRight}
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

import React, { useState, useEffect } from "react";
import "./Hero.css";
import images from "../../asset/assets";
import Note from "./Note";
import Arrows from "../slider/Arrows";

function Hero() {
  const imageSlider = [
    images.screenshot,
    "https://www.duplichecker.com/newassets/content_img/new-reverse-image-search.png",
  ];

  const len = imageSlider.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // if (!Array.isArray(imageSlider) || imageSlider.length <= 0) {
  //   return null;
  // }

  return (
    <div className="flex flex-col items-center mobile:mt-[32px] tablet:mt-[38px] laptop:mt-[45px] desktop:mt-[52px] px-5 relative max-w-[1400px] mx-auto">
      <div className="mobile:w-[52px] mobile:h-[45px] mobile:mb-[26px] tablet:w-[72px] tablet:h-[62px] tablet:mb-[20px] laptop:w-[92px] laptop:h-[81px] laptop:mb-[26px] desktop:mb-[32px] z-10   animate-scale">
        <img src={images.xcodLogo} alt="xcod logo" />
      </div>

      <div className="w-[928px] h-[126px] font-[poppins] font-[700] mobile:text-[18px] mobile2:text-[22px] tablet:text-[28px] bigTablet:text-[34px] laptop:text-[40px] text-center z-10 relative animate-scale">
        <div className="mobile:mb-[20px] laptop:mb-[20px] desktop:mb-[25px]">
          <p>
            Optimize Your{" "}
            <span className="text-[#4361EE]">Profiable Business</span>{" "}
          </p>
          <p>With Our Premium Software Solution</p>
        </div>
        <p className="mobile:text-[16px] tablet:text-[18px] laptop:text-[24px] font-[400] font-[Exo] ">
          Making Business collaborate easier
        </p>
      </div>

      <div className="circle laptop:absolute top-[100px] laptop2:left-[20px] desktop:left-[100px] w-[400px] h-[400px] border-[#858585] hidden  laptop2:block laptop:border-[#858585]  border-[2px] rounded-[50%]">
        <div className="imageNote absolute mobile:w-[150px] mobile:h-[150px] w-[189px] h-[339px] mobile:top-[116px] laptop2:left-[50px] laptop2:top-[250px] desktop:top-[296px] desktop:left-[12px]">
          <img
            src={images.image}
            alt="/"
            className="mobile:w-[120px] mobile:h-[130px] tablet:w-[176px] tablet:h[218px] object-contain z-10 relative transition-all duration-500"
          />
          <div className="absolute top-[33px] left-[28px] mobile:w-[100px] mobile:h-[110px] w-[150px] h-[156px] bg-[#4895EF] rounded-t-[33px] "></div>
          <div className="absolute mobile:top-[140px] top-[190px] left-[28px] mobile:w-[100px] mobile:h-[110px] w-[150px] h-[156px] bg-[#4895EF] rounded-b-[33px] overflow-hidden">
            <Note />
          </div>
        </div>
      </div>

      <div className="circle absolute top-[300px] laptop2:right-[50px] desktop:right-[95px] w-[400px] h-[400px] bg-[#DDEDFF] rounded-[50%] mobile:hidden laptop2:block">
        <div className="noteFireIcon absolute w-[159px] h-[201px] top-[30px] left-[240px] ">
          <Note />
          <img
            src={images.fireIcon}
            alt="fire icon"
            className="w-[122px] h-[122px] absolute top-[89px] left-[27px] animate-spin360"
          />
        </div>
      </div>

      <div className="mobile:block rectangle w-[100%] h-[280px] mobile2:h-[380px]  tablet:w-[550px] tablet:h-[400px] bigTablet:w-[600px] bigTablet:h-[450px] laptop:w-[650px] laptop:h-[500px] desktop:w-[700px] desktop:h-[500px] relative bg-white tablet:mt-[30px] bigTablet:mt-[60px] laptop:mt-[90px] desktop:mt-[120px]  rounded-md animate-scale px-[10px] pb-[10px]">
        <div className="flex items-center gap-1 my-4 mx-4 cursor-pointer">
          <div className="mobile:w-1 mobile:h-1 laptop:w-2 laptop:h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
          <div className="mobile:w-1 mobile:h-1 laptop:w-2 laptop:h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
          <div className="mobile:w-1 mobile:h-1 laptop:w-2 laptop:h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
        </div>

        {imageSlider.map((slide, index) => {
          return (
            <div>
              {index === activeIndex && (
                <img
                  src={slide}
                  alt=""
                  className="w-[100%] h-[100%] object-contain animate-opacity"
                />
              )}
            </div>
          );
        })}

        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
      </div>
    </div>
  );
}

export default Hero;

{
  /* <div className=" absolute laptop:top-[70px] laptop:left-[550px] desktop:top-[230px] desktop:left-[500px] laptop:w-[200px] laptop:h-[200px] desktop:w-[339px] desktop:h-[200px] bg-white hidden desktop:block">
          <div className="flex items-center gap-1 my-1 mx-2">
            <div className="w-1 h-1 rounded-[50%] border-gray-400 border-[2px]"></div>
            <div className="w-1 h-1 rounded-[50%] border-gray-400 border-[2px]"></div>
            <div className="w-1 h-1 rounded-[50%] border-gray-400 border-[2px]"></div>
          </div>
          <img
            src={screen}
            alt="/"
            className="w-[100%] h-[100%] object-cover"
          />
        </div> */
}

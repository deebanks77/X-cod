import React from "react";
import "./Hero.css";
import xcodLogo from "../../images/xcodLogo.png";
import image2 from "../../images/image2.png";
import fireIcon from "../../images/fire.png";
import screen from "../../images/screen.png";
import screenshot from "../../images/Screenshot.png";
import Note from "./Note";

function Hero() {
  return (
    <div className="flex flex-col items-center mobile:mt-[32px] tablet:mt-[42px] laptop:mt-[52px]">
      <div className="mobile:w-[52px] mobile:h-[45px] mobile:mb-[26px] tablet:w-[72px] tablet:h-[62px] tablet:mb-[20px] laptop:w-[92px] laptop:h-[81px] laptop:mb-[32px] z-10   animate-scale">
        <img src={xcodLogo} alt="xcod logo" />
      </div>

      <div className="w-[928px] h-[126px] font-[poppins] font-[700] mobile:text-[18px] mobile2:text-[22px] tablet:text-[28px] laptop:text-[40px] desktop:text-[40px] text-center z-10 relative">
        <div className="mobile:mb-[20px] laptop:mb-[25px]">
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

      <div
        className="circle mobile:relative laptop:absolute mobile:top-[-130px] laptop:top-[218px] left-[120px] w-[400px] h-[400px] border-[#858585] mobile:hidden  desktop:block laptop:border-[#858585]  border-[2px] rounded-[50%] animate-slideIn2"
        on
      >
        <div className="imageNote absolute mobile:w-[150px] mobile:h-[150px] w-[189px] h-[339px] mobile:top-[116px] mobile:left-[79px] tablet:top-[150px] desktop:top-[296px] desktop:left-[12px] laptop:hidden desktop:block">
          <img
            src={image2}
            alt="/"
            className="mobile:w-[120px] mobile:h-[130px] tablet:w-[176px] tablet:h[218px] object-contain z-10 relative transition-all duration-500"
          />
          <div className="absolute top-[33px] left-[28px] mobile:w-[100px] mobile:h-[110px] w-[150px] h-[156px] bg-[#4895EF] rounded-t-[33px] "></div>
          <div className="absolute mobile:top-[140px] top-[190px] left-[28px] mobile:w-[100px] mobile:h-[110px] w-[150px] h-[156px] bg-[#4895EF] rounded-b-[33px] overflow-hidden">
            <Note />
          </div>
        </div>
      </div>

      <div className="circle absolute top-[445px] right-[95px] w-[400px] h-[400px] bg-[#DDEDFF] rounded-[50%] animate-slideIn mobile:hidden desktop:block">
        <div className="noteFireIcon absolute w-[159px] h-[201px] top-[30px] left-[240px] ">
          <Note />
          <img
            src={fireIcon}
            alt="fire icon"
            className="w-[122px] h-[122px] absolute top-[89px] left-[27px] animate-spin360"
          />
        </div>
      </div>

      <div className="mobile:block rectangle mobile:w-[280px] mobile:h-[180px] tablet:w-[460px] tablet:h-[280px] laptop:w-[650px]  laptop:h-[350px] desktop:w-[700px] desktop:h-[500px] relative bg-white tablet:mt-[30px] laptop:mt-[100px] desktop:mt-[130px]  rounded-md animate-scale ">
        <div className="flex items-center gap-1 my-4 mx-4">
          <div className="mobile:w-1 mobile:h-1 laptop:w-2 laptop:h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
          <div className="mobile:w-1 mobile:h-1 laptop:w-2 laptop:h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
          <div className="mobile:w-1 mobile:h-1 laptop:w-2 laptop:h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
        </div>
        <img
          src={screenshot}
          alt="/"
          className="absolute mobile:top-7 mobile:left-2 laptop:top-[40px] laptop:left-[7px] desktop:top-[29px] desktop:left-[11px] mobile:w-[270px] mobile:h-[150px]  tablet:w-[450px] tablet:h-[250px] laptop:w-[600px] laptop:h-[300px] desktop:w-[650px] desktop:h-[476px] object-contain"
        />
        <div className="absolute laptop:top-[70px] laptop:left-[550px] desktop:top-[230px] desktop:left-[500px] laptop:w-[200px] laptop:h-[200px] desktop:w-[339px] desktop:h-[200px] bg-white hidden desktop:block">
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
        </div>
      </div>
    </div>
  );
}

export default Hero;

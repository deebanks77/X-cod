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
    <div className="flex flex-col items-center mt-[72px]">
      <div className="w-[92px] h-[81px] mb-[46px] animate-scale">
        <img src={xcodLogo} alt="xcod logo" />
      </div>
      <div className="w-[928px] h-[126px] font-[poppins] font-[700] text-[48px] text-center z-10 relative">
        <div className="mb-[33px]">
          <p>
            Optimize Your{" "}
            <span className="text-[#4361EE]">Profiable Business</span>{" "}
          </p>
          <p>With Our Premium Software Solution</p>
        </div>
        <p className="text-[24px] font-[400] font-[Exo]">
          Making Business collaborate easier
        </p>
      </div>

      <div
        className="circle absolute top-[218px] left-[120px] w-[584px] h-[584px] border-[#858585] border-[2px] rounded-[50%] animate-slideIn2"
        on
      >
        <div className="imageNote absolute w-[189px] h-[339px] top-[426px] left-[19px] ">
          <img
            src={image2}
            alt="/"
            className="w-[176px] h[218px] z-10 relative "
          />
          <div className="absolute top-[33px] left-[28px] w-[150px] h-[156px] bg-[#4895EF] rounded-t-[33px] "></div>
          <div className="absolute top-[190px] left-[28px] w-[150px] h-[156px] bg-[#4895EF] rounded-b-[33px] overflow-hidden">
            <Note />
          </div>
        </div>
      </div>
      <div className="circle absolute top-[500px] right-[95px] w-[538px] h-[538px] bg-[#DDEDFF] rounded-[50%] animate-slideIn">
        <div className="noteFireIcon absolute w-[189px] h-[251px] top-[44px] left-[350px] ">
          <Note />
          <img
            src={fireIcon}
            alt="fire icon"
            className="w-[162px] h-[162px] absolute top-[89px] left-[27px] animate-spin360"
          />
        </div>
      </div>

      <div className="rectangle w-[800px] h-[630px] relative bg-white mt-[180px] rounded-md animate-scale">
        <div className="flex items-center gap-1 my-4 mx-4">
          <div className="w-3 h-3 rounded-[50%] border-gray-400 border-[2px]"></div>
          <div className="w-3 h-3 rounded-[50%] border-gray-400 border-[2px]"></div>
          <div className="w-3 h-3 rounded-[50%] border-gray-400 border-[2px]"></div>
        </div>
        <img
          src={screenshot}
          alt="/"
          className="absolute top-[69px] left-[11px] w-[750px] h-[476px]"
        />
        <div className="absolute top-[250px] left-[686px] w-[339px] h-[247px] bg-white">
          <div className="flex items-center gap-1 my-1 mx-2">
            <div className="w-1 h-1 rounded-[50%] border-gray-400 border-[2px]"></div>
            <div className="w-1 h-1 rounded-[50%] border-gray-400 border-[2px]"></div>
            <div className="w-1 h-1 rounded-[50%] border-gray-400 border-[2px]"></div>
          </div>
          <img src={screen} alt="/" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

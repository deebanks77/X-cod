import React from "react";
import icon from "../../images/image3.png";
import "./Feedback.css";

function Info({ index }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={`flexItem flex items-center gap-4 bg-white hover:bg-gray-200 cursor-pointer mobile:min-w-fit mobile3:w-[65%] laptop:min-w-[260px] desktop:min-w-[270px] laptop:h-[88px] desktop:h-[98px] px-5 py-2 rounded-[11px] mx-auto mb-[23px] mobile:ml-[0] mr-[20px] ${
        index !== 0 && "bg-[rgba(255,255,255,0.2)]"
      }`}
    >
      <img
        src={icon}
        alt="/"
        className={`tablet:block  ${index !== 0 && "opacity-25"}`}
      />
      <div
        className={`font-[poppins] mobile:text-[12px]  ${
          index !== 0 && "opacity-25"
        }`}
      >
        <p className={`font-bold text `}>Michael Vivian</p>
        <p>Marketer</p>
      </div>
    </div>
  );
}

export default Info;

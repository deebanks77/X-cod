import React from "react";
import "./Feedback.css";

function Info({ index, data, activeIndex, onclick }) {
  return (
    <div
      className={`flexItem flex items-center gap-4 hover:bg-white hover:opacity-100 cursor-pointer mobile3:w-[65%] midTablet:w-[170px] laptop:w-[210px] laptop:h-[88px] px-5 py-2 rounded-[11px] mx-auto mb-[23px] mobile:ml-[0] mr-[20px] font-[poppins] ${
        index === activeIndex
          ? "bg-white "
          : "bg-[rgba(255,255,255,0.2)] opacity-50"
      }`}
      onClick={() => onclick(index)}
    >
      <div className="w-[60px] h-[60px]">
        <img
          src={data.icon}
          alt="/"
          className={`tablet:block w-[100%] h-[100%] object-contain `}
        />
      </div>

      <div className={`font-[poppins] mobile:text-[12px]`}>
        <p className={`font-bold text `}>{data.name}</p>
        <p>{data.job}</p>
      </div>
    </div>
  );
}

export default Info;

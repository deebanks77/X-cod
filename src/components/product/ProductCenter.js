import React, { useEffect } from "react";

function ProductBottom(props) {
  const { icon, title, content, border, index } = props;

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      className={`w-[90%] tablet:w-[80%] laptop:w-[320px] laptop:h-[300px] laptop2:w-[350px]  bg-[#FFFFFF] p-[20px] rounded-[14px] relative`}
    >
      <img
        src={icon}
        alt="/"
        className="w-[25px] h-[25px] tablet:w-[35px] tablet:h-[30px] mb-[16px] object-contain"
      />
      <div className="font-[Inter] font-bold text-[20px]  mobile:mb-[14px] ">
        {title}
      </div>
      <div className="font-[Inter] font-[400] text-[16px]  leading-[23px] text-black/[0.35]">
        {content}
      </div>
      <div
        className={`${border === "#4895EF" && "bg-[#4895EF]"} ${
          border === "#4361EE" && "bg-[#4361EE]"
        } ${
          border === "#4CC9F0" && "bg-[#4CC9F0]"
        } w-full h-[8.5px] absolute bottom-0 left-0 rounded-[14px]`}
      ></div>
    </div>
  );
}

export default ProductBottom;

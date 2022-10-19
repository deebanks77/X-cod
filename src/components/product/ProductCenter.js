import React, { useEffect } from "react";

function ProductBottom(props) {
  const { icon, title, content, border, index } = props;

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="800"
      className={`mobile:w-[350px] mobile:min-h-[250px] bg-[#FFFFFF] mobile:p-[20px] p-[35px] rounded-[14px] relative`}
    >
      <img
        src={icon}
        alt="/"
        className="mobile:w-[35px] mobile:h-[30px] mobile:mb-[16px] mb-[27px] object-contain"
      />
      <div className="font-[Inter] font-bold mobile:text-[22px] mobile:mb-[14px] ">
        {title}
      </div>
      <div>{content}</div>
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

import React, { useEffect } from "react";

function ProductBottom(props) {
  const { icon, title, content, border, index } = props;

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="800"
      className={`w-[430px] h-[327px] bg-[#FFFFFF] p-[35px] rounded-[14px] relative`}
    >
      <img src={icon} alt="/" className="w-[47px] h-[40px] mb-[27px]" />
      <div className="font-[Inter] font-bold text-[28px] mb-[20px]">
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

import React from "react";
import icon from "../../images/image3.png";
import "./Feedback.css";

function Info({ index }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={`flexItem flex items-center gap-4 bg-white w-[332px] h-[98px] px-5 rounded-[11px] mx-auto mb-[23px] ${
        index !== 0 && "bg-[rgba(255,255,255,0.2)]"
      }`}
    >
      <img src={icon} alt="/" className={`${index !== 0 && "opacity-25"}`} />
      <div className={`font-[poppins] ${index !== 0 && "opacity-25"}`}>
        <p className={`font-bold `}>Michael Vivian</p>
        <p>Marketer</p>
      </div>
    </div>
  );
}

export default Info;

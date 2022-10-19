import React from "react";
import girlAtWork from "../../images/girl-working.png";
import arrowRight from "../../images/arrowRight.png";

function RequestDemo() {
  return (
    <div className="w-full">
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="mobile:mt-[80px] desktop:mt-[166px] mb-[36px] font-bold font-[poppins] mobile:text-[24px] tablet:text-[28px] desktop:text-[38px] text-center"
      >
        REQUEST A DEMO
      </h2>
      <div className="flex mobile:flex-col-reverse bigTablet:flex-row bigTablet:justify-center items-center mobile:w-full bigTablet:w-[700px] laptop:w-[850px] desktop:w-[1000px] mx-auto bg-white rounded-[20px] mobile:pl-0 pl-[50px] mobile:pt-[20px] laptop:pt-[50px] mobile:pb-[20px] laptop:pb-[50px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mobile:w-[300px] desktop:w-[450px] font-[manrope]"
        >
          <form>
            <div className="font-[600] mobile:mb-[30px] desktop:mb-[50px]">
              <label
                htmlFor="name"
                className="block mobile:text-[16px] desktop:text-[19px] text-[#808285]"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Full Name"
                className="w-full mobile:h-[45px] desktop:h-[60px] bg-transparent border-b-[2px] border-b-gray-600 mobile:text-[16px] desktop:text-[22px] text-black outline-none"
              />
            </div>
            <div className="font-[600] mobile:mb-[30px] mb-[50px]">
              <label
                htmlFor="email"
                className="block mobile:text-[16px] desktop:text-[19px] text-[#808285] "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                className="w-full mobile:h-[45px] desktoph-[60px] bg-transparent border-b-[2px] border-b-slate-800 mobile:text-[16px] desktop:text-[22px] text-black outline-none"
              />
            </div>
            <select className="w-full mobile:h-[48px] desktop:h-[64px] bg-[#EAEAEA] rounded-[10px] mobile:text-[16px] desktop:text-[20px] font-[600] px-[20px] mobile:mb-[30px] mb-[59px] outline-none">
              <option value="Aiwa">Aiwa</option>
              <option value="QR Verse">QR Verse</option>
            </select>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[28px] py-[15px] text-white mobile:text-[16px] desktop:text-[23px] font-[poppins] rounded-[7px] cursor-poi nter">
                Request Demo
              </button>
              <div className="flex items-center justify-center mobile:w-[45px] w-[57px]  mobile:h-[45px] h-[57px] bg-[#4361EE] rounded-[50%]">
                <img
                  src={arrowRight}
                  alt="/"
                  className="mobile:w-[25px] desktop:w-[33pxpx] object-contain"
                />
              </div>
            </div>
          </form>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mobile:w-[300px] mobile:h-[290px] desktop:w-[450px] desktop:h-[400px]"
        >
          <img src={girlAtWork} alt="/" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;

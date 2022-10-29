import React from "react";
import girlAtWork from "../../images/girl-working.png";
import arrowRight from "../../images/arrowRight.png";

function RequestDemo() {
  return (
    <div className="w-full">
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="mobile:mt-[80px] mb-[36px] font-bold font-[poppins] mobile:text-[24px] tablet:text-[28px] desktop:text-[32px] text-center"
      >
        REQUEST A DEMO
      </h2>
      <div className="flex mobile:flex-col-reverse bigTablet:flex-row bigTablet:justify-center items-center mobile:w-full bigTablet:w-[700px] laptop:w-[850px] mx-auto bg-white rounded-[20px] mobile:pl-0 pl-[50px] mobile:pt-[20px] laptop:pt-[50px] mobile:pb-[20px] laptop:pb-[50px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-[300px] font-[manrope]"
        >
          <form>
            <div className="font-[600] mb-[30px]">
              <label
                htmlFor="name"
                className="block text-[16px] text-[#808285]"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Full Name"
                className="w-full h-[45px] bg-transparent border-b-[2px] border-b-gray-600 text-[16px] text-black outline-none"
              />
            </div>
            <div className="font-[600] mb-[30px] ">
              <label
                htmlFor="email"
                className="block text-[16px] text-[#808285] "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                className="w-full h-[45px] bg-transparent border-b-[2px] border-b-slate-800 text-[16px] text-black outline-none"
              />
            </div>
            <select className="w-full h-[48px] bg-[#EAEAEA] rounded-[10px] text-[16px]  font-[600] px-[20px] mb-[30px] outline-none">
              <option value="Aiwa">Aiwa</option>
              <option value="QR Verse">QR Verse</option>
            </select>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[28px] py-[15px] text-white text-[16px] font-[poppins] rounded-[7px] cursor-poi nter">
                Request Demo
              </button>
              <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#4361EE] rounded-[50%]">
                <img
                  src={arrowRight}
                  alt="/"
                  className="w-[25px] object-contain"
                />
              </div>
            </div>
          </form>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-[300px] h-[290px]"
        >
          <img src={girlAtWork} alt="/" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;

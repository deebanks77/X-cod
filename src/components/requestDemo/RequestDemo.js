import React from "react";
import girlAtWork from "../../images/girl-working.png";
import arrowRight from "../../images/arrowRight.png";

function RequestDemo() {
  return (
    <div>
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="mt-[166px] mb-[36px] font-bold font-[poppins] text-[41px] text-center"
      >
        REQUEST A DEMO
      </h2>
      <div className="flex items-center w-[1090px] mx-auto bg-white rounded-[20px] pl-[50px] pt-[50px] pb-[50px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" w-[515px] font-[manrope]"
        >
          <form>
            <div className="font-[600] mb-[50px]">
              <label
                htmlFor="name"
                className="block text-[19px] text-[#808285]"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Full Name"
                className="w-full h-[70px] bg-transparent border-b-[2px] border-b-gray-600 text-[22px] text-black outline-none"
              />
            </div>
            <div className="font-[600] mb-[50px]">
              <label
                htmlFor="email"
                className="block text-[19px] text-[#808285] "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                className="w-full h-[70px] bg-transparent border-b-[2px] border-b-slate-800 text-[22px] text-black outline-none"
              />
            </div>
            <select className="w-full h-[84px] bg-[#EAEAEA] rounded-[10px] text-[23px] font-[600] px-[20px] mb-[59px] outline-none">
              <option value="free">Aiwa</option>
              <option value="free">QR Verse</option>
            </select>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[28px] py-[15px] text-white text-[23px] font-[poppins] rounded-[7px] cursor-poi nter">
                Request Demo
              </button>
              <div className="flex items-center justify-center w-[57px] h-[57px] bg-[#4361EE] rounded-[50%]">
                <img
                  src={arrowRight}
                  alt="/"
                  className="w-[33pxpx] object-contain"
                />
              </div>
            </div>
          </form>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-[574px] h-[430px]"
        >
          <img src={girlAtWork} alt="/" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;

import React from "react";
import xcodLogo from "../../images/xcodLogo1.png";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInfinity,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-[172px] flex items-center justify-center border-t border-t-[#909090] w-full p-5 tablet:p-10">
      <div className="w-full max-w-[1293px] flex flex-wrap gap-5  mobile:justify-between desktop:flex-nowrap desktop:justify-center  items-start mx-auto">
        <div className="basis-[30%]">
          <div className="w-[91px] h-[34px] mb-[16px]">
            <img
              src={xcodLogo}
              alt="xcod logo"
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <p className="w-[240px] mb-[16px] text-[#959595] text-[inter] font-[400] font-[17px] leading-[31px] -tracking-[0.02em]">
            {" "}
            is a group of cloud based video creation, optimisation and marketing
            apps built to help you simplify your video marketing.
          </p>
          <div className="flex items-center gap-2">
            <FaLinkedinIn className="text-[#4361EE] cursor-pointer hover:opacity-80" />
            <FaFacebook className="text-[#4361EE] cursor-pointer hover:opacity-80" />
            <FaTwitter className="text-[#4361EE] cursor-pointer hover:opacity-80" />
            <FaInfinity className="text-[#4361EE] cursor-pointer hover:opacity-80" />
          </div>
        </div>

        <div className="flex gap-7 tablet:gap-16 basis-[30%]">
          <div className=" font-[inter] text-[#1D2132]">
            <h4 className=" font-[600] mobile:text-[16px] tablet:text-[23px] mobile:mb-[5px] tablet:mb-[26px] cursor-pointer hover:opacity-80 leading-[23px]">
              Company
            </h4>
            <p className="font-[400] mobile:text-[14px] tablet:text-[15px] mobile:mb-[5px] tablet:mb-[20px] cursor-pointer hover:opacity-80 leading-[26px]">
              About Us
            </p>
            <p className="font-[400] mobile:text-[14px] tablet:text-[15px] mobile:mb-[5px] tablet:mb-[20px] cursor-pointer hover:opacity-80 leading-[26px]">
              Careers
            </p>
            <p className="font-[400] mobile:text-[14px] tablet:text-[15px] mobile:mb-[5px] tablet:mb-[20px] cursor-pointer hover:opacity-80 leading-[26px]">
              Blog
            </p>
          </div>

          <div className="font-[inter] text-[#1D2132]">
            <h4 className="font-[600] mobile:text-[16px] tablet:text-[23px] mobile:mb-[5px] tablet:mb-[26px] cursor-pointer hover:opacity-80 leading-[23px]">
              Product
            </h4>
            <p className="font-[400] mobile:text-[14px] tablet:text-[15px]  mobile:mb-[5px] tablet:mb-[20px] cursor-pointer hover:opacity-80 leading-[26px]">
              QR Verse
            </p>
            <p className="font-[400] mobile:text-[14px] tablet:text-[15px] mobile:mb-[5px] tablet:mb-[20px] cursor-pointer hover:opacity-80 leading-[26px]">
              AIWA
            </p>
            <p className="font-[400] mobile:text-[14px] tablet:text-[15px] mobile:mb-[5px] tablet:mb-[20px] cursor-pointer hover:opacity-80 leading-[26px]">
              Introverse
            </p>
            <p className="font-[400] mobile:text-[14px] tablet:text-[15px] mobile:mb-[5px] tablet:mb-[20px] cursor-pointer hover:opacity-80 leading-[26px]">
              Stori
            </p>
          </div>
        </div>

        <div className="basis-[38%]">
          <h4 className="font-[inter] font-[600] mobile::text-[17px] tablet:text-[23px] mobile:mb-[16px] tablet:mb-[26px]">
            Join Our Newsletter
          </h4>

          <form className="mobile:w-[280px] mobile:h-[40px] tablet:w-[435px] tablet:h-[58px] mb-[38px]">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="mobile:w-[190px] tablet:w-[268px] h-full px-3 outline-none"
            />
            <button className=" tablet:w-[167px] p-1 h-full bg-[#4361EE] text-white mobile:text-[16px] tablet:text-[18px] font-[poppins] border-none ">
              Subscribe
            </button>
          </form>

          <p className="max-w-[366px] text-[#959595] text-[inter] font-[400] font-[17px] leading-[31px] -tracking-[0.02em]">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

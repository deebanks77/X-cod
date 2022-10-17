import React from "react";
import xcodLogo from "../../images/xcodLogo1.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

function Footer() {
  return (
    <div className="mt-[172px] flex items-center border-t border-t-[#909090] h-[400px] w-full">
      <div className="w-[1293px] h-[246px] flex items-start mx-auto">
        <div className="basis-[30%]">
          <div className="w-[91px] h-[34px] mb-[16px]">
            <img
              src={xcodLogo}
              alt="xcod logo"
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <p className="w-[240px] mb-[16px]">
            {" "}
            is a group of cloud based video creation, optimisation and marketing
            apps built to help you simplify your video marketing.
          </p>
          <div>
            <LinkedInIcon className="text-[#4361EE]" />
            <FacebookIcon className="text-[#4361EE]" />
            <TwitterIcon className="text-[#4361EE]" />
            <AllInclusiveIcon className="text-[#4361EE]" />
          </div>
        </div>
        <div className="basis-[15%] font-[inter]">
          <h4 className="font-[inter] font-[600] text-[23px] mb-[26px]">
            Company
          </h4>
          <p className="font-[400] text-[17px] text-[#1D2132] mb-[20px]">
            About Us
          </p>
          <p className="font-[400] text-[17px] text-[#1D2132] mb-[20px]">
            Careers
          </p>
          <p className="font-[400] text-[17px] text-[#1D2132] mb-[20px]">
            Blog
          </p>
        </div>
        <div className="basis-[15%] font-[inter]">
          <h4 className="font-[600] text-[23px] mb-[26px]">Product</h4>
          <p className="font-[400] text-[17px] text-[#1D2132] mb-[20px] font-[inter]">
            QR Verse
          </p>
          <p className="font-[400] text-[17px] text-[#1D2132] mb-[20px]">
            AIWA
          </p>
          <p className="font-[400] text-[17px] text-[#1D2132] mb-[20px]">
            Introverse
          </p>
          <p className="font-[400] text-[17px] text-[#1D2132] mb-[20px]">
            Stori
          </p>
        </div>
        <div className="basis-[40%]">
          <h4 className="font-[inter] font-[600] text-[23px] mb-[26px]">
            Join Our Newsletter
          </h4>

          <form className="w-[435px] h-[58px] mb-[38px]">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-[268px] h-full px-3"
            />
            <button className="w-[167px] h-full bg-[#4361EE] text-white text-[18px] font-[poppins] border-none ">
              Subscribe
            </button>
          </form>

          <p className="w-[366px]">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

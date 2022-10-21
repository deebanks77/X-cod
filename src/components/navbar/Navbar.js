import React, { useState } from "react";
import "./Navbar.css";
import images from "../../asset/assets";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleHamburger = () => {
    setClick(!click);
  };

  const handleClose = () => {
    setClick(false);
  };

  return (
    <div className="flex items-center justify-between pt-[31px] px-3  font-[poppins] max-w-[1200px] mx-auto ">
      <div className="flex items-center">
        <div className="w-[55px] h-[49px] ">
          <img
            src={images.xcodLogo}
            alt="xcod logo"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <p className="text-black font-[700] font-[poppins] text-[28px]">COD</p>
      </div>

      <div className="nav mobile:hidden tablet:block">
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-10 ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Support</li>
          </ul>
          <p className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[22px] py-[10px] text-white rounded-[7px] cursor-pointer inline-block">
            What's New!
          </p>
        </div>
      </div>

      <MenuIcon onClick={handleHamburger} className="hamburger" />
      <div
        className={`nav mobile:fixed tablet:hidden ${
          click ? "translate-x-[0]" : "translate-x-[100%]"
        } top-0 right-0 h-[80%] w-[50%] bg-gray-800 z-20 flex flex-col items-center justify-center gap-10 transition-all duration-500`}
      >
        <CloseIcon
          onClick={handleClose}
          className="absolute text-white top-[5px] right-[5px]"
        />
        <ul className="flex flex-col text-white items-center gap-10 ">
          <li className="cursor-pointer hover:text-gray-300 ">Home</li>
          <li className="cursor-pointer hover:text-gray-300">Products</li>
          <li className="cursor-pointer hover:text-gray-300">Support</li>
        </ul>
        <p className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[22px] w-fit p-3 text-white rounded-[7px] cursor-pointer mx-auto hover:opacity-90">
          What's New!
        </p>
      </div>
    </div>
  );
}

export default Navbar;

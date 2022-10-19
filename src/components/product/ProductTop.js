import React, { useEffect } from "react";
import UserIcon from "../../images/UserEngagement.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Top(props) {
  const { type, num, icon } = props;

  // useEffect(() => {
  //   AOS.init({ duration: 500 });
  //   AOS.refresh();
  // });

  return (
    <div className="user flex items-center justify-center gap-5 mobile:w-[200px] desktop:w-[296px] mobile:h-[80px] desktop:h-[121px]">
      <div
        data-aos="flip-right"
        className="icon flex items-center mobile:justify-center bg-[#4361EE] mobile:w-[60px] mobile:h-[60px]  laptop:w-[95px] laptop:h-[80px] desktop:w-[101px] desktop:h-[101px] rounded-[50%]"
      >
        <img
          src={icon}
          alt="user"
          className="mobile:w-[40px] mobile:h-[40px] laptop:w-[55px] laptop:h-[55px] desktop:w-[60px] desktop:h-[60px] object-contain"
        />
      </div>
      <div data-aos="zoom-in" className="flex flex-col  text-white">
        <h4 className="font-bold mobile:text-[20px] text-center laptop:text-[30px] desktop:text-[35px]">
          {num}
        </h4>
        <p className="mobile:text-[16px] laptop:text-[18px] desktop:text-[20px] font-[Exo] text-center">
          {type}
        </p>
      </div>
    </div>
  );
}

export default Top;

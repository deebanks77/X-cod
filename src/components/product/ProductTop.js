import React, { useEffect } from "react";

function Top(props) {
  const { type, num, icon } = props;

  return (
    <div className="user flex mobile:flex-col bigTablet:flex-row items-center justify-center gap-5 tablet:min-w-[150px] desktop:w-[296px] mobile:min-h-[80px] desktop:h-[121px] py-5">
      <div
        data-aos="flip-right"
        className="icon flex items-center mobile:justify-center bg-[#4361EE] mobile:w-[60px] mobile:h-[60px]  laptop:w-[95px] laptop:h-[90px] desktop:w-[101px] desktop:h-[101px] rounded-[50%]"
      >
        <img
          src={icon}
          alt="user"
          className="w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px] laptop:w-[55px] laptop:h-[55px] desktop:w-[60px] desktop:h-[60px] object-contain"
        />
      </div>
      <div data-aos="zoom-in" className="flex flex-col  text-white">
        <h4 className="font-bold text-[16px] tablet:text-[20px] text-center laptop:text-[30px] desktop:text-[35px]">
          {num}
        </h4>
        <p className="text-[14px] tablet:text-[16px] laptop:text-[18px] desktop:text-[20px] font-[Exo] text-center">
          {type}
        </p>
      </div>
    </div>
  );
}

export default Top;

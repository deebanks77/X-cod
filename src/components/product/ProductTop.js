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
    <div>
      <div className="user flex items-center gap-5 w-[296px] h-[121px]">
        <div
          data-aos="flip-right"
          className="icon flex items-center justify-center bg-[#4361EE] w-[121px] h-[121px] rounded-[50%]"
        >
          <img
            src={icon}
            alt="user"
            className="w-[70px] h-[70px] object-cover"
          />
        </div>
        <div data-aos="zoom-in" className="flex flex-col  text-white">
          <h4 className="font-bold text-[40px]">{num}</h4>
          <p className="text-[21px] font-[Exo] text-center">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Top;

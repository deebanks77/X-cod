import React from "react";
import "./Feedback.css";

import Info from "./Info";

function Feedback() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="feedback font-poppins w-full mobile:h-[] max-h-[847px] bg-[#4CC9F0] bg-gradient-to-r border-2 border-transparent">
      <div>
        <h4 className=" font-bold mobile:text-[22px] tablet:text-[28px] laptop:text-[38px] desktop:text-[42px] mobile:mt-[40px] mt-[121px] mobile:mb-[4px] desktop:mb-[14px] text-center">
          Trusted by People Like You
        </h4>
        <p className="text-center">Here's what they are saying:</p>
      </div>

      <div className="relative flex items-start max-w-[1000px] mobile:mt-[20px] laptop:mt-[30px] gap-16 mx-auto mb-7 p-4">
        {/* <div className="absolute w-[280px] h-[300px] bottom-[0px] left-[0px] bg-white opacity-[0.5] blur-sm z-10"></div> */}
        <div className="flexCont basis-1/3 relative overflow-y-scroll overflow-x-hidden mobile:h-[300px] laptop:h-[400px] desktop:h-[450px]">
          {data.map((data, index) => (
            <Info key={index} index={index} />
          ))}
        </div>
        <div className="basis-2/3">
          <p
            data-aos="fade-left"
            className="font-[poppins] mobile:text-[14px] laptop:text-[19px] desktop:text-[22px] mx-auto"
          >
            “ The QR code generator that we were using was costing us a fortune,
            and it just felt like we weren't getting anything for our money.
            That is when my boss told me about QR Verse, and I have never looked
            back. Now we can generate codes for less than half the price, but
            with the same quality of what we were paying before. It's an
            absolute steal ”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

import React from "react";
import "./Feedback.css";

import Info from "./Info";

function Feedback() {
  const data = [1, 2, 3, 4];
  return (
    <div className="feedback font-poppins w-full h-[847px] bg-[#4CC9F0] bg-gradient-to-r border-2 border-transparent">
      <div>
        <h4 className=" font-bold text-[48px] mt-[121px] mb-[14px] text-center">
          Trusted by People Like You
        </h4>
        <p className="text-center">Here's what they are saying:</p>
      </div>

      <div className="flex items-start w-[1230px] mt-[112px] gap-16 mx-auto">
        <div className="flexCont basis-1/3 border-r-[4px] border-r-[gray] relative">
          <div className="absolute w-[400px] h-[390px] top-[105px] left-0 bg-white opacity-[0.5] blur-sm"></div>
          {data.map((data, index) => (
            <Info key={index} index={index} />
          ))}
        </div>
        <div className="basis-2/3">
          <p
            data-aos="fade-left"
            className="font-[poppins] text-[24px] mx-auto"
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

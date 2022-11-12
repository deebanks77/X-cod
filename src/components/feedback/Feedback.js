import React, { useEffect, useState } from "react";
import "./Feedback.css";
import Info from "./Info";
import Info2 from "./Info2";
import images from "../../asset/assets";
import Arrows from "../slider/Arrows";

function Feedback() {
  const data = [
    {
      name: "Michael vivian",
      job: "Marketer",
      icon: images.icon,
      text: "The QR code generator that we were using was costing us a fortune,and it just felt like we weren't getting anything for our money. That is when my boss told me about QR Verse, and I have never lookedback. Now we can generate codes for less than half the price, butwith the same quality of what we were paying before. It's anabsolute steal",
    },
    {
      name: "Austin vivian",
      job: "Manager",
      icon: images.icon3,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus qui, ratione perferendis delectus dolores eligendi nisi modi a, velit corrupti ducimus expedita atque. Aperiam, nam! Esse odio animi explicabo ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus ",
    },
    {
      name: "Leon vivian",
      job: "CEO",
      icon: images.icon1,
      text: "The QR code generator that we were using was costing us a fortune,and it just felt like we weren't getting anything for our money. That is when my boss told me about QR Verse, and I have never lookedback. Now we can generate codes for less than half the price, butwith the same quality of what we were paying before. It's anabsolute steal",
    },
  ];

  const len = data.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="feedback font-poppins h-[500px] midTablet:h-[500px] laptop:h-[550px]  w-full max-h-[847px] bg-[#4CC9F0] bg-gradient-to-r border-2 border-transparent px-3 midTablet:px-5">
      <div>
        <h4 className=" font-bold mobile:text-[22px] tablet:text-[28px] laptop:text-[38px] mobile:mt-[40px] mt-[121px] mobile:mb-[4px] desktop:mb-[14px] text-center">
          Trusted by People Like You
        </h4>
        <p className="text-center text-gray-800">
          Here's what they are saying:
        </p>
      </div>

      <div className="relative bigTablet:flex items-start max-w-[1000px] mobile:mt-[20px] laptop:mt-[30px] gap-16 mx-auto mb-7 px-5 tablet:px-7 py-4">
        <div className="invisible absolute bigTablet:relative bigTablet:visible  flexCont basis-1/3 overflow-y-scroll overflow-x-hidden h-[300px]">
          {data.map((info, index) => (
            <Info
              key={index}
              index={index}
              data={info}
              activeIndex={activeIndex}
              onclick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {data.map((data, index) => {
          return (
            <>
              {index === activeIndex && (
                <div className="basis-2/3 animate-scale flex flex-col justify-center">
                  <div className="bigTablet:hidden">
                    <Info2 index={0} data={data} />
                  </div>

                  <p className="font-[poppins] text-[14px] tablet:text-[16px] text-gray-800 bigTablet:text-[17px] laptop:text-[19px] text-center bigTablet:text-left mx-auto leading-[30px] laptop:leading-[34px] ">
                    {data.text}
                  </p>
                </div>
              )}
            </>
          );
        })}

        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
          testimonial="testimonial"
        />
      </div>
    </div>
  );
}

export default Feedback;

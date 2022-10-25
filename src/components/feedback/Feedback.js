import React, { useEffect, useState } from "react";
import "./Feedback.css";
import Info from "./Info";
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
      name: "Austin ",
      job: "Manager",
      icon: images.icon3,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus qui, ratione perferendis delectus dolores eligendi nisi modi a, velit corrupti ducimus expedita atque. Aperiam, nam! Esse odio animi explicabo ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus ",
    },
    {
      name: "Leon ",
      job: "CEO",
      icon: images.icon1,
      text: "The QR code generator that we were using was costing us a fortune,and it just felt like we weren't getting anything for our money. That is when my boss told me about QR Verse, and I have never lookedback. Now we can generate codes for less than half the price, butwith the same quality of what we were paying before. It's anabsolute steal",
    },
    {
      name: "Steven ",
      job: "Senior Dev",
      icon: images.icon4,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus qui, ratione perferendis delectus dolores eligendi nisi modi a, velit corrupti ducimus expedita atque. Aperiam, nam! Esse odio animi explicabo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus qui, ratione perferendis",
    },
    {
      name: "Michael vivian",
      job: "Marketer",
      icon: images.icon,
      text: "The QR code generator that we were using was costing us a fortune,and it just felt like we weren't getting anything for our money. That is when my boss told me about QR Verse, and I have never lookedback. Now we can generate codes for less than half the price, butwith the same quality of what we were paying before. It's anabsolute steal",
    },
    {
      name: "Austin ",
      job: "Manager",
      icon: images.icon3,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus qui, ratione perferendis delectus dolores eligendi nisi modi a, velit corrupti ducimus expedita atque. Aperiam, nam! Esse odio animi explicabo ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus",
    },
    {
      name: "Leon ",
      job: "CEO",
      icon: images.icon1,
      text: "The QR code generator that we were using was costing us a fortune,and it just felt like we weren't getting anything for our money. That is when my boss told me about QR Verse, and I have never lookedback. Now we can generate codes for less than half the price, butwith the same quality of what we were paying before. It's anabsolute steal",
    },
    {
      name: "Steven ",
      job: "Senior Dev",
      icon: images.icon4,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus qui, ratione perferendis delectus dolores eligendi nisi modi a, velit corrupti ducimus expedita atque. Aperiam, nam! Esse odio animi explicabo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus qui, ratione perferendis",
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
    <div className="feedback font-poppins w-full max-h-[847px] bg-[#4CC9F0] bg-gradient-to-r border-2 border-transparent px-3 midTablet:px-5">
      <div>
        <h4 className=" font-bold mobile:text-[22px] tablet:text-[28px] laptop:text-[38px] desktop:text-[42px] mobile:mt-[40px] mt-[121px] mobile:mb-[4px] desktop:mb-[14px] text-center">
          Trusted by People Like You
        </h4>
        <p className="text-center">Here's what they are saying:</p>
      </div>

      <div className="relative midTablet:flex items-start max-w-[1000px] mobile:mt-[20px] laptop:mt-[30px] gap-16 mx-auto mb-7 p-4">
        <div className="mobile:invisible mobile:absolute midTablet:relative midTablet:visible  flexCont basis-1/3 relative overflow-y-scroll overflow-x-hidden mobile:h-[300px] laptop:h-[400px] desktop:h-[450px]">
          {data.map((info, index) => (
            <Info
              key={index}
              index={index}
              data={info}
              onclick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {data.map((data, index) => {
          return (
            <>
              {index === activeIndex && (
                <div className="basis-2/3">
                  <div className="midTablet:hidden">
                    <Info index={0} data={data} />
                  </div>

                  <p className="font-[poppins] mobile:text-[14px] tablet:text-[16px] laptop:text-[19px] desktop:text-[22px] mx-auto animate-scale">
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

import React from "react";
import "./Product.css";
import ELearningIcon from "../../images/E-Learning.png";
import PlaystoreIcon from "../../images/Playstore.png";
import UserIcon from "../../images/UserEngagement.png";
import BuggerIcon from "../../images/Bugger.png";
import VectorIcon from "../../images/Vector2.png";
import MarketIcon from "../../images/Marketing.png";
import Screen1 from "../../images/Screen1.png";
import Screen2 from "../../images/Screen2.png";
import arrowRight from "../../images/arrowRight.png";
import ProductTop from "./ProductTop";
import ProductCenter from "./ProductCenter";
import ProductBottom from "./ProductBottom";

function Product() {
  const productTop = [
    { icon: UserIcon, type: "USER", num: "35,000" },
    { icon: ELearningIcon, type: "CREATED", num: "242,110" },
    { icon: PlaystoreIcon, type: "PRODUCT", num: "14" },
  ];
  const productCenter = [
    {
      icon: BuggerIcon,
      title: "Easy to use",
      content:
        "ReelApps are built to be easy to use. No rocket science, no complicated processes and definitely no hours of training. Simply login, choose what you want to do & follow the easy process.",
      border: "#4361EE",
    },
    {
      icon: VectorIcon,
      title: "Library access ",
      content:
        "Never run out of graphics, videos and music assets to use while creating your videos. With ReelApps Libraries of stock free images, video clips and royalty free music, it has never been this easier.",
      border: "#4CC9F0",
    },
    {
      icon: MarketIcon,
      title: "Built for marketing",
      content:
        "ReelApps was built by digital marketers, for digital marketers and at our core, we understand your need to save time and yet create something that’s stunning and brings in results",
      border: "#4895EF",
    },
  ];

  const productBottom = [
    { image: Screen1, header: "AIWA" },
    { image: Screen2, header: "QR VERSE" },
    { image: Screen1, header: "AIWA" },
    { image: Screen2, header: "QR VERSE" },
    { image: Screen1, header: "AIWA" },
    { image: Screen2, header: "QR VERSE" },
  ];

  return (
    <div>
      <div className="top__section bg-gradient-to-r from-[#5390D9] to-[#4361EE] mobile:rounded-none desktop:rounded-t-[73px] mobile:p-[10px] laptop:p-[40px] desktop:p-[50px] mobile:mt-[20px] laptop:mt-[0]">
        <div className="flex mobile:flex-col bigTablet:flex-row items-center mobile:justify-center bigTablet:justify-between mobile:flex-wrap mobile:gap-2 gap-40 max-w-[1200px] mx-auto">
          {productTop.map((item, index) => (
            <ProductTop
              key={index}
              icon={item.icon}
              type={item.type}
              num={item.num}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-[26px] mobile:mt-[60px] mt-[113px] p-10 desktop:p-20">
        {productCenter.map((item, index) => (
          <ProductCenter
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            border={item.border}
            index={index}
          />
        ))}
      </div>

      <div className="mobile:mt-[100px] mt-[200px] w-full">
        <h3
          // data-aos="zoom-in-up"
          className="text-center mobile:w-[400px] laptop:w-[575px] font-bold mobile:text-[28px] tablet:text-[32px] laptop:text-[38px] text-[48px] border-b-[#4361EE] mobile:border-b-[3px] laptop:border-b-[4.5px] border-b-[6px] mx-auto"
        >
          Our <span className="text-[#4361EE]">Powerful</span> Sotfwares
        </h3>
        <div className="softwares mx-auto">
          {productBottom.map((item, index) => (
            <ProductBottom
              key={index}
              image={item.image}
              header={item.header}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
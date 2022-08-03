import React, { useState } from "react";
import Button from "../Button/Button";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const ListAndDesc = ({
  bgColor,
  mainTitle,
  mainDescription,
  imgAlign,
  items,
  buttonText,
}) => {
  const [index, setIndex] = useState(0);

  const handleClickDot = (i) => {
    setIndex(i);
  };

  const handleClickPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleClickNext = () => {
    if (index < items.length - 1) {
      setIndex(index + 1);
    }
  };
  return (
    <div className={`w-full max-w-6xl mx-auto py-20 ${bgColor}`}>
      <div>
        <h1 className="text-[1.56rem] text-[#2B2D42] font-bold ">
          {mainTitle}
        </h1>
        <p className="py-1 text-[0.87rem] text-[#2B2D42]">{mainDescription}</p>
      </div>
      <div
        className={`max-w-6xl flex flex-col items-center justify-center ${
          imgAlign === "right" ? "xl:flex-row-reverse" : "xl:flex-row"
        } mx-auto py-12`}
      >
        <div className="w-full flex items-center flex-col justify-center xl:flex-row">
          <div className="relative">
            {items[index + 2]?.image && (
              <div className="absolute top-1/2 left-3/4 transform -translate-x-3/4 -translate-y-1/2 w-[294px] h-[243px] md:w-[294px] md:h-[243px] rounded-[20px] shadow-imgShadow">
                <img
                  src={items[index + 2]?.image}
                  alt=""
                  className="object-cover object-center w-full h-full rounded-[20px]"
                />
              </div>
            )}
            {items[index + 1]?.image && (
              <div className="absolute top-1/2 left-2/3 transform -translate-x-2/3 -translate-y-1/2 w-[294px] h-[330px] md:w-[294px] md:h-[330px] rounded-[20px] shadow-imgShadow">
                <img
                  src={items[index + 1]?.image}
                  alt=""
                  className="object-cover object-center w-full h-full rounded-[20px]"
                />
              </div>
            )}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[294px] h-[400px] md:w-[294px] md:h-[400px] rounded-[20px] shadow-imgShadow">
              <img
                src={items[index].image}
                alt=""
                className="object-cover object-center w-full h-full rounded-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start max-w-sm md:max-w-md lg:w-full">
          <div className="max-w-sm md:max-w-md lg:w-full flex flex-col justify-center px-4 pt-7 xl:pt-0  xl:px-0">
            <h1 className="text-[#2B2D42] text-[1.56rem] py-4 font-bold">
              {items[index].title}
            </h1>
            <p className="text-[#2B2D42] text-[0.87rem] py-4">
              {items[index].description}
            </p>
          </div>
          <Button text={buttonText} />
          <div className="flex items-center justify-center pt-5">
            <span onClick={handleClickPrev} className="cursor-pointer mx-1">
              <BsArrowLeft className="text-slate-500" />
            </span>
            {items.map((item, i) => (
              <span
                onClick={() => handleClickDot(i)}
                className={`mx-1 rounded-full ${
                  index === i ? "bg-[#FF9F1C] px-2 py-1" : "bg-slate-500 p-1"
                } cursor-pointer`}
              ></span>
            ))}
            <span onClick={handleClickNext} className="cursor-pointer mx-1">
              <BsArrowRight className="text-slate-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAndDesc;

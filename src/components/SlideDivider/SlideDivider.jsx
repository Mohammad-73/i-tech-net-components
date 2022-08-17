import React, { useState } from "react";

import { RightArrow, LeftArrow, RateStar } from "../../assets/icons/icons";

const SlideDivider = ({ image, dark, items }) => {
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
    <div className="w-full my-3">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full h-[488px] object-cover object-center"
        />
        {dark && (
          <div className="w-full h-full absolute top-0 opacity-70 bg-[#2B2D42]"></div>
        )}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-2xl mx-auto w-[70%]`}
        >
          <div className="flex items-center justify-center px-2">
            <RateStar className="text-yellow-400" />
            <RateStar className="text-yellow-400" />
            <RateStar className="text-yellow-400" />
            <RateStar className="text-yellow-400" />
            <RateStar className="text-yellow-400" />
          </div>
          <h1 className="text-[1.56rem] text-white font-bold drop-shadow-lg">
            {items[index]?.title}
          </h1>
          <p className="py-1 text-[0.87rem] text-white drop-shadow-lg">
            {items[index]?.description}
          </p>
          <h1 className="text-[1.56rem] text-white font-bold drop-shadow-lg">
            {items[index]?.name}
          </h1>
          <p className="py-1 text-[0.87rem] text-white drop-shadow-lg">
            {items[index]?.date}
          </p>
          <div className="flex items-center justify-center ">
            <span onClick={handleClickPrev} className="cursor-pointer mx-1">
              <LeftArrow className="text-white" />
            </span>
            {items.map((item, i) => (
              <span
                onClick={() => handleClickDot(i)}
                className={`mx-1 rounded-full ${
                  index === i ? "bg-[#FF9F1C] px-2 py-1" : "bg-white p-1"
                } cursor-pointer`}
              ></span>
            ))}
            <span onClick={handleClickNext} className="cursor-pointer mx-1">
              <RightArrow className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDivider;

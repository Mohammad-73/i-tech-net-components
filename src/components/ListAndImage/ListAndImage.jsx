import React from "react";
import { Done } from "../../assets/icons/icons";

import { RightArrow } from "../../assets/icons/icons";

const ListAndImage = ({
  bgColor,
  mainTitle,
  mainDescription,
  imgAlign,
  image,
  title,
  description,
  items,
  readMore,
}) => {
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
            <div className="bg-[#FF9F1C] w-[434px] h-[200px] md:w-[534px] md:h-[300px] rounded-[20px]"></div>
            <img
              src={image}
              alt=""
              className="object-cover object-center absolute w-[396px] h-[284px] md:w-[496px] md:h-[384px] rounded-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="max-w-sm md:max-w-md lg:w-full flex flex-col justify-center px-4 pt-7 xl:pt-0  xl:px-0">
          <h1 className="text-[#2B2D42] text-[1.56rem] py-4 font-bold">
            {title}
          </h1>
          <p className="text-[#2B2D42] text-[0.87rem] py-4">{description}</p>
          {items?.map((item, index) => (
            <span key={index} className="flex py-1">
              <span className="pr-3">
                <Done className="text-[#1DA3BA]" />
              </span>
              <p className="text-[0.87rem] text-[#2B2D42]">{item}</p>
            </span>
          ))}

          {readMore && (
            <div className="flex items-center">
              <p>{readMore}</p>
              <RightArrow />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListAndImage;

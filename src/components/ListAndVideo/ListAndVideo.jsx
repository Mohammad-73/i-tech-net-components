import React from "react";
import { Done } from "../../assets/icons/icons";

import { RightArrow } from "../../assets/icons/icons";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const ListAndVideo = ({
  bgColor,
  mainTitle,
  mainDescription,
  imgAlign,
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
          <VideoPlayer />
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

export default ListAndVideo;

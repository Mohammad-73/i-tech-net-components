import React from "react";
import { CalendarGray, RateStar } from "../../assets/icons/icons";

const RateCard = ({ name, description, image, footNote, calendar }) => {
  return (
    <div className=" w-full lg:max-w-full lg:flex">
      <div className="border border-gray-400 lg:border-gray-400 bg-white rounded-2xl p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <div className="flex justify-between py-1">
            <div className="flex ">
              <h1 className="text-[#2B2D42] flex items-center font-bold">
                {name}
              </h1>
              <div className="flex items-center px-2">
                <RateStar className="text-yellow-400" />
                <RateStar className="text-yellow-400" />
                <RateStar className="text-yellow-400" />
                <RateStar className="text-yellow-400" />
                <RateStar className="text-yellow-400" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-[#959499] pr-2">
                <CalendarGray size={24} />
              </span>
              <p className="text-[#959499]">{calendar}</p>
            </div>
          </div>
          <p className="text-[#2B2D42] text-base ">{description}</p>
        </div>
        <div>
          <div className="border-b-2 border-[#2B2D42]-100 "></div>
          <div className="flex items-center py-3">
            <img
              className="w-16 h-12 rounded-xl mr-4"
              src={image}
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="text-[#2B2D42] font-semibold leading-none">
                {footNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCard;

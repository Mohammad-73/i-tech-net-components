import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { ReactComponent as Owl } from "../../assets/images/owl.svg";

const LocationCard = ({
  key,
  cardImage,
  title,
  location,
  calender,
  rateDesc,
  price,
  priceTitle,
  info,
  ab,
}) => {
  return (
    <div
      key={key}
      className="bg-white rounded-[1.25rem] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="rounded-t-[1.25rem]">
        <img className="rounded-t-[1.25rem] w-full" src={cardImage} alt="" />
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-[1rem] font-bold tracking-tight text-[#2B2D42] dark:text-white">
          {title}
        </h5>
        <div className="flex items-center mb-3 font-normal">
          <span className="text-[#12A3BA] pr-2">
            <HiOutlineLocationMarker size={24} />
          </span>
          <p className="text-[#2B2D42] text-[0.8rem]">{location}</p>
        </div>
        <div className="flex items-center mb-3 font-normal  ">
          <span className="text-[#12A3BA] pr-2">
            <MdOutlineCalendarToday size={24} />
          </span>
          <p className="text-[#2B2D42] text-[0.8rem]">{calender}</p>
        </div>
        <div className="border-b-2	border-[#2B2D42]-100 "></div>
        <div className="flex items-center pt-3">
          <span className="text-[24px]">
            <Owl />
          </span>
          <ul className="flex pl-1">
            <li className="p-1 m-[1px] bg-[#33DFA2] rounded-full"></li>
            <li className="p-1 m-[1px] bg-[#33DFA2] rounded-full"></li>
            <li className="p-1 m-[1px] bg-[#33DFA2] rounded-full"></li>
            <li className="p-1 m-[1px] bg-[#33DFA2] rounded-full"></li>
            <li className="p-1 m-[1px] bg-[#33DFA2] rounded-full"></li>
          </ul>
          <p className="text-[#959499] text-[0.6rem]">{rateDesc}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="text-[#959499] text-[0.6rem]">
            <p>
              {ab}
              <span className="text-[#2B2D42] text-[0.8rem] font-bold px-1">
                {price}
              </span>
              {priceTitle}
            </p>
          </div>
          <div className="flex">
            <p className="text-[#2B2D42] text-[0.6rem] px-1">{info}</p>
            <BsExclamationCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

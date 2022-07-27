import React from "react";
import { MdDone } from "react-icons/md";
import Besonderheiten from "../../assets/images/Besonderheiten.jpg";

const ListAndImage = () => {
  return (
    <div className="w-full bg-custom-blue">
      <div className="max-w-6xl flex flex-col items-center justify-center xl:flex-row mx-auto py-24">
        <div className="w-full flex items-center flex-col justify-center xl:flex-row">
          <div className="relative">
            <div className="bg-[#FF9F1C] w-[534px] h-[300px] rounded-[20px]"></div>
            <img
              src={Besonderheiten}
              alt=""
              className="absolute w-[496px] h-[384px] rounded-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center pt-7 xl:pt-0 ">
          <h1 className="text-[#2B2D42] text-[1.56rem] py-4">
            Ein Surfcamp in Europa passt zu dir, wenn du...
          </h1>
          <span className="flex py-1">
            <span className="pr-3">
              <MdDone className="text-[#1DA3BA]" />
            </span>
            <p className="text-[0.87rem] text-[#2B2D42]">
              ...mit top ausgebildeten Lehrer:innen Surfen lernen willst
            </p>
          </span>
          <span className="flex py-1">
            <span className="pr-3">
              <MdDone className="text-[#1DA3BA]" />
            </span>
            <p className="text-[0.87rem] text-[#2B2D42]">
              ...eine entspannte Atmosphäre unter Gleichgesinnten genießen
              willst
            </p>
          </span>
          <span className="flex py-1">
            <span className="pr-3">
              <MdDone className="text-[#1DA3BA]" />
            </span>
            <p className="text-[0.87rem] text-[#2B2D42]">
              ...die Vielfalt unseres Kontintents erleben wills
            </p>
          </span>
          <span className="flex py-1">
            <span className="pr-3">
              <MdDone className="text-[#1DA3BA]" />
            </span>
            <p className="text-[0.87rem] text-[#2B2D42]">
              ...unkompliziert und sicher reisen willst
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListAndImage;

import React from "react";
import G1 from "../../assets/images/g1.jpg";

const HorizontalCard = () => {
  return (
    <div className="p-10 w-[800px] h-[200px]">
      <div className=" w-full lg:max-w-full lg:flex rounded-[1.25rem] shadow-hShadow">
        <div
          className="h-full lg:h-auto lg:w-48 rounded-l-[1.25rem] shadow-hShadow flex-none bg-hero-portugal bg-cover   text-center overflow-hidden"
          title="Mountain"
        ></div>
        <div className="bg-white rounded-r-[1.25rem]  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-[#2B2D42] text-[0.87rem] text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-[#2B2D42] text-[1rem] font-bold">Shaini</p>
              <p className="text-[#2B2D42] text-[0.87rem]">
                Yoga mit Liebe in Indien
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;

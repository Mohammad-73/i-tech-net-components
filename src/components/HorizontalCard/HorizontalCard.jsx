import React from "react";

const HorizontalCard = ({ image, description, name, details }) => {
  return (
    <div className="p-4 w-full h-auto">
      <div className=" w-full lg:max-w-full lg:flex rounded-[1.25rem] shadow-hShadow">
        <div
          className="h-full lg:h-auto lg:w-48 rounded-l-[1.25rem] shadow-hShadow flex-none text-center overflow-hidden"
          title="Mountain"
        >
          <img
            className="w-full h-full rounded-l-[20px] block object-cover object-center"
            src={image}
            alt=""
          />
        </div>
        <div className="bg-white rounded-r-[1.25rem]  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-[#2B2D42] text-[0.87rem] text-base">
              {description}
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-[#2B2D42] text-[1rem] font-bold">{name}</p>
              <p className="text-[#2B2D42] text-[0.87rem]">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;

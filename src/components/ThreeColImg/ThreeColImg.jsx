import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ThreeColImg = ({ title, description, items, cols }) => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl py-5">
        <div className="px-6 lg:px-0">
          <h1 className="pt-5 text-[#2B2D42] text-[1.56rem] font-bold">
            {title}
          </h1>
          <p className="pb-5 text-[#2B2D42] text-[1rem]">{description} </p>
        </div>
        <div className={`grid grid-cols-1 ${cols} gap-5 px-6 lg:px-0`}>
          {items?.map((item, index) => (
            <ImageCard
              shadowSize="80"
              imageSrc={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeColImg;

import React from "react";
import LocationCard from "../LocationCard/LocationCard";

const CardsSection = ({ title, description, items, cols }) => {
  return (
    <div className="w-full">
      <div className="pb-5">
        <h1 className="pt-5 px-6 text-[#2B2D42] text-[1.56rem] font-bold">
          {title}
        </h1>
        <p className="pb-5 px-6 text-[#2B2D42] text-[1rem]">{description}</p>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ${cols} gap-4 px-4`}
        >
          {items?.map((item, index) => (
            <LocationCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;

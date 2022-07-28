import React from "react";
import LocationCard from "../LocationCard/LocationCard";

const CardsSection = ({ title, description }) => {
  return (
    <div className="pb-5">
      <h1 className="pt-5 text-[#2B2D42] text-[1.56rem]">{title}</h1>
      <p className="pb-5 text-[#2B2D42] text-[1rem]">{description}</p>
      <div className="grid grid-cols-4 gap-4">
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
};

export default CardsSection;

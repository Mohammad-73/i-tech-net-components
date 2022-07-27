import React from "react";
import LocationCard from "../LocationCard/LocationCard";

const CardsSection = () => {
  return (
    <div className="pb-5">
      <h1 className="text-[#2B2D42] text-[1.5rem] font-bold pb-3">
        Top-Surfcamps in Portugal
      </h1>
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

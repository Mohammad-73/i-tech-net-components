import React from "react";
import RateCard from "../RateCard/RateCard";

const RateCardSection = ({ title, items, rateCols }) => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="px-6 lg:px-0">
          <h1 className="text-[#2B2D42] text-[1.56rem] py-3 font-bold">
            {title}
          </h1>
        </div>
        <div
          className={`px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${rateCols} md:px-4 lg:px-0 gap-5`}
        >
          {items.map((item, index) => (
            <RateCard
              name={item.rateName}
              description={item.rateDesc}
              image={item.rateImage}
              calendar={item.rateCalendar}
              footNote={item.rateFootNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RateCardSection;

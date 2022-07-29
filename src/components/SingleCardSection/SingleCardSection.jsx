import React from "react";
import CardsSection from "../CardsSection/CardsSection";

const SingleCardSection = ({ title, description, items, cols }) => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl py-5">
        <CardsSection
          title={title}
          description={description}
          items={items}
          cols={cols}
        />
      </div>
    </div>
  );
};

export default SingleCardSection;

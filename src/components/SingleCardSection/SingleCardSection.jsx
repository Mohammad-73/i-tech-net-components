import React from "react";
import CardsSection from "../CardsSection/CardsSection";

const SingleCardSection = () => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl py-5">
        <CardsSection
          title="Empfohlene Surfcamps in Europa"
          description="Entdecke Surfcamps, die von Reisenden mit mindestens 4,5 von 5 Sternen
        bewertet sind, und erlebe deinen Traumurlaub am Meer!"
        />
      </div>
    </div>
  );
};

export default SingleCardSection;

import React from "react";
import CardsSection from "../CardsSection/CardsSection";
import DetailsWithImage from "../DetailsWithImage/DetailsWithImage";
import Tabs from "../Tabs/Tabs";

const Description = () => {
  return (
    <div className="w-full bg-custom-blue py-4">
      <div className="mx-auto max-w-6xl ">
        <h1 className="text-2xl py-7 text-center">
          Die besten Reiseziele für einen Surfurlaub in Europa
        </h1>
        <Tabs
          items={[
            "Frankreich",
            "Portugal",
            "Spanien",
            "Fuerteventura",
            "Teneriffa",
            "Gran Canaria",
          ]}
        />
        <DetailsWithImage />
        <CardsSection />
      </div>
    </div>
  );
};

export default Description;

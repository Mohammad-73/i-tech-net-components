import React from "react";
import CardsSection from "../CardsSection/CardsSection";
import DetailsWithImage from "../DetailsWithImage/DetailsWithImage";
import Tabs from "../Tabs/Tabs";

const Description = ({
  title,
  tabItems,
  tabCols,
  detailsImage,
  detailsTitle,
  detailsDesc,
  detailsReadMore,
  cardTitle,
  cardItems,
  cardCols,
}) => {
  return (
    <div className="w-full bg-custom-blue py-4">
      <div className="mx-auto max-w-6xl ">
        <h1 className="text-2xl py-7 px-6 lg:px-0 text-center font-bold">
          {title}
        </h1>
        <Tabs items={tabItems} cols={tabCols} />
        <DetailsWithImage
          image={detailsImage}
          title={detailsTitle}
          description={detailsDesc}
          readMore={detailsReadMore}
        />
        <CardsSection title={cardTitle} items={cardItems} cols={cardCols} />
      </div>
    </div>
  );
};

export default Description;

import React, { useState } from "react";
import CardsSection from "../CardsSection/CardsSection";
import DetailsWithImage from "../DetailsWithImage/DetailsWithImage";
import Tabs from "../Tabs/Tabs";

const Description = ({ title, tabItems, tabCols, tabContents }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className="w-full bg-custom-blue py-4">
      <div className="mx-auto max-w-6xl ">
        <h1 className="text-2xl py-7 px-6 lg:px-0 text-center font-bold">
          {title}
        </h1>
        <Tabs
          items={tabItems}
          cols={tabCols}
          handleClick={handleClick}
          active={active}
        />
        <DetailsWithImage
          image={tabContents[active].detailsImage}
          title={tabContents[active].detailsTitle}
          description={tabContents[active].detailsDesc}
          readMore={tabContents[active].detailsReadMore}
        />
        <CardsSection
          title={tabContents[active].cardTitle}
          items={tabContents[active].cardItems}
          cols={tabContents[active].cardCols}
        />
      </div>
    </div>
  );
};

export default Description;

import React from "react";
import HorizontalHint from "../HorizontalHint/HorizontalHint";

const HorizontalHintSection = ({ bgColor, items }) => {
  return (
    <div className={`w-full ${bgColor} py-8`}>
      <div className="w-full max-w-6xl mx-auto flex py-6">
        {items.map((item, index) => (
          <HorizontalHint
            icon={item?.icon}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalHintSection;

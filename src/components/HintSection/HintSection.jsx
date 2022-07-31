import React from "react";
import Hint from "../Hint/Hint";

const HintSection = ({ items }) => {
  return (
    <div className="max-w-6xl justify-items-end mx-auto py-12  grid md:grid-cols-3">
      {items.map((item, index) => (
        <Hint
          icon={item.icon}
          title={item.title}
          description={item.description}
          readMore={item.readMore}
        />
      ))}
    </div>
  );
};

export default HintSection;

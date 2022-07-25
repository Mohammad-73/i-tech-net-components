import React from "react";
import Hint from "../Hint/Hint";

const HintSection = () => {
  return (
    <div className="max-w-6xl justify-items-end mx-auto py-12  grid md:grid-cols-3">
      <Hint />
      <Hint />
      <Hint />
    </div>
  );
};

export default HintSection;

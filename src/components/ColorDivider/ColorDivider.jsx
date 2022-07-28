import React from "react";
import Button from "../../components/Button/Button";

const ColorDivider = ({ title, description, buttonTitle, buttonIcon }) => {
  return (
    <div className="bg-[#12A3BA] h-[150px]">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        <div>
          <h1 className="text-[1.56rem] text-white font-bold drop-shadow-lg">
            {title}
          </h1>
          <p className="py-1 text-[0.87rem] text-white drop-shadow-lg">
            {description}
          </p>
        </div>
        <Button text={buttonTitle} icon={buttonIcon} />
      </div>
    </div>
  );
};

export default ColorDivider;

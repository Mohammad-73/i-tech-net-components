import React from "react";

const DividerImg = ({
  align,
  title,
  description,
  image,
  dark,
  buttonTitle,
  icon,
}) => {
  return (
    <div className="w-full my-3">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full h-[400px] object-cover object-center"
        />
        {dark && (
          <div className="w-full h-full absolute top-0 opacity-70 bg-[#2B2D42]"></div>
        )}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-${align} w-[70%]`}
        >
          <h1 className="text-[1.56rem] text-white font-bold drop-shadow-lg">
            {title}
          </h1>
          <p className="py-1 text-[0.87rem] text-white drop-shadow-lg">
            {description}
          </p>
          <button className=" bg-[#FF9F1C] hover:bg-[#fc9a11] text-white font-bold py-2 px-4 my-1 rounded-full drop-shadow-lg">
            <span className="flex">
              {buttonTitle} {icon}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DividerImg;

import React from "react";

const ImageCard = ({
  width,
  height,
  imageSrc,
  shadowSize,
  title,
  description,
}) => {
  return (
    <div
      className={`relative rounded-[20px] ${width ? width + "%" : "w-full"} 
      ${height ? height + "%" : "h-full"}`}
    >
      <img
        className="w-full h-full rounded-[20px] block object-cover object-center"
        src={imageSrc}
        alt=""
      />
      <div
        className={`rounded-b-[20px] w-full h-[${shadowSize}%] flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-[#212121]`}
      >
        <h1 className="text-[1.125rem] text-white p-3 font-bold">{title}</h1>
        {description && (
          <p className="text-[0.8rem] text-white pl-3 pr-3 pb-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;

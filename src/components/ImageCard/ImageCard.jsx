import React from "react";

const ImageCard = ({ imageSrc, shadowSize }) => {
  return (
    <div className={`relative rounded-[20px] w-full h-full`}>
      <img
        className="w-full h-full rounded-[20px] block object-cover object-center"
        src={imageSrc}
        alt=""
      />
      <div
        className={`rounded-b-[20px] w-full h-[${shadowSize}%] flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-[#212121]`}
      >
        <h1 className="text-[1.125rem] text-white p-3">
          Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents
        </h1>
        {/* <p className="text-[0.8rem] text-white pl-3 pr-3 pb-3">
          Sign up for our Tourlane newsletter and you'll get real insider tips
          on off-the-beaten-path destinations, cool itineraries, and unique
          accommodations!
        </p> */}
      </div>
    </div>
  );
};

export default ImageCard;

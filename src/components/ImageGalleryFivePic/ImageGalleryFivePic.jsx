import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGalleryFivePic = ({
  title,
  description,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
          <p className="text-[1rem] text-[#2B2D42]">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageCard imageSrc={image1} title="Surfcamps für Alleinreisende" />
          <ImageCard imageSrc={image2} title="Surfcamps für Alleinreisende" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <ImageCard imageSrc={image3} title="Surfcamps für Alleinreisende" />
          <ImageCard imageSrc={image4} title="Surfcamps für Alleinreisende" />
          <ImageCard imageSrc={image5} title="Surfcamps für Alleinreisende" />
        </div>
      </div>
      ;
    </div>
  );
};

export default ImageGalleryFivePic;

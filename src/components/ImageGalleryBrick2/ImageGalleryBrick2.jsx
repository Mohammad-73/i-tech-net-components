import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGalleryBrick2 = ({
  title,
  description,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
}) => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
          <p className="text-[1rem] text-[#2B2D42]">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <ImageCard
            imageSrc={image1.img}
            title={image1.title}
            description={image1.description}
          />
          <ImageCard
            imageSrc={image2.img}
            title={image2.title}
            description={image2.description}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImageCard
            imageSrc={image3.img}
            title={image3.title}
            description={image3.description}
          />
          <ImageCard
            imageSrc={image4.img}
            title={image4.title}
            description={image4.description}
          />
          <ImageCard
            imageSrc={image5.img}
            title={image5.title}
            description={image5.description}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <ImageCard
            imageSrc={image6.img}
            title={image6.title}
            description={image6.description}
          />
          <ImageCard
            imageSrc={image7.img}
            title={image7.title}
            description={image7.description}
          />
        </div>
      </div>
      ;
    </div>
  );
};

export default ImageGalleryBrick2;

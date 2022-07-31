import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGalleryWindow = ({ title, description, items }) => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
          <p className="text-[1rem] text-[#2B2D42]">{description}</p>
        </div>
        <section className="overflow-hidden text-gray-700">
          <div className="container py-2 mx-auto ">
            <div className="flex flex-col md:flex-wrap md:flex-row -m-1 md:-m-2">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full gap-4 px-6 md:px-2">
                {items.map((item, index) => (
                  <ImageCard
                    shadowSize={item?.shadowSize}
                    imageSrc={item?.img}
                    title={item?.title}
                    description={item?.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageGalleryWindow;

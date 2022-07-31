import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGalleryFourPic = ({ title, description, items }) => {
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
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/2 lg:flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <ImageCard
                    shadowSize={items[0].shadow}
                    imageSrc={items[0].img}
                    title={items[0].title}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/2 lg:flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <ImageCard
                    shadowSize={items[1].shadow}
                    imageSrc={items[1].img}
                    title={items[1].title}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <ImageCard
                    shadowSize={items[2].shadow}
                    imageSrc={items[2].img}
                    title={items[2].title}
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <ImageCard
                    shadowSize={items[3].shadow}
                    imageSrc={items[3].img}
                    title={items[3].title}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageGalleryFourPic;

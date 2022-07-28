import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Extra1 from "../../assets/images/extra1.jpg";
import Extra2 from "../../assets/images/extra2.jpg";
import Extra3 from "../../assets/images/extra3.jpg";
import Extra4 from "../../assets/images/extra4.jpg";
import Extra5 from "../../assets/images/extra5.jpg";
import Extra6 from "../../assets/images/extra6.jpg";

const ImageGallery3 = () => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42]">
            Das gewisse Extra für deinen Surfurlaub
          </h1>
          <p className="text-[1rem] text-[#2B2D42]">
            Liebst du die Abwechslung? Dann erlebst du mit diesen Kombinationen
            deinen Surfurlaub der besonderen Art:
          </p>
        </div>
        <section className="overflow-hidden text-gray-700">
          <div className="container py-2 mx-auto ">
            <div className="flex flex-col md:flex-wrap md:flex-row -m-1 md:-m-2">
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/2 lg:flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={Extra6}
                    title="Surf & Fitness Reisen"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={Extra2}
                    title="Surf & Skate Camp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={Extra3}
                    title="Surf & Mountainbike Urlaub"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/2 lg:flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={Extra1}
                    title="Surf & Yoga Camps"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={Extra5}
                    title="Surf & Fotografie Urlaub"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={Extra4}
                    title="Surf & Spanisch Reise"
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

export default ImageGallery3;

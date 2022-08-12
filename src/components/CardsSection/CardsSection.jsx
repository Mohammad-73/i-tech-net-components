import React from "react";
import { SwiperSlide } from "swiper/react";
import LocationCard from "../LocationCard/LocationCard";
import SwiperContainer from "../Swiper/Swiper";

const CardsSection = ({ title, description, items, cols }) => {
  return (
    <div className="w-full">
      <div className="pb-5">
        <h1 className="pt-5 px-6 text-[#2B2D42] text-[1.56rem] font-bold">
          {title}
        </h1>
        <p className="pb-5 px-6 text-[#2B2D42] text-[1rem]">{description}</p>
        <div className="px-6 lg:px-0">
          <SwiperContainer>
            {items.map((item, index) => (
              <SwiperSlide>
                <LocationCard
                  key={index}
                  cardImage={item.cardImage}
                  title={item.title}
                  location={item.location}
                  calender={item.calender}
                  rateDesc={item.ratDesc}
                  price={item.price}
                  priceTitle={item.priceTitle}
                  info={item.info}
                  ab={item.ab}
                />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;

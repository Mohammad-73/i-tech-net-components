import React from "react";
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
import Description from "../../components/Description/Description";
import Hero from "../../components/Hero/Hero";
import HintSection from "../../components/HintSection/HintSection";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ImageGallery2 from "../../components/ImageGallery2/ImageGallery2";
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import NavBar from "../../components/NavBar/NavBar";
import DividerImg from "../../components/DividerImg/DividerImg";
import ThreeColImg from "../../components/ThreeColImg/ThreeColImg";
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import RateCardSection from "../../components/RateCardSection/RateCardSection";
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";

import Besonderheiten from "../../assets/images/Besonderheiten.jpg";
import DividerImage from "../../assets/images/dividerImage.jpg";
const SurfcampEurope = () => {
  return (
    <div>
      <NavBar />
      <Hero
        image="bg-hero-europe"
        title="Surface in Portugal"
        description="Erlebe die debesten Wellen Europas"
      />
      <HintSection />
      <Description />
      <ImageGallery />
      <ListAndImage
        image={Besonderheiten}
        title="Ein Surfcamp in Europa passt zu dir, wenn du..."
        items={[
          "...mit top ausgebildeten Lehrer:innen Surfen lernen willst",
          "...eine entspannte Atmosphäre unter Gleichgesinnten genießen willst",
          "...die Vielfalt unseres Kontintents erleben willst",
          "...unkompliziert und sicher reisen willst",
        ]}
      />
      <ImageGallery2 />
      <SingleCardSection />
      <DividerImg align="center" image={DividerImage} />
      <ThreeColImg />
      <ImageGallery3 />
      <DividerImg align="left" image={Besonderheiten} dark={true} />
      <RateCardSection />
      <ContactUsSection />
    </div>
  );
};

export default SurfcampEurope;

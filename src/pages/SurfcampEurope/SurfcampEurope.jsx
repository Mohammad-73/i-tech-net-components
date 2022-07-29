import React from "react";
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//Description
import Description from "../../components/Description/Description";
import Kanaren from "../../assets/images/Kanaren.jpg";

import Hero from "../../components/Hero/Hero";
import HintSection from "../../components/HintSection/HintSection";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ImageGallery2 from "../../components/ImageGallery2/ImageGallery2";
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import NavBar from "../../components/NavBar/NavBar";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import { BiRightArrowAlt } from "react-icons/bi";
//ThreeColImg
import ThreeColImg from "../../components/ThreeColImg/ThreeColImg";
import Col31 from "../../assets/images/col31.jpg";
import Col32 from "../../assets/images/col32.jpg";
import Col33 from "../../assets/images/col33.jpg";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import Extra1 from "../../assets/images/extra1.jpg";
import Extra2 from "../../assets/images/extra2.jpg";
import Extra3 from "../../assets/images/extra3.jpg";
import Extra4 from "../../assets/images/extra4.jpg";
import Extra5 from "../../assets/images/extra5.jpg";
import Extra6 from "../../assets/images/extra6.jpg";
//
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
      <Description
        titel="Die besten Reiseziele für einen Surfurlaub in Europa"
        tabItems={[
          "Frankreich",
          "Portugal",
          "Spanien",
          "Fuerteventura",
          "Teneriffa",
          "Gran Canaria",
        ]}
        detailsImage={Kanaren}
        detailsTitle="Wandern"
        detailsDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
        purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
        rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
        euismod nisi porta lorem mollis Morbi tristique senectus et netus
        Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien
        faucibus et molestie ac feugiat sed lectus vestibulum Ullamcorper
        velit sed ullamcorper morbi. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus
        vitae congue mauris rhoncus aenean vel elit Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua Egestas purus viverra accumsan in nisl
        nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit
        scelerisque In egestas erat imperdiet sed euismod nisi porta lorem
        mollis Morbi tristique senectus et netus Mattis pellentesque id nibh
        tortor id aliquet lectus proin Sapien faucibus et molestie ac feugiat
        sed lectus vestibulum Ullamcorper velit sed ullamcorper morbi. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Egestas purus
        viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus
        aenean vel elit nisi Arcu cursus vitae congue mauris rhoncus aenean
        vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta
        lorem mollis Morbi tristique senectus et netus Mattis pellentesque id
        nibh tortor id aliquet lectus proin Sapien faucibus et molestie ac
        feugiat sed lectus vestibulum Ullamcorper velit sed ullamcorper morbi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
        purus viverra accumsan in nisl"
        detailsReadMore="Zu den Details"
        cardTitle="Top-Surfcamps in Portugal"
        cardItems={[1, 2, 3, 4]}
      />
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
      <SingleCardSection
        title="Empfohlene Surfcamps in Europa"
        description="Entdecke Surfcamps, die von Reisenden mit mindestens 4,5 von 5 Sternen
      bewertet sind, und erlebe deinen Traumurlaub am Meer!"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <DividerImg align="center" image={DividerImage} />
      <ThreeColImg
        title="Finde passende Surfcamps für dein Surflevel"
        description="Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!"
        items={[
          {
            img: Col31,
            title: "Surfcamps für Anfänger:innen",
            description:
              "Surfe die ersten Wellen deines Lebens und erlebe dieses unbeschreibliche Gefühl",
          },
          {
            img: Col32,
            title: "Surfcamps für Fortgeschrittene",
            description:
              "Surfe grüne Wellen und lerne deine ersten Turns und Manöver",
          },
          {
            img: Col33,
            title: "Surfaris für erfahrene Surfer:innen",
            description:
              "Sei immer zur richtigen Zeit am richtigen Ort und finde deine perfekte Welle",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ImageGallery3
        title="Das gewisse Extra für deinen Surfurlaub"
        description="Liebst du die Abwechslung? Dann erlebst du mit diesen
       Kombinationen deinen Surfurlaub der besonderen Art:"
        items={[
          {
            img: Extra1,
            shadow: "80",
            title: "Surf- & Yoga-Camps",
          },
          {
            img: Extra2,
            shadow: "80",
            title: "Surf & Pilates Reisen",
          },
          {
            img: Extra3,
            shadow: "80",
            title: "Surf & Pole Dance Urlaub",
          },
          {
            img: Extra4,
            shadow: "80",
            title: "Flexible Stornierung",
          },
          {
            img: Extra5,
            shadow: "80",
            title: "Low Budget Surfcamps",
          },
          {
            img: Extra6,
            shadow: "80",
            title: "Surfcamps in der Natur",
          },
        ]}
      />
      <DividerImg
        align="left"
        title="Entdecke alle Surfcamps in Europa"
        description="Über 100 qualitätsgeprüfte Surfcamps für dein Abenteuer in den
      Wellen"
        image={Besonderheiten}
        dark={true}
        buttonTitle="Zur Übersicht"
        icon={<BiRightArrowAlt size={30} />}
      />
      <RateCardSection />
      <ContactUsSection />
    </div>
  );
};

export default SurfcampEurope;

import React from "react";
// Hero
import Hero from "../../components/Hero/Hero";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Frankreich-Alleinreisende.jpg";
import image2 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Familien-Frankreich.jpg";
import image3 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Frankreich_Gruppen-Freunde.jpg";
import image4 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Paare-Frankreich.jpg";
import image5 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Frankreich-Jugendliche.jpg";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
import { BiRightArrowAlt } from "react-icons/bi";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/surfcampFrance/listAndImage/Surfcamp-Campingurlaub-Frankreich.jpg";
import ListAndImage2 from "../../assets/surfcampFrance/listAndImage/Surfhaus_Surflodge_Frankreich.jpg";
import ListAndImage3 from "../../assets/surfcampFrance/listAndImage/Surfurlaub-Apartments.jpg";

const SurfcampsFrance = () => {
  return (
    <div>
      <Hero
        image="bg-hero-france"
        title="Surfcamps in Frankreich"
        description="Erlebe Sonne, Wellen und gute Laune"
      />
      <ImageGalleryFivePic
        title="Finde das Surfcamp, das zu dir passt!"
        description="Die Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die pDie Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die passende Atmosphäre! Mit der richtigen Stimmung um dich herum fühlst du dich sofort wohl, triffst ganz natürlich auf Gleichgesinnte und kannst deinen Urlaub in vollen Zügen genießen."
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
      />
      <ColorDivider
        title="Urlaub buchen ohne Risiko"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100% Rückerstattung!"
        buttonTitle="Mehr erfahren"
        buttonIcon={<BiRightArrowAlt size={30} />}
      />
      <ListAndImage
        image={ListAndImage1}
        title="Surfcamps auf Campingplätzen"
        description="Umgeben von Pinienwäldern und nur wenige Gehminuten vom Strand entfernt: Bei einem Surfurlaub auf einem Campingplatz tauchst du ein in eine eigene Welt, vergisst alles um dich herum und erlebst eine unvergessliche Zeit mit alten und neuen Freund:innen. Mit den verschiedenen Glamping-Optionen kann das Zelten sogar richtig gemütlich sein!"
        readMore="Zu allen Surfcamps auf Campingplätzen"
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage2}
        title="Surfhäuser & Lodges"
        description="Wünschst du dir für deinen Urlaub Komfort und ein gemütliches Bett? Am besten noch einen Pool und einen Garten zum Entspannen? Dann sind die charmanten Surfhäuser & Lodges in Frankreich die passende Wahl für dich! Hier genießt du eine ausgelassene Stimmung in einer kleinen Gruppe und hast gleichzeitig immer ausreichend Zeit für dich."
        readMore="Entdecke alle Surfhäuser & Lodges"
      />
      <ListAndImage
        image={ListAndImage3}
        title="Private Apartments"
        description="Private Apartments als Unterkunft für den Surfurlaub sind die passende Wahl für alle, die ihren Urlaub in Ruhe mit ihren Liebsten verbringen wollen. Hier seid ihr ganz unter euch und könnt euren Urlaub nach euren individuellen Wünschen und Vorstellungen gestalten."
        readMore="Zu allen Surfcamps mit privaten Apartments"
      />
    </div>
  );
};

export default SurfcampsFrance;

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
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
import { MdWaves } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import { FaTelegramPlane, FaHeart } from "react-icons/fa";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import img1 from "../../assets/surfcampFrance/g3/Surf-Yoga-Camps-Frankreich.jpg";
import img2 from "../../assets/surfcampFrance/g3/Surf-Pilates-Urlaub-Frankreich.jpg";
import img3 from "../../assets/surfcampFrance/g3/Surf-Pole-Dance-Reisen-Frankreich.jpg";
import img4 from "../../assets/surfcampFrance/g3/Surfcamps-Frankreich-Flexible-Stornierung.jpg";
import img5 from "../../assets/surfcampFrance/g3/Low-Budget-Surfcamps-Frankreich.jpg";
import img6 from "../../assets/surfcampFrance/g3/Surfcamps-Frankreich-Natur.jpg";
//Description
import Description from "../../components/Description/Description";
import Moliets from "../../assets/surfcampFrance/details/Surfcamps-Moliets-Frankreich.jpg";
//ThreeColImg
import ThreeColImg from "../../components/ThreeColImg/ThreeColImg";
import Col31 from "../../assets/surfcampFrance/threeCol/Surfcamps-Frankreich-Anfänger.jpg";
import Col32 from "../../assets/surfcampFrance/threeCol/Surfcamps-Frankreich-Intermediates.jpg";
import Col33 from "../../assets/surfcampFrance/threeCol/Surfari-Surf-Guiding-Frankreich.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/images/Besonderheiten.jpg";
//RateCardSection
import RateCardSection from "../../components/RateCardSection/RateCardSection";
import RateImg from "../../assets/images/g1.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

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
        image1={{ img: image1, title: "Surfcamps für Alleinreisende" }}
        image2={{ img: image2, title: "Surfurlaube für Familien" }}
        image3={{ img: image3, title: "Surfcamps für Freund:innen" }}
        image4={{ img: image4, title: "Surf-Reisen für Paare" }}
        image5={{ img: image5, title: "Surfcamps für unter 18-Jährige" }}
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
      <HorizontalHintSection
        bgColor="bg-custom-blue"
        items={[
          {
            icon: <MdWaves size={56} />,
            description:
              "... auf der Suche nach den konstantesten Wellen im Sommer bist!",
          },
          {
            icon: <IoFootsteps size={56} />,
            description:
              "... in nur wenigen Minuten barfuß zum Surfstrand laufen willst!",
          },
          {
            icon: <FaTelegramPlane size={56} />,
            description:
              "... dir eine unkomplizierte Anreise mit dem Auto, Bus oder Zug wünschst!",
          },
          {
            icon: <FaHeart size={56} />,
            description:
              "... von einer einzigartigen Atmosphäre inmitten von Pinienwäldern träumst!",
          },
        ]}
      />
      <SingleCardSection
        title="Surfen & Entspannen: Die beste Auswahl in Frankreich"
        description="Freust du dich über ein gemeinsamen Grillabend am Lagerfeuer, willst danach aber schnell ins Bett, um fit für die Wellen am nächsten Morgen zu sein? Dann entdecke unsere beliebtesten Surfcamps für die richtige Balance zwischen Action in den Wellen und Erholung in der Natur:"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <SingleCardSection
        title="Surfen & Feiern: Die beliebtesten Surfcamps mit Partylaune"
        description="Action in den Wellen und ausgelassene Feierstimmung am Abend! Entdecke die beliebtesten Surfcamps, um mit alten und neuen Freunden den Sommer deines Lebens in Frankreich zu erleben:"
        items={[1, 2, 3]}
        cols="lg:grid-cols-3"
      />
      <ColorDivider
        title="Welches Surfcamp passt zu dir?"
        description="Lass dich von unseren Experten beraten und finde deinen Traumurlaub!"
        buttonTitle="Kontakt aufnehmen"
      />
      <ImageGallery3
        title="Die beliebtesten Kategorien für einen Surfurlaub in Frankreich"
        items={[
          {
            img: img1,
            shadow: "80",
            title: "Surf- & Yoga-Camps",
          },
          {
            img: img2,
            shadow: "80",
            title: "Surf & Fotografie Urlaub",
          },
          {
            img: img3,
            shadow: "80",
            title: "Surf & Spanisch Reise",
          },
          {
            img: img4,
            shadow: "80",
            title: "Surf & Fitness Reisen",
          },
          {
            img: img5,
            shadow: "80",
            title: "Surf & Skate Camp",
          },
          {
            img: img6,
            shadow: "80",
            title: "Surf & Mountainbike Urlaub",
          },
        ]}
      />
      <Description
        titel="Die besten Reiseziele für einen Surfurlaub in Europa"
        tabItems={[
          "Moliets",
          "Seignosse",
          "Mimizan-Plage",
          "Vieux-Boucau",
          "Le Pin Sec",
          "Cap Ferret",
          "Biarritz",
        ]}
        tabCols="lg:grid-cols-7"
        detailsImage={Moliets}
        detailsTitle="Moliets-et-Maa"
        detailsDesc="Moliets-et-Maa ist zweifelsohne der beliebteste Urlaubsort unter deutschen Surfer:innen in Frankreich. Insbesondere die Jüngeren unter euch kommen hier voll auf ihre Kosten: Der große Campingplatz “Les Cigales” beheimatet eine ganze Reihe an Surfcamps und verwandelt sich über die Sommermonate in ein kleines Festivalgelände.
        Bis zum Strand und Surfspot sind es nur wenige Gehminuten über die Dünen und der kleine Ortskern wartet mit verschiedenen Restaurants und Bars auf dich. Viele haben ihren ersten Surfurlaub in Moliets verbracht und kamen nicht drumherum auch die nächsten Jahre diese einzigartige Atmosphäre zu genießen. "
        cardTitle="Top-Surfcamps in Moliets"
        cardItems={[1, 2, 3, 4]}
        cardCols="lg:grid-cols-4"
      />
      <ThreeColImg
        title="Welches Surflevel passt zu dir?"
        description="Ganz gleich ob du noch nie auf einem Surfbrett standest oder bereits grüne Wellen surfst, mit unserer handverlesenen Auswahl findest du das passende Surfcamp für dein Surflevel!"
        items={[
          {
            img: Col31,
            title: "Surfcamps für Anfänger:innen",
            description:
              "Surfe die ersten Wellen deines Lebens - ein Gefühl, das dich nie wieder loslässt!",
          },
          {
            img: Col32,
            title: "Surfcamps für Fortgeschrittene",
            description:
              "Erreiche dein nächstes Surflevel gemeinsam mit Surflehrern, die individuell auf dich eingehen!",
          },
          {
            img: Col33,
            title: "Surfaris für Profis",
            description:
              "Die Suche nach der perfekten Welle: Sei immer zur richtigen Zeit am richtigen Ort!",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        image={Besonderheiten}
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <RateCardSection
        title="Das sagen Reisende über ihren Surfurlaub in Frankreich"
        items={[
          {
            rateName: "Emmi",
            rateDesc:
              "Gerade im Deluxe Camp war es eine sehr tolle Erfahrung. Tolles Essen, tolle Atmosphäre, tolle Menschen und tolles Team im Camp. Ich bin immer noch ein bisschen da!",
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote:
              "Surfcamp in Moliets: Summer Vibes & gute Laune bewertet von",
          },
          {
            rateName: "J Erb",
            rateDesc:
              "Coole Leute, sympathisches Team, hammer Essen, Freiheit und Natur pur! Geniales Camp mit allem, was das freiheitsliebende Herz begehrt.",
            rateImage: RateImg,
            rateCalendar: "02.08.2021",
            rateFootNote:
              "Surfcamp in Westfrankreich: Surfen weit weg vom Trubel bewertet von",
          },
          {
            rateName: "Marlene",
            rateDesc:
              "Ein wunderschönes Camp mit einem tollem Team & hervorragendem Essen! Ein perfekter Ort, um neue Menschen verschiedenster Nationen kennen zu lernen & gleichzeitig den beliebten Surfspot zu nutzen oder surfen zu lernen. Langeweile kommt hier nicht auf und einsam ist man auch nie.",
            rateImage: RateImg,
            rateCalendar: "02.08.2021",
            rateFootNote:
              "Surfen & gute Laune in den Pinienwäldern Moliets bewertet von",
          },
          {
            rateName: "Mara",
            rateDesc:
              "Both Andia and David take really care with their hearts about each guest. The surf course was also really well and we had a lot of fun. Andia cooks great & delicious dinner so that everyone will get satisfied. Overall great stay that I could recommend.",
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote:
              "Surfurlaub im lässigen Surfhaus nahe Capbreton bewertet von",
          },
          {
            rateName: "Annik",
            rateDesc:
              "Das Camp ist mit schönen Zelten und Chillout- Bereichen ausgestattet und hat ein sehr freunliches und offenes Team. Die Aktivitäten und die Yoga-Stunden waren super!",
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote:
              "Surf- & Yogacamp in den Pinienwäldern Les Landes bewertet von",
          },
          {
            rateName: "Jana",
            rateDesc:
              "Ich hatte eine wunderschöne Woche in Moliets mit neu gewonnenen Freunden und super Surf Lessons. Jederzeit wieder!",
            rateImage: RateImg,
            rateCalendar: "30.07.2021",
            rateFootNote:
              "Surfcamp in Moliets: Party & Campfeeling pur bewertet von",
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title="Beliebte Kategorien für einen Surfurlaub in Europa"
        formInputs={[
          { type: "text", placeholder: "Your name*" },
          { type: "text", placeholder: "Email Address*" },
        ]}
        formTextarea="Deine Nachricht*"
        formButton="Nachricht abschicken"
        cardImageSrc={Contact}
        cardTitle="Wir sind rund um die Uhr für dich da!"
        cardDesc="Kontaktiere uns ganz einfach per Telefon, E-Mail oder WhatsApp:"
        cardItems={[
          {
            title: "Phone",
            address: "+49 (0)228 7638 2040",
            icon: <MdOutlineLocalPhone />,
          },
          {
            title: "Email",
            address: "team@moverii.de",
            icon: <HiOutlineMail />,
          },
          {
            title: "Whatsapp",
            address: "+49 (0)163 3122 260",
            icon: <BsWhatsapp />,
          },
        ]}
      />
      <TagSection
        title="Mehr Inspiration für deinen Surfurlaub"
        cols="xl:grid-cols-3"
        items={[
          {
            title: "Top-Reiseziele",
            items: [
              "Surfcamps in Portugal",
              "Surfcamps auf Fuerteventura",
              "Surfcamps in Spanien",
              "Surfcamps auf Teneriffa",
            ],
          },
          {
            title: "Beliebte Kategorien",
            items: [
              "Surfcamps in der Natur",
              "Surfcamps für Alleinreisende",
              "Surfurlaub für Familien",
              "Surf & Yoga Reisen",
            ],
          },

          {
            title: "Unser Reisemagazin",
            items: [
              "Reisebericht: Surf & Yoga Camp in Portugal",
              "Gemeinsam für den Meeresschutz",
              "Surfen auf den Kanaren",
              "Reisebericht: Mein erstes Surfcamp",
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampsFrance;

import React from "react";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//Description
import Description from "../../components/Description/Description";
import Alleinreisende from "../../assets/teneriffa/Zielgruppen-Tab-Element/Surfcamps-Alleinreisende-Teneriffa.jpg";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-Natur.jpg";
import image2 from "../../assets/teneriffa/Kategorien-5er_LI/Surf-Yoga-Camps-Teneriffa.jpg";
import image3 from "../../assets/teneriffa/Kategorien-5er_LI/Low-Budget-Surfcamps-Teneriffa.jpg";
import image4 from "../../assets/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-flexible-Stornierung.jpg";
import image5 from "../../assets/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-Camping.jpg";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/teneriffa/Besonderheiten-Divider/Surfcamps-Teneriffa-Besonderheiten.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//ThreeColImg
import ThreeColImg from "../../components/ThreeColImg/ThreeColImg";
import Col31 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/SUP-Tour_Surfcamps-Teneriffa.jpg";
import Col32 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Kajak-Tour-Delphine_Surfcamps-Teneriffa.jpg";
import Col33 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Schnorchel-ausflug-Schildkröten_Surfcamps-Teneriffa.jpg";
import Col34 from "../../assets/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Anfaenger.jpg";
import Col35 from "../../assets/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Fortgeschrittene.jpg";
import Col36 from "../../assets/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Profis.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import dividerImage from "../../assets/teneriffa/Kanaren-Divider/Surfcamps-Kanaren.jpg";
import Besonderheiten from "../../assets/teneriffa/Kunden-Divider/Surfcamps-Teneriffa-Bewertungen.jpg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
import wImg1 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Schnorchel-ausflug-Schildkroeten_Surfcamps-Teneriffa.jpg";
import wImg2 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Paragliding_Surfcamps-Teneriffa.jpg";
import wImg3 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/SUP-Tour_Surfcamps-Teneriffa.jpg";
import wImg4 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Vulkan-Teide_Surfcamps-Teneriffa.jpg";
import wImg5 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Freediving_Surfcamps-Teneriffa.jpg";
import wImg6 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Kajak-Tour-Delphine_Surfcamps-Teneriffa.jpg";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
import slideDividerImg from "../../assets/teneriffa/Kunden-Divider/Surfcamps-Teneriffa_Bewertungen.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampTeneriffa = () => {
  return (
    <div>
      <Hero
        image="bg-hero-teneriffa"
        title="Surfcamps auf Teneriffa"
        description="Erlebe Sonne, Wellen und Traumstrände"
      />
      <HintSection
        items={[
          {
            icon: <BiLike size={38} />,
            title: "100% Rückerstattung",
            description:
              "Transparent und stressfrei! Erhalte mit unseren flexiblen Stornierungsbedingungen den vollen Betrag zurückerstattet.",
            readMore: "Zu den Details",
          },
          {
            icon: <BiStar size={38} />,
            title: "Qualitätsgeprüfte Reisen",
            description:
              "Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit mindestens 4,5 von 5 Sternen bewertet!",
            readMore: "Zu den Details",
          },
          {
            icon: <BiHeart size={38} />,
            title: "Persönliche Beratung",
            description:
              "Wir lieben, was wir tun und sind immer an deiner Seite! Kontaktiere uns einfach per Email, Telefon oder WhatsApp.",
            readMore: "Zu den Details",
          },
        ]}
      />
      <Description
        titel="Finde den Surfurlaub, der zu dir passt!"
        tabItems={[
          "Für Alleinreisende",
          "Für Freund:innen",
          "Für Paare",
          "Für Familien",
        ]}
        tabCols="lg:grid-cols-4"
        detailsImage={Alleinreisende}
        detailsTitle="Surfcamps für Alleinreisende"
        detailsDesc="Langeweile ausgeschlossen und Spaß garantiert: Ein Surfcamp ist der perfekte Urlaub für Alleinreisende! Gleich mit deiner Ankunft fühlst du dich wohl und triffst dank der offenen und entspannten Atmosphäre ganz natürlich auf Gleichgesinnte. Gemeinsam erkundet ihr die besten Wellen Teneriffas, entspannt in der Sonne am Strand und tauscht Reisegeschichten von den verschiedensten Ecken der Welt aus. Gleichzeitig hast du immer die Möglichkeit dich zurückzuziehen und dein eigenes Ding zu machen. Mit einem Surfcamp auf Teneriffa lässt du deinen Alltag hinter dir und tauchst ein in eine eigene Welt."
        detailsReadMore="Zu den Details"
        cardTitle="Top-Surfcamps für Alleinreisende auf Teneriffa"
        cardItems={[1, 2, 3, 4]}
        cardCols="lg:grid-cols-4"
      />
      <ImageGalleryFivePic
        title="Finde das Surfcamp, das zu dir passt!"
        description="Die Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die pDie Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die passende Atmosphäre! Mit der richtigen Stimmung um dich herum fühlst du dich sofort wohl, triffst ganz natürlich auf Gleichgesinnte und kannst deinen Urlaub in vollen Zügen genießen."
        image1={{ img: image1, title: "Surfcamps in der Natur" }}
        image2={{ img: image2, title: "Surf & Yoga Camps" }}
        image3={{ img: image3, title: "Low Budget Surfcamps" }}
        image4={{ img: image4, title: "Flexible Stornierungsbedingungen" }}
        image5={{ img: image5, title: "Surfcamps im Zelt" }}
      />
      <ListAndImage
        image={ListAndImage1}
        title="Surfcamps auf Campingplätzen"
        items={[
          "...Sonne und angenehme Temperaturen das ganze Jahr über genießen willst",
          "...auf der Suche nach den perfekten Wellen für Anfänger und Fortgeschrittene bist",
          "...einsame Strände und unberührte Natur entdecken willst",
          "…die Wahl zwischen Entspannen in der Hängematte und Feiern unter Gleichgesinnten haben willst",
        ]}
      />
      <SingleCardSection
        title="Beliebte Surfcamps auf Teneriffa"
        description="Von Surfern ausgewählt und von Reisenden mit mindestens 4,5 von 5 Sternen bewertet: Entdecke die besten Surfcamps auf Teneriffa:"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <ThreeColImg
        title="Erlebe die Vielfalt der Kanarischen Inseln"
        description="Ganz gleich für welche der Kanarischen Inseln du dich entscheidest, perfekte Wellen und Sonne sind dir garantiert. Daneben hast du die große Wahl:"
        items={[
          {
            img: Col31,
            title: "Fuerteventura",
            description:
              "Weiße Sandstrände und perfekte Wellen: Erlebe das Hawaii Europas.",
          },
          {
            img: Col32,
            title: "Gran Canaria",
            description:
              "Von den Wellen direkt in eine Tapas-Bar: Dein Surfurlaub mit Großstadtfeeling.",
          },
          {
            img: Col33,
            title: "Lanzarote",
            description:
              "Atemberaubende Natur und leere Strände: Der Geheimtipp unter den kanarischen Inseln.",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        align="center"
        title="Entdecke alle Surfcamps auf den Kanaren"
        description="Teneriffa • Fuerteventura • Gran Canaria • Lanzarote"
        image={dividerImage}
        buttonTitle="Zur Übersicht"
      />
      <ThreeColImg
        title="Erlebe die Vielfalt der Kanarischen Inseln"
        description="Ganz gleich für welche der Kanarischen Inseln du dich entscheidest, perfekte Wellen und Sonne sind dir garantiert. Daneben hast du die große Wahl:"
        items={[
          {
            img: Col34,
            title: "Surfcamps für Anfänger:innen",
            description:
              "Surfe die ersten Wellen deines Lebens und erlebe ein unbeschreibliches Gefühl!",
          },
          {
            img: Col35,
            title: "Surfcamps für Fortgeschrittene",
            description:
              "Vertiefe die Grundlagen und surfe deine ersten langen grünen Wellen!",
          },
          {
            img: Col36,
            title: "Surfaris für Profis",
            description:
              "Die Suche nach der perfekten Welle - gemeinsam mit einheimischen Surfer:innen.",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        image={Besonderheiten}
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <ImageGalleryWindow
        title="Außergewöhnliche Erlebnisse für deinen Surfurlaub"
        description="Action in den Wellen und Erholung am Strand reicht dir nicht aus? Dann entdecke einzigartie Erlebnisse für die ganz besonderen Momente!"
        items={[
          {
            shadowSize: "80",
            img: wImg1,
            title: "Schnorcheln mit Schildkröten",
            description:
              "Schwimme gemeinsam mit Schildkröten in einer eigenen Welt und lerne von professionellen Meeresbiolog:innen wie du sie mit Respekt behandelst.",
          },
          {
            shadowSize: "80",
            img: wImg2,
            title: "Paragliding",
            description:
              "Teneriffa aus einer ganz anderen Perspektive: Gleite aus 1000 Meter Höhe über die Insel und verspüre den ultimativen Adrenalinkick!",
          },
          {
            shadowSize: "80",
            img: wImg3,
            title: "Stand-Up-Paddle Tour",
            description:
              "Entdecke mit dem Stand-Up-Paddle die seichten Gewässer Teneriffas und freu dich auf traumhafte Strände und einsame Buchten.",
          },
          {
            shadowSize: "80",
            img: wImg4,
            title: "Ausflug zum Vulkan Teide",
            description:
              "Wandere auf die Spitze des größten Vulkans in Europa, fühle dich wie auf dem Mars und erlebe einen einzigartigen Sonnenuntergang.",
          },
          {
            shadowSize: "80",
            img: wImg5,
            title: "Freediving",
            description:
              "Deine Chance auf einenEin ganzheitliches Retreat in familiärer Atmosphäre: Freu dich auf Yoga, Surfen, vegetarisch-vegane Verpflegung und eine Vulkanwanderung.",
          },
          {
            shadowSize: "80",
            img: wImg6,
            title: "Kajak-Tour mit Delphinen",
            description:
              "Entdecke bei einer Kajak-Tour auf Teneriffa Delphine in ihrem natürlichen Lebensraum und beobachte sie ohne sie zu stören.",
          },
        ]}
      />
      <SlideDivider
        image={slideDividerImg}
        dark={true}
        items={[
          {
            description:
              "Ein super schöner Urlaub. Umberto war ein super Lehrer und Gastgeber. Es lief sehr familär und locker ab. Neben den Surfstunden hatten waren wir auch Skaten, um die Technik zu verbessern. Hat sehr viel Spaß gemacht und war top",
            name: "Lena",
            date: "21.01.2022",
          },
        ]}
      />
      <ContactUsSection
        title="Hast du Fragen oder Wünsche?"
        descritpion="Wir lieben was wir tun und sind stets an deiner Seite! Schreib uns einfach eine Nachricht und wir melden uns in wenigen Stunden persönlich bei dir:"
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
        title="Mehr Inspiration für dein Surfurlaub"
        cols="xl:grid-cols-4"
        items={[
          {
            title: "Top-Reiseziele",
            items: [
              "Surfcamps in Frankreich",
              "Surfcamps in Portugal",
              "Surfcamps in Spanien",
              "Surfcamps auf Fuerteventura",
            ],
          },
          {
            title: "Ausgewählte Kategorien",
            items: [
              "Surfcamps in der Natur",
              "Surf & Yoga Camps",
              "Low Budget Surfcamps",
              "Surfcamps nur für Frauen",
            ],
          },
          {
            title: "Gewünschte Atmosphäre",
            items: [
              "Surfcamps für Alleinreisende",
              "Surfurlaub für Familien",
              "Surfcamps für Freund:innen",
              "Surf-Reisen für Paare",
            ],
          },
          {
            title: "Unser Reisemagazin",
            items: [
              "Gemeinsam für den Meeresschutz",
              "Reisebericht: Surf & Yoga Camp in Portugal",
              "Die 13 besten Surf-Filme für einen Kino Abend",
              "Reisebericht: Mein erstes Surfcamp",
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampTeneriffa;

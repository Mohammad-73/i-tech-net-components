import React from "react";
// Hero
import Hero from "../../components/Hero/Hero";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
import {
  FaBalanceScale,
  FaPrayingHands,
  FaSearchLocation,
  FaMapSigns,
} from "react-icons/fa";
//Description
import Description from "../../components/Description/Description";
import Moliets from "../../assets/YogaRetreatsGermany/Regionen/Yoga-Retreat-Deutschland-Ostsee.jpg";
//ImageGalleryFourPic
import ImageGalleryFourPic from "../../components/ImageGalleryFourPic/ImageGalleryFourPic";
import img1 from "../../assets/YogaRetreatsGermany/Retreat Arten/Yoga-Wochenenden.jpg";
import img2 from "../../assets/YogaRetreatsGermany/Retreat Arten/Stille-Retreats.jpg";
import img3 from "../../assets/YogaRetreatsGermany/Retreat Arten/Spirituelle-Retreats.jpg";
import img4 from "../../assets/YogaRetreatsGermany/Retreat Arten/Yoga-Meditation.jpg";
//HorizontalCardSection
import HorizontalCardSection from "../../components/horizontalCardSection/horizontalCardSection";
import hImg1 from "../../assets/YogaRetreatsGermany/Lehrerinnen/Yogalehrer-Friethjof-Bluhm.jpg";
import hImg2 from "../../assets/YogaRetreatsGermany/Lehrerinnen/yogalehrerin-sylvia-asmodena.jpg";
import hImg3 from "../../assets/YogaRetreatsGermany/Lehrerinnen/Yogalehrerin-Sara-Lyn.jpg";
import hImg4 from "../../assets/YogaRetreatsGermany/Lehrerinnen/Yoga-Lehrerin-Yogakasha.jpg";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery1 from "../../assets/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Center.jpg";
import imgGallery2 from "../../assets/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Fastenhof.jpg";
import imgGallery3 from "../../assets/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Biohotel.jpg";
import imgGallery4 from "../../assets/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Designholzhaus.jpg";
import imgGallery5 from "../../assets/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Reetdachhaus.jpg";
import imgGallery6 from "../../assets/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Kloster.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//ImageGalleryBrick2
import ImageGalleryBrick2 from "../../components/ImageGalleryBrick2/ImageGalleryBrick2";
import image6 from "../../assets/YogaRetreatsGermany/Kategorien/Yoga-Wellness.jpg";
import image7 from "../../assets/YogaRetreatsGermany/Kategorien/Yoga-Fasten.jpg";
import image8 from "../../assets/YogaRetreatsGermany/Kategorien/Yoga-Flexible-Stornierungsbedingungen.jpg";
import image9 from "../../assets/YogaRetreatsGermany/Kategorien/Yoga-Wandern.jpg";
import image10 from "../../assets/YogaRetreatsGermany/Kategorien/Yoga-Anfaenger.jpg";
import image11 from "../../assets/YogaRetreatsGermany/Kategorien/Yoga-Surf.jpg";
import image12 from "../../assets/YogaRetreatsGermany/Kategorien/Yoga-Fahrrad.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Suchst from "../../assets/YogaRetreatsGermany/Divider/sunset-3087288_1920 (1).jpg";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const YogaRetreatsGermany = () => {
  return (
    <div>
      <Hero
        image="bg-hero-yoga-in-deutschland"
        title="Yoga Retreats in Deutschland"
        description="Deine unkomplizierte Auszeit zum Wohlfühlen"
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <FaBalanceScale size={56} />,
            title: "Ganzheitliches Erlebnis",
            description:
              "Stärke deine innere Balance bei einer wohlverdienten Yoga-Auszeit und erfahre den Einklang von Körper, Geist und Seele durch ganzheitliche Retreat-Ansätze.",
          },
          {
            icon: <FaSearchLocation size={56} />,
            title: "Wunderschönes Deutschland",
            description:
              "Lerne Deutschland von seiner schönsten Seite kennen bei einem Yoga-Urlaub ganz ohne weite Anreise und mit viel Zeit für dich und die Natur.",
          },
          {
            icon: <FaPrayingHands size={56} />,
            title: "Liebe für Yoga",
            description:
              "Erlebe die passionierte Hingabe und das wertvolle Wissen deiner Retreatleiter:innen für einen ausgewogenen Lebensstil und Yoga - ganz ohne Sprachbarriere!",
          },
          {
            icon: <FaMapSigns size={56} />,
            title: "Neue Lebensenergie",
            description:
              "Lasse dich von neuen Erfahrungen und Impulsen inspirieren und nehme die einzigartige Möglichkeit wahr, völlig abzuschalten und dabei neue Kraft zu schöpfen.",
          },
        ]}
      />
      <Description
        titel="Ausgewählte Regionen für dein Yoga Retreat"
        tabItems={[
          "Ostsee",
          "Nordsee",
          "Bayern",
          "Baden-Württemberg",
          "Brandenburg",
          "Nordrhein-Westfalen",
        ]}
        tabCols="lg:grid-cols-6"
        detailsImage={Moliets}
        detailsTitle="Von Usedom bis Flensburg: Urlaubsfeeling pur"
        detailsDesc="Die Ostsee ist nicht umsonst eine der beliebtesten Ferienregionen Deutschlands. Weite Sandstrände und das milde Wetter laden dich dazu ein, deine Yogamatte unter freiem Himmel auszurollen. Die frische Meeresbrise lässt dich sofort gelassener werden und macht deine Yoga-Sessions zu einem ganz besonderen Erlebnis.
        Freund:innen von ausgedehnten Spaziergängen und eindrucksvoller Natur kommen auf Rügen am meisten auf ihre Kosten. Die beeindruckenden weißen Felsen der Kreideküste, ursprüngliche Buchenwälder sowie unzählige Freizeitangebote bieten dir jeden Tag neue Erlebnisse. Aber auch die “Sonneninsel” Usedom lockt mit traumhaften Bedingungen, wenn du auf der Suche nach geistiger Ruhe und Entspannung bist."
        cardTitle="Ausgewählte Yoga Retreats an der Ostsee"
        cardItems={[1, 2, 3, 4]}
        cardCols="lg:grid-cols-4"
      />
      <ImageGalleryFourPic
        title="Was für ein Yoga Retreat wünschst du dir?"
        items={[
          {
            img: img1,
            shadow: "80",
            title: "Yoga Wochenenden",
            description:
              "Gönne dir eine kurze Auszeit vom Alltag und erlebe ein ausgeglichenes Wochenende voller Yoga und Entspannung",
          },
          {
            img: img2,
            shadow: "80",
            title: "Stille Retreats",
            description: "Erkunde dein Inneres beim kollektiven Schweigen",
          },
          {
            img: img3,
            shadow: "80",
            title: "Spirituelle Yoga Retreats",
            description: "Erlebe die Kraft deiner eigenen Spiritualität",
          },
          {
            img: img4,
            shadow: "80",
            title: "Yoga & Meditations Retreats",
            description:
              "Beruhige deinen Geist bei regelmäßigen Achtsamkeitsübungen und Mediationen zwischen deinen Yoga-Einheiten",
          },
        ]}
      />
      <HorizontalCardSection
        title="Yogalehrer:innen im Fokus"
        description="Die Yogalehrer:innen gestalten das Programm ihrer Retreats mit viel Liebe sowie ihren persönlichen Erfahrungen und Vorstellungen, was jedes Retreat einzigartig werden lässt. Sie teilen ihren individuellen Ansatz und ihre Leidenschaft für Yoga mit dir vor, während und nach der gemeinsamen Yoga-Einheiten und sind zusammen mit dir die Seele eines jeden Retreats!"
        items={[
          {
            image: hImg1,
            description:
              "Unsere Yogaschule bietet ein breites Spektrum an Wissen und Erfahrung der klassischen und modernen Yogastile des integralen Yoga, sowie das traditionelle Wissen des Ayurveda.",
            name: "Frithjof Bluhm",
            details: "Yogalehrer, Fitnesstrainer & Meditationslehrer auf Rügen",
          },
          {
            image: hImg2,
            description:
              "Für mich ist Yoga eine wunderbare Möglichkeit mich zu erspüren, mich besser kennen zu lernen und mich ganz und gar wohl zu fühlen.",
            name: "Sylvia Asmodena Kurtar",
            details: "Yoga- & Lu Jong-Lehrerin aus Ochsenfurt",
          },
          {
            image: hImg3,
            description:
              "Die Free Spirits Family heißt jeden willkommen, der sich mit offenem Herzen & Mindset einer besseren Welt öffnen möchte. Mit deiner einzigartigen Art & Weise bist du eine Inspiration für uns! ",
            name: "Sara-Lyn Chana",
            details: "Yogalehrerin & Pilatestrainerin aus Hamburg",
          },
          {
            image: hImg4,
            description:
              "Ein Retreat bedeutet für mich, sich Zeit zu nehmen, den Alltagstrott einige Momente hinter sich zu lassen und sich nach innen zu kehren um somit wieder Energie für all unsere Aufgaben zu schöpfen",
            name: "Tammy Assanoff",
            details: "Yogalehrerin aus Köln",
          },
        ]}
      />
      <ColorDivider
        title="Yoga Retreats buchen ohne Risiko"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100 % Rückerstattung!"
        buttonTitle="Mehr erfahren"
      />
      <ImageGallery3
        title="Inspirierende Unterkünfte für dein Yoga Retreat"
        description="Die Umgebung ist ausschlaggebend für jedes Yoga Retreat. Diese Retreats laden dich mit einzigartigen Unterkünften zu einem ganz besonderen Retreaterlebnis ein. Spüre den Einfluss deiner Umwelt auf dich und dein Bewusstsein bei außergewöhnlichen Yogasessions!"
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: "Yoga Retreat im Chiemgauer Retreat Center",
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: "Yoga Reatreat im Fastenhof",
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: "Yoga Retreat im Bio-Strandhotel",
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: "Yoga Retreat im Designer-Holzhaus",
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: "Yoga Retreat im Reetdachhaus am Meer",
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: "Yoga Retreat im Kloster",
          },
        ]}
      />
      <SingleCardSection
        title="Ausgewählte Yoga Retreats in Seminarhäusern"
        description="Der Klassiker unter den Retreats: Seminarhäuser bieten Yogalehrer:innen die Möglichkeit, ihre Yogapraxis aus dem Studio in ein neues Umfeld zu verlagern und mit zusätzlichen Inhalten und Impulsen zu vereinen!"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <ColorDivider
        title="Welches Yoga Retreat passt zu dir?"
        description="Lass dich von unseren Expert:innen beraten und finde dein Traumretreat!"
        buttonTitle="Kontakt aufnehmen"
      />
      <ImageGalleryBrick2
        title="Nachhaltige Yoga Retreats"
        image1={{
          img: image6,
          title: "Yoga & Wellness Reisen",
        }}
        image2={{
          img: image7,
          title: "Yoga & Fasten Reisen",
        }}
        image3={{
          img: image8,
          title: "Flexible Stornierungsbedingungen",
        }}
        image4={{
          img: image9,
          title: "Yoga & Wander Urlaube",
        }}
        image5={{
          img: image10,
          title: "Yoga Retreats für Anfänger:innen",
        }}
        image6={{
          img: image11,
          title: "Yoga & Windsurfen",
        }}
        image7={{
          img: image12,
          title: "Yoga & Fahrrad Urlaub",
        }}
      />
      <SingleCardSection
        title="Empfohlene Yoga Retreats in Deutschland"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        image={Suchst}
        align="left"
        title="Entdecke alle Yoga Retreats in Deutschland"
        buttonTitle="Zur Übersicht"
      />
      <HintSection
        title="Unsere Versprechen für dein Yoga Retreat"
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
      <ContactUsSection
        title="Schreib uns jetzt eine Nachricht"
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
        title="Noch mehr Inspiration für dein Yoga Retreat"
        cols="xl:grid-cols-3"
        items={[
          {
            title: "Ausgewählte Reiseziele",
            items: [
              "Yoga Retreats in Portugal",
              "Yoga Retreats auf Mallorca",
              "Yoga Retreats in Italien",
              "Yoga Retreats in Österreich",
              "Yoga Retreats in Spanien",
              "Yoga Retreats in Griechenland",
            ],
          },
          {
            title: "Top-Kategorien",
            items: [
              "Yoga Wochenenden",
              "Spirituelle Yoga Retreats",
              "Yoga & Surf Reisen",
              "Yoga & Wander Urlaube",
              "Yoga & Wellness Reisen",
            ],
          },
          {
            title: "Unser Reisemagazin",
            items: [
              "Yoga Retreat in Deutschland",
              "Yoga für Anfänger:innen",
              "Yoga-Arten",
              "Nordic Walking + Yoga = Nordic Yoga",
              "9 Yoga-Weisheiten",
            ],
          },
        ]}
      />
    </div>
  );
};

export default YogaRetreatsGermany;

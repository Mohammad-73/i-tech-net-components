import React from "react";
// Hero
import Hero from "../../components/Hero/Hero";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
import { MdWaves } from "react-icons/md";
import { FaHeart, FaSun, FaLeaf } from "react-icons/fa";
//ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImg from "../../assets/SurfcampsFuerteventura/Tab-Element-Regionen/Surfcamp-Vieux-Boucau-Frankreich.jpg";
import ListAndImg2 from "../../assets/SurfcampsFuerteventura/Unterkunft/Surfurlaub-Apartments.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
import cardImage from "../../assets/images/cardImage.jpg";
//ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery6 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Familien-Surfurlaub-Frankreich.jpg";
import imgGallery1 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Starsurfcamp-Moliets-Frankreich.jpg";
import imgGallery4 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Backwash-Surfcamp-Frankreich-Cap-Ferret.jpg";
import imgGallery3 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Dreamsea-Surf-Yogacamp-Moliets-Frankreich.jpg";
import imgGallery5 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Eco-Surfcamp-Frankreich-Seignosse.jpg";
import imgGallery2 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Surf-Villa-Frankreich-Seignosse.jpg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
import wImg1 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Planet-Surfcamp-Le-Pin-Sec-Frankreich.jpg";
import wImg2 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Pura-Vida-Surf-Lodge-Mimizan-Plage-Frankreich.jpg";
import wImg3 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Dreamsea-Surfcamp-Party-Moliets-Frankreich.jpg";
import wImg4 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Surf-Yoga-Urlaub-Pura-Vida-Lodge-Mimizan-Plage-Frankreich.jpg";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
import slideDividerImg from "../../assets/SurfcampsFuerteventura/Header/surfcamps-frankreich.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/images/Besonderheiten.jpg";
import dividerImage from "../../assets/SurfcampsFuerteventura/Header/surfcamps-europa.jpg";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Surfcamp-Frankreich-Vieux Boucau.jpg";
import Col32 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Starsurfcamp-Moliets-Frankreich.jpg";
import Col33 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Surf-Yoga-Camp-Frankreich-Seignosse.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampFuerteventura = () => {
  return (
    <div>
      {" "}
      <Hero
        image="bg-hero-frankreich"
        title="Surfcamps in Frankreich"
        description="Erlebe Sonne, Wellen und gute Laune"
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <MdWaves size={56} />,
            title: "Perfekte Wellen",
            description:
              "Von sanften Beachbreaks bis hin zu steilen Riffwellen - Fuerteventura bietet die passenden Wellen für alle Surflevel!",
          },
          {
            icon: <FaSun size={56} />,
            title: "Sommerliches Wetter",
            description:
              "Die Insel des ewigen Frühlings - mit durchschnittlich 23 Grad erwarten dich das ganze Jahr über Sonne und Sommergefühle!",
          },
          {
            icon: <FaLeaf size={56} />,
            title: "Einzigartige Landschaft",
            description:
              "Eine Landschaft wie auf dem Mond und über 100 kilometer weißer Sandstrand mit türkisem Wasser - eine faszinierende Kombination!",
          },
          {
            icon: <FaHeart size={56} />,
            title: "Entspannte Atmosphäre",
            description:
              "Erstmal entspannen und das Leben genießen - dieses Lebensmotto der Kanaren überträgt sich sofort auf dich und deinen Urlaub!",
          },
        ]}
      />
      <ListAndImage
        mainTitle="Die beliebtesten Orte für einen Surfurlaub auf Fuerteventura"
        mainDescription="Einsame Strände, die du nur über Schotterpisten erreichst - das erwartet dich entlang der Westküste Fuerteventuras. Als Basis für dein Surfcamp bietet sich hier der kleine und noch ursprüngliche Ort El Cotillo an. Die Alternative zu El Cotillo ist Corralejo im Norden Fuerteventuras. Corralejo ist der beliebteste Ort für einen Surfurlaub. Hier ist deutlich mehr los und die Nordküste ist bekannt für ihre weltklasse Surfspots."
        image={ListAndImg}
        title="Corralejo"
        description="Eine Altstadt mit verwinkelten Gassen, traumhafte weiße Sandstrände und ein Naturpark mit einer einzigartigen Dünenlandschaft - Corralejo bietet dir die perfekte Mischung aus Ruhe und Action: Hier hast du immer die Wahl, ob du am Strand entspannen oder in einer der vielen Tapas-Bars das kanarische Leben genießen willst. Die Auswahl an Surfspots rund um Corralejo ist riesig. Der Großteil der Surfspots eignet sich dabei insbesondere für fortgeschrittene Surfer:innen. Doch auch für die ersten Versuche auf dem Surfbrett findest du dank der Ortskenntnis der Surflehrer:innen immer eine passende Welle."
      />
      <SingleCardSection
        title="Top-Surfcamps in Corralejo"
        items={[
          {
            cardImage: cardImage,
            title: "Surfcamp mit Pool am Strand von Fuerteventura",
            location: "Corralejo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "269 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfcamp in Corralejo: Chillen, Surfen & neue Leute",
            location: "Corralejo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "349 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-3"
      />
      <ListAndImage
        image={ListAndImg2}
        title="El Cotillo"
        description="El Cotillo im Nordwesten Fuerteventuras ist die deutlich ruhigere Alternative zu Corralejo. Wenn du durch den kleinen Strandort schlenderst, hast du das Gefühl in einer anderen Welt zu sein. Alles um dich herum wirkt nochmals entspannter und die Menschen begrüßen dich mit einem fröhlichen Lächeln. Hier kannst du alles um dich herum vergessen und einfach nur genießen!
        Der lange Sandstrand liegt direkt vor deiner Haustür und bietet insbesondere für Anfänger:innen ideale Wellen. Fortgeschrittene erwartet eine große Auswahl an Surfspots entlang der Nord- und Ostküste."
      />
      <SingleCardSection
        title="Top-Surfcamps in El Cotillo"
        items={[
          {
            cardImage: cardImage,
            title: "Surfcamp mit Meerblick auf Fuerteventura",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "249 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title:
              "Familiäre Surfvilla in El Cotillo: Surfen & Yoga im Paradies",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "560 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfen in der Sonne: Gemütliche Surfvilla in El Cotillo",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "440 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-3"
      />
      <ColorDivider
        title="Urlaub buchen ohne Risiko"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100% Rückerstattung!"
        buttonTitle="Mehr erfahren"
      />
      <ImageGallery3
        title="Ausgewählte Kategorien für deinen Surfurlaub"
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: "Surfcamps für Anfänger:innen",
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: "Surfcamps in der Natur",
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: "Low Budget Surfcamps",
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: "Surfcamps mit kostenfreier Stornierung",
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: "Surfcamps für Freund:innen",
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: "Surfcamps für Alleinreisende",
          },
        ]}
      />
      <ImageGalleryWindow
        title="Surfcamps mit besonderen Extras"
        description="Reise abseits des Mainstreams und mache deinen Surfurlaub zu einem außergewöhnlichen Erlebnis!"
        items={[
          {
            shadowSize: "80",
            img: wImg1,
            title: "Fuerteventura durch die Linse",
            description:
              "Surfe die besten Wellen Fuerteventuras und entdecke einzigartige Landschaften bei Fotografie-Sessions mit lokalen Guides.",
          },
          {
            shadowSize: "80",
            img: wImg2,
            title: "Spanisch lernen im Surfurlaub",
            description:
              "Lerne in einem authentischen Umfeld spanisch und freu dich auf Menschen von überall auf der Welt. Der perfekte Bildungsurlaub mit Action und Spaß.",
          },
          {
            shadowSize: "80",
            img: wImg3,
            title: "Wohlfühlurlaub mit Yoga, Surfen & Pilates",
            description:
              "Eine typisch kanarische Villa mit Pool & Jacuzzi, täglich Yoga & Pilates, drei Surftage und vegetarische Verpflegung: Der perfekte rundum Wohlfühlurlaub.",
          },
          {
            shadowSize: "80",
            img: wImg4,
            title: "Yoga & Surfen in der Künstlerstadt Lajares",
            description:
              "Ein ganzheitliches Retreat in familiärer Atmosphäre: Freu dich auf Yoga, Surfen, vegetarisch-vegane Verpflegung und eine Vulkanwanderung.",
          },
        ]}
      />
      <SlideDivider
        image={slideDividerImg}
        dark={true}
        items={[
          {
            description:
              "Ich hab mich sehr gut aufgehoben gefühlt. Die Surflehrer haben einen wirklich guten Job gemacht. Sie haben es geschafft mir als Anfängerin eine Mänge Wissen über das Surfen zu vermitteln. Auch die Unterkunft war toll, hab mich sehr wohl gefühlt. Abends wurde gemeinsam gegessen (auch zusammen mit den Surflehrern), sodass man sofort zu einem Teil der Gruppe wurde. Ich komm gerne wieder!!!",
            name: "Svenja",
            date: "15.08.2022",
          },
          {
            description:
              "Es war traumhaft. Sehr liebevoll,gute Kurse und wunderbares Essen",
            name: "Beate",
            date: "23.02.2022",
          },
          {
            description:
              "Der Aufenthalt im Homegrown Camp hat mir sehr gut gefallen. Das 'Hostel' war sehr sauber. Sie haben sehr auf Hygiene geachtet. Die Surflehrer waren sehr lieb und nett und haben sich sehr viele Mühe gegeben und es hat sehr viel Spaß gemacht. Ich werde definitiv wieder kommen. Danke für den tollen Aufenthalt auf Fuerteventura :)",
            name: "Johanna",
            date: "25.05.2022",
          },
        ]}
      />
      <SingleCardSection
        title="Die beliebtesten Surfcamps auf Fuerteventura"
        items={[
          {
            cardImage: cardImage,
            title: "Surfcamp in Corralejo: Chillen, Surfen & neue Leute",
            location: "Corralejo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "349 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfcamp mit Pool am Strand von Fuerteventura",
            location: "Corralejo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "269 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfen in der Sonne: Gemütliche Surfvilla in El Cotillo",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "440 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title:
              "Familiäre Surfvilla in El Cotillo: Surfen & Yoga im Paradies",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "560 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        image={Besonderheiten}
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <SingleColImg
        title="Entdecke die Vielfalt der Kanarischen Inseln"
        description="So unterschiedlich die jeweiligen Inseln auch sind - perfekte Wellen, Strand und Sonne findest du überall! Welche Insel passt zu dir?"
        items={[
          {
            img: Col31,
            title: "Teneriffa",
            description:
              "Entdecke vielfältige Natur, konstante Wellen und den beeindruckenden Vulkan Teide.",
          },
          {
            img: Col32,
            title: "Gran Canaria",
            description:
              "Von den Wellen direkt in eine Tapas-Bar: Erlebe einen Surfurlaub mit Großstadtfeeling.",
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
        title="Entdecke alle Surfcamps auf den Kanarischen Inseln"
        description="Fuerteventura • Teneriffa • Gran Canaria • Lanzarote"
        image={dividerImage}
        buttonTitle="Zur Übersicht"
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
        cols="xl:grid-cols-3"
        items={[
          {
            title: "Top-Reiseziele",
            items: [
              "Surfcamps in Frankreich",
              "Surfcamps in Portugal",
              "Surfcamps in Spanien",
              "Surfcamps auf Teneriffa",
            ],
          },
          {
            title: "Ausgewählte Kategorien",
            items: [
              "Surfcamps für Alleinreisende",
              "Surfcamps in der Natue",
              "Surfcamps für Gruppen & Freunde",
              "Surf & Yoga Camps",
            ],
          },
          {
            title: "Unser Reisemagazin",
            items: [
              "Gemeinsam für den Meeresschutz",
              "Reisebericht: Surf & Yogacamp in Portugal",
              "Die 13 besten Surf-Filme für einen Kinoabend",
              "Reisebericht: Mein erstes Surfcamp",
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampFuerteventura;

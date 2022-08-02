import React from "react";
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//Description
import Description from "../../components/Description/Description";
import Kanaren from "../../assets/images/Kanaren.jpg";

import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";

import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ImageGallery2 from "../../components/ImageGallery2/ImageGallery2";
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import NavBar from "../../components/NavBar/NavBar";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import { BiRightArrowAlt } from "react-icons/bi";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
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
//RateCardSection
import RateCardSection from "../../components/RateCardSection/RateCardSection";
import RateImg from "../../assets/images/g1.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//
import Besonderheiten from "../../assets/images/Besonderheiten.jpg";
import DividerImage from "../../assets/images/dividerImage.jpg";
//TagSection
import TagSection from "../../components/TagSection/TagSection";
const SurfcampEurope = () => {
  return (
    <div>
      <NavBar />
      <Hero
        image="bg-hero-europe"
        title="Surface in Portugal"
        description="Erlebe die debesten Wellen Europas"
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
        titel="Die besten Reiseziele für einen Surfurlaub in Europa"
        tabItems={[
          "Frankreich",
          "Portugal",
          "Spanien",
          "Fuerteventura",
          "Teneriffa",
          "Gran Canaria",
        ]}
        tabCols="lg:grid-cols-6"
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
        cardCols="lg:grid-cols-4"
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
        readMore=""
      />
      <ImageGallery2 />
      <SingleCardSection
        title="Empfohlene Surfcamps in Europa"
        description="Entdecke Surfcamps, die von Reisenden mit mindestens 4,5 von 5 Sternen
      bewertet sind, und erlebe deinen Traumurlaub am Meer!"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        align="center"
        title="Entdecke alle Surfcamps in Europa"
        description="Über 100 qualitätsgeprüfte Surfcamps für dein Abenteuer in den Wellen"
        image={DividerImage}
        buttonTitle="Zur Übersicht"
      />
      <SingleColImg
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
      <RateCardSection
        title="Das sagen Reisende über ihren Surfurlaub in Europa"
        items={[
          {
            rateName: "Febi",
            rateDesc:
              "Sehr sauber, tolle Atmosphäre, super Lage direkt am Strand, mega Blick aufs Meer von der Dachterasse und nette Gäste :)",
            rateImage: RateImg,
            rateCalendar: "22.08.2021",
            rateFootNote:
              "Modernes Surfhaus direkt am Strand von Las Palmas bewertet von",
          },
          {
            rateName: "Yves",
            rateDesc: "Einer der besten Urlaube die ich erleben durfte",
            rateImage: RateImg,
            rateCalendar: " 08.12.2021",
            rateFootNote:
              "Surfcamp in Corralejo: Chillen, Surfen & neue Leute bewertet von Yves,",
          },
          {
            rateName: "Pia",
            rateDesc:
              "Wenn ihr nach Portugal reist und Surfen lernen wollt, seid ihr im Estela Surf Hostel bestens aufgehoben. Die Hosts Marco und Rachel sind super herzlich und gastfreundlich. Betonen möchte ich auch die Sauberkeit der Unterkunft. Wir haben noch nie so ein sauberes Hostel gesehen. Wir freuen uns schon auf den nächsten Besuch!:)",
            rateImage: RateImg,
            rateCalendar: " 28.09.2021",
            rateFootNote:
              "Familiäres Surfhaus im unberührten Norden Portugals bewertet von ",
          },
          {
            rateName: "Paula",
            rateDesc:
              "Ich werd diese Woche nie vergessen und kann das Surfcamp nur weiterempfehlen! Ihr werdet eine unvergesslich geile Zeit haben. Alle Leute sind super chillig drauf, die Partys sind nice, das Surfen ist der Hammer und das Essen super lecker. Was will man mehr?",
            rateImage: RateImg,
            rateCalendar: "09.09.2021",
            rateFootNote:
              "Surfcamp in Westfrankreich: Surfen weit weg vom Trubel bewertet von ",
          },
          {
            rateName: "Ella",
            rateDesc:
              "Ich habe ein super Sommer Urlaub mit Volcano surfcamp gemacht! Unser Surftrainer Umberto ist einfach die besten! Die Unterkunft ist auch mega schön, man kann so einfach andere coole Leuten aus der Welt kennenlernen und jeden Tag etwas zusammen unternehmen. I‘ll come back there again for sure :D",
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote:
              "Gemeinschaftliches Surfhaus im Süden Teneriffas bewertet von Ella",
          },
          {
            rateName: "Melina",
            rateDesc:
              "Einfach klasse! Daniel von moverii hat mir super bei der kurzfristigen Reiseplanung weitergeholfen. Das Hostel lag direkt am Strand, das Team dort war super nett und hilfsbereit und die surfstunden haben auch Spaß gemacht. Sehr verdiente 5 Sterne!",
            rateImage: RateImg,
            rateCalendar: "19.08.2021",
            rateFootNote:
              "Surfhaus mit Dachterrasse direkt am Surfspot in Ericeira bewertet von",
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title="Beliebte Kategorien für einen Surfurlaub in Europa"
        formInputs={[
          { type: "text", placeholder: "Your name" },
          { type: "text", placeholder: "Phone Number" },
          { type: "text", placeholder: "Email Address" },
          { type: "text", placeholder: "Subject" },
        ]}
        formTextarea="Write your message"
        formButton="Send a Message"
        cardImageSrc={Contact}
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
        cols="xl:grid-cols-4"
        items={[
          {
            title: "Top-Reiseziele",
            items: [
              "Surfcamps in Frankreich",
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
              "Surf & Yoga Camps",
              "Low Budget Surfcamps",
              "Surfcamps für Anfänger:innen",
              "Surfhäuser & Lodges",
            ],
          },

          {
            title: "Gewünschte Atmosphäre",
            items: [
              "Surfcamps für Alleinreisende",
              "Surfurlaub für Familien",
              "Surfcamps für Freund:innen",
              "Surf-Reisen für Paare",
              "Surfcamps für unter 18 Jährige",
            ],
          },
          {
            title: "Unser Reisemagazin",
            items: [
              "Gemeinsam für den Meeresschutz",
              "Reisebericht: Surf & Yoga Camp in Portugal",
              "Die 13 besten Surf-Filme für einen Kino Abend",
              "Reisebericht: Mein erstes Surfcamp",
              "Surfen lernen: Dein Weg in die Freiheit",
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampEurope;

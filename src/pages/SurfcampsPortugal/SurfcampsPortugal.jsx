import React from "react";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//Description
import Description from "../../components/Description/Description";
import Algarve from "../../assets/SurfcampPortugal/Regionen/Surfcamps-Portugal-Algarve.jpg";
//ImageGalleryFourPic
import ImageGalleryFourPic from "../../components/ImageGalleryFourPic/ImageGalleryFourPic";
import img1 from "../../assets/SurfcampPortugal/Zielgruppe/Surfcamps-Portugal-Alleinreisende.jpg";
import img2 from "../../assets/SurfcampPortugal/Zielgruppe/Surfcamps-Portugal_Gruppen-Freunde-alt.jpg";
import img3 from "../../assets/SurfcampPortugal/Zielgruppe/Familien-Surfcamps-Portugal.jpg";
import img4 from "../../assets/SurfcampPortugal/Zielgruppe/Surfurlaub-Paare-Portugal.jpg";
//ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/SurfcampPortugal/Vorteile-Divider/Surfcamps-Portugal-Besonderheiten.jpg";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery6 from "../../assets/SurfcampPortugal/Kategorien/Surf-Yoga-Camps-Portugal.jpg";
import imgGallery1 from "../../assets/SurfcampPortugal/Kategorien/Surfcamps-Portugal-Natur.jpg";
import imgGallery4 from "../../assets/SurfcampPortugal/Kategorien/Surfcamps-Portugal-Kostenfreie-Stornierung.jpg";
import imgGallery3 from "../../assets/SurfcampPortugal/Kategorien/Surf-Mountainbike-Urlaub-Portugal.jpg";
import imgGallery5 from "../../assets/SurfcampPortugal/Kategorien/Low-Budget-Surfcamps-Portugal.jpg";
import imgGallery2 from "../../assets/SurfcampPortugal/Kategorien/Surfurlaub-Portugal-Einzelzimmer.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import dividerImage from "../../assets/SurfcampPortugal/Divider/surfcamps-portugal.jpg";
import Besonderheiten from "../../assets/images/Besonderheiten.jpg";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/SurfcampPortugal/Vorkenntnisse/Surfcamps-Portugal-Anfänger.jpg";
import Col32 from "../../assets/SurfcampPortugal/Vorkenntnisse/Surfcamps-Portugal_Intermediates.jpg";
import Col33 from "../../assets/SurfcampPortugal/Vorkenntnisse/Surfari-Surf-Guiding-Portugal.jpg";
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

const SurfcampsPortugal = () => {
  return (
    <div>
      <Hero
        image="bg-hero-portugal"
        title="Surface in Portugal"
        description="Erlebe die besten Wellen Europas"
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
          "Algarve",
          "Ericeira",
          "Peniche",
          "Santa Cruz",
          "Lourinha",
          "Region Porto",
        ]}
        tabCols="lg:grid-cols-6"
        detailsImage={Algarve}
        detailsTitle="Algarve"
        detailsDesc="Einzigartige Steilküsten, Sonne das ganze Jahr über und unberührte Natur - die Algarve im Süden Portugals ist die beliebteste Region für einen Surfurlaub in Portugal.
        Durch die zwei ewig langen und verschieden ausgerichteten Küstenabschnitte gibt es hier nicht nur jede Menge zu entdecken, sondern auch immer eine passende Welle - ganz gleich, ob du noch nie auf einem Surfbrett standest oder schon erfahren im Wellenreiten bist.
        Die Algarve ist die richtige Wahl für deinen Surfurlaub, wenn du raus in die Natur, ohne Ende Surfen und die Sonne am Strand genießen willst!"
        detailsReadMore="Zu den Details"
        cardTitle="Top-Surfcamps an der Algarve"
        cardItems={[1, 2, 3, 4]}
        cardCols="lg:grid-cols-4"
      />
      <ImageGalleryFourPic
        title="Die beliebtesten Kategorien für einen Surfurlaub in Frankreich"
        items={[
          {
            img: img1,
            shadow: "80",
            title: "Surfcamps für Alleinreisende",
          },
          {
            img: img2,
            shadow: "80",
            title: "Surfcamps für Freund:innen",
          },
          {
            img: img3,
            shadow: "80",
            title: "Surfurlaub für Familien",
          },
          {
            img: img4,
            shadow: "80",
            title: "Surf-Reisen für Paare",
          },
        ]}
      />
      <ListAndImage
        image={ListAndImage1}
        title="Ein Surfcamp in Portugal passt zu dir, wenn du..."
        items={[
          "...vielfältige und unberührte Natur entdecken willst",
          "...gemeinsam mit Einheimischen die besten Wellen Europas surfen willst",
          "...Sonne das ganze Jahr über genießen willst",
          "...einen authentischen und entspannten Lebensstil erleben willst",
        ]}
      />
      <ImageGallery3
        title="Die beliebtesten Kategorien für einen Surfurlaub in Frankreich"
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: "Surf- & Yoga-Camps",
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: "Surf & Fotografie Urlaub",
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: "Surf & Spanisch Reise",
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: "Surf & Fitness Reisen",
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: "Surf & Skate Camp",
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: "Surf & Mountainbike Urlaub",
          },
        ]}
      />
      <SingleCardSection
        title="Surfen & Entspannen: Die beste Auswahl in Frankreich"
        description="Freust du dich über ein gemeinsamen Grillabend am Lagerfeuer, willst danach aber schnell ins Bett, um fit für die Wellen am nächsten Morgen zu sein? Dann entdecke unsere beliebtesten Surfcamps für die richtige Balance zwischen Action in den Wellen und Erholung in der Natur:"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        align="center"
        title="Entdecke alle Surfcamps in Portugal"
        image={dividerImage}
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
              "Lerne die Grundlagen des Surfens kennen und erlebe die Faszination Wellenreiten!",
          },
          {
            img: Col32,
            title: "Surfcamps für Intermediates",
            description:
              "Surfe lange grüne Wellen und erreiche mit erfahrenen Surflehrern dein nächstes Level!",
          },
          {
            img: Col33,
            title: "Surf-Guiding für Profis",
            description:
              "Erlebe gemeinsam mit Locals die Suche nach der perfekten Welle!",
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
      <RateCardSection
        title="Das sagen Reisende über ihren Surfurlaub in Portugal"
        items={[
          {
            rateName: "Amelie",
            rateDesc:
              "Der Aufenthalt bei Marco und Raquel war einfach wunderbar. Die beiden sind einfach wunderbare Hosts und tun wirklich alles für ihre Gäste. Ich habe mich ab Minute 1 wohlgefühlt und kann das Hostel nur jedem ans Herz legen, der eine tolle Surferfahrung mit sehr sauberem Hostel und liebevollen Hosts genießen möchte. Raquel kocht jeden Abend ein wunderbares Dinner. So gut habe ich sogar manchmal in keinem Restaurant gegessen. Auch das Surfen war klasse und der Spot ebenfalls nur empfehlenswert!",
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote:
              "Familiäres Surfhaus im unberührten Norden Portugals bewertet von",
          },
          {
            rateName: "Taty",
            rateDesc:
              "Wir fühlten uns sehr gut aufgehoben im Chill In in Ericeira. Die Surfstunden waren gut organisiert, man konnte sich jeweils bis am Abend vorher auf einer Liste eintragen und wurde jeweils pünktlich abgeholt. Die Zimmer waren sauber, ebenfalls die Gemeinschaftsbäder. Ins Zentrum von Ericeira mit diversen Einkaufs- und Essensmöglichkeiten ist es nur ein ca. 5 Gehminuten.",
            rateImage: RateImg,
            rateCalendar: "03.12.2021",
            rateFootNote:
              "Chill in Surfhaus mit Blick auf's Meer im Surfer-Paradies Ericeira bewertet von",
          },
          {
            rateName: "Sarah",
            rateDesc:
              "Schöne Unterkunft, tolle Gastgeber, gutes Essen, super Surfkurse und Freizeitangebot (Massage, Yoga, Fitness, Tischtennis, Themenabende …)",
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote:
              "Ganzheitliches Surfcamp für Naturliebhaber an der Algarve bewertet von",
          },
          {
            rateName: "Christine",
            rateDesc:
              "Tolle Unterkunft, tolles Frühstück, super Service. Sehr professionelle Yoga Classes und super Lage.",
            rateImage: RateImg,
            rateCalendar: "30.07.2021",
            rateFootNote:
              "Surf & Yoga Urlaub direkt am Strand in der Sonne Portugals bewertet von",
          },
          {
            rateName: "Pia",
            rateDesc:
              "Wenn ihr nach Portugal reist und Surfen lernen wollt, seid ihr im Estela Surf Hostel bestens aufgehoben. Die Hosts Marco und Rachel sind super herzlich und gastfreundlich. Betonen möchte ich auch die Sauberkeit der Unterkunft. Wir haben noch nie so ein sauberes Hostel gesehen. Wir freuen uns schon auf den nächsten Besuch!:)",
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote:
              "Familiäres Surfhaus im unberührten Norden Portugals bewertet von",
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
              "Surfcamps auf Fuerteventura",
              "Surfcamps in Spanien",
              "Surfcamps auf Teneriffa",
            ],
          },
          {
            title: "Beliebte Kategorien",
            items: [
              "Surfcamps für Alleinreisende",
              "Surf & Yoga Reisen",
              "Surfcamps für Freund:innen",
              "Surfcamps in der Natur",
            ],
          },
          {
            title: "Unser Reisemagazin",
            items: [
              "Reisebericht: Mein erstes Surfcamp",
              "Gemeinsam für den Meeresschutz",
              "Surfen auf den Kanaren",
              "Reisebericht: Surf & Yogacamp in Portugal",
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampsPortugal;

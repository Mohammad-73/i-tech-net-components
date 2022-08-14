import React from "react";
// Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//ImageGalleryBrick2
import ImageGalleryBrick2 from "../../components/ImageGalleryBrick2/ImageGalleryBrick2";
import image6 from "../../assets/hiking-holiday/Kategorien/Wander-Wochenenden.jpg";
import image7 from "../../assets/hiking-holiday/Kategorien/Wandern-Wellness.jpg";
import image8 from "../../assets/hiking-holiday/Kategorien/Standort-Wandern.jpg";
import image9 from "../../assets/hiking-holiday/Kategorien/Wandern-Genuss.jpg";
import image10 from "../../assets/hiking-holiday/Kategorien/Wandern-Trekking.jpg";
import image11 from "../../assets/hiking-holiday/Kategorien/Wandern-Yoga.jpg";
import image12 from "../../assets/hiking-holiday/Kategorien/Wandern-Alpenueberquerungen.jpg";
//Description
import Description from "../../components/Description/Description";
import Alleinreisende from "../../assets/hiking-holiday/Zielgruppen/Wandern-Gruppenreisen.jpg";
import Familien from "../../assets/hiking-holiday/Zielgruppen/Wandern-Familien.jpg";
import Paare from "../../assets/hiking-holiday/Zielgruppen/Wandern-Paare.jpg";
import Frauen from "../../assets/hiking-holiday/Zielgruppen/Wandern-Frauen.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col32 from "../../assets/hiking-holiday/Fitnesslevel/Wandern-Anfaenger.jpg";
import Col33 from "../../assets/hiking-holiday/Fitnesslevel/Wandern-Fortgeschritte.jpg";
import Col31 from "../../assets/hiking-holiday/Fitnesslevel/Wandern-Profis.jpg";
//ImageGalleryFourPic
import ImageGalleryFourPic from "../../components/ImageGalleryFourPic/ImageGalleryFourPic";
import img1 from "../../assets/hiking-holiday/Reiseziele/Wandern-Deutschland.jpg";
import img2 from "../../assets/hiking-holiday/Reiseziele/Wandern-Italien.jpg";
import img3 from "../../assets/hiking-holiday/Reiseziele/Wandern-Schweiz.jpg";
import img4 from "../../assets/hiking-holiday/Reiseziele/Wandern-Oesterreich.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Suchst from "../../assets/hiking-holiday/Divider/Wandern-Divider-3.jpg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
import wImg1 from "../../assets/hiking-holiday/Routen/Wandern-Dolomiten.jpg";
import wImg2 from "../../assets/hiking-holiday/Routen/Wandern-Kramerspitz.jpg";
import wImg3 from "../../assets/hiking-holiday/Routen/Wandern-Septimer.jpg";
import wImg4 from "../../assets/hiking-holiday/Routen/Wandern-Traunsee.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
import slideDividerImg from "../../assets/hiking-holiday/Divider/Wandern-Divider-1.jpg";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const HikingHolidays = () => {
  return (
    <div>
      <Hero
        image="bg-hero-hiking-holiday"
        title="Wanderurlaub"
        description="Erlebe die Natur von ihrer schönsten Seite"
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
      <ImageGalleryBrick2
        title="Welche Art von Wanderurlaub wünschst du dir?"
        description="Wandern kann so vielseitig sein! Von der erholsamen Strandwanderung bis zur herausfordernden Alpenüberquerung: Die Grenzen für deinen Wanderurlaub setzt einzig und allein du. "
        image1={{
          img: image6,
          title: "Wander Wochenenden",
          description:
            "Deine Chance, um unkompliziert rauszukommen, den Kopf frei zu kriegen und die Natur zu genießen!",
        }}
        image2={{
          img: image7,
          title: "Wandern & Wellness",
          description:
            "Lass es dir so richtig gut gehen: Nach einem aktiven Tag in der Natur warten Sauna, Massagen und Entspannung auf dich!",
        }}
        image3={{
          img: image8,
          title: "Standort Wandern",
          description:
            "Tagesrucksack und Hotel: Entdecke die entspannte Art zu wandern!",
        }}
        image4={{
          img: image9,
          title: "Genuss Wandern",
          description:
            "Genieße deine Wanderungen mit allen Sinnen und genug Zeit für dich selbst!",
        }}
        image5={{
          img: image10,
          title: "Trekking",
          description:
            "Erlebe unvergessliche Abenteuer auf fordernden Mehrtageswanderungen!",
        }}
        image6={{
          img: image11,
          title: "Wandern & Yoga",
          description:
            "Die perfekte Kombination aus Bewegung, Natur und Meditation entführt dich in ein ganzheitliches Erlebnis für Körper und Geist!",
        }}
        image7={{
          img: image12,
          title: "Alpenüberquerungen",
          description:
            "Bist du bereit für die ultimative Herausforderung? Dann schließe dich jetzt einer unserer Alpentraversalen an!",
        }}
      />
      <Description
        titel="Finde den Wanderurlaub, der zu dir passt"
        tabItems={[
          "Für Alleinreisende",
          "Für Familien",
          "Für Paare",
          "Für Frauen",
        ]}
        tabCols="lg:grid-cols-4"
        tabContents={[
          {
            detailsImage: Alleinreisende,
            detailsTitle: "Gemeinsam die Faszination Natur erleben",
            detailsDesc:
              "Den ganzen Urlaub unter Gleichgesinnten verbringen, gemeinsam die Umgebung erkunden und vielleicht sogar neue Bekanntschaften fürs Leben schließen: Welche Leidenschaft eignet sich besser für eine Gruppenreise als das Wandern? Nach der obligatorischen Vorstellungsrunde verschwinden die anfänglichen Berührungsängste ganz von selbst. Deine Wanderführung achtet zu jeder Zeit auf die Bedürfnisse der gesamten Gruppe und kümmert sich mit großer Freude um die kollektive Wanderlust - denn geteilte Freude ist doppelte Freude!",
            detailsReadMore: "",
            cardTitle: "Ausgewählte Wandergruppenreisen",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Wander-Erlebniswoche in der Vulkaneifel",
                location: "Salmtal, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "180 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Bergwanderwoche durch die tolle Natur Graubündens",
                location: "Bivio, Schweiz",
                calender: "2 Termine im Jah",
                rateDesc: "",
                price: "183 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Alpentraversale: Vom Watzmann zu den Drei Zinnen",
                location: "Königssee, Deutschland",
                calender: "7 Termine im Jahr",
                rateDesc: "",
                price: "174 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Wanderwoche durch traumhaftes Berg- & Seengebiet",
                location: "Gmunden, Österreich",
                calender: "5 Termine im Jahr",
                rateDesc: "",
                price: "165 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Familien,
            detailsTitle: "Ein Abenteuer für klein und groß",
            detailsDesc:
              "Wenn man die Kleinen für die Wunder der Natur begeistern möchte, ist ein Wanderurlaub genau das Richtige. Erkundet gemeinsam Wälder, Wiesen, Gipfel und Täler während die ganze Bande mal so richtig ausgelastet wird. Wenn die Eltern mal Zeit für sich brauchen, bieten manche Unterkünfte außerdem eine spezielle Kinderbetreuung an. Umliegende Familienattraktionen sorgen für die notwendige Abwechslung! Ein Wanderurlaub wird die Familie mit Sicherheit enger zusammenbringen und deswegen so schnell nicht in Vergessenheit geraten!",
            detailsReadMore: "",
            cardTitle: "Ausgewählte Wanderurlaube für Familien",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Wander- & Aktivurlaub im Wellnesshotel",
                location: "Mandarfen, Österreich",
                calender: "01.01 - 02.05 und 26.06. - 31.12.",
                rateDesc: "",
                price: "115 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Wanderglück mit Blick auf die Königsschlösser",
                location: "Schwangau, Deutschland",
                calender: "01.05. - 07.11.2021",
                rateDesc: "",
                price: "165 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Paare,
            detailsTitle: "Zu zweit ist alles besser",
            detailsDesc:
              "Möchtest du mit deiner Partnerin oder deinem Partner unvergessliche Erlebnisse teilen, neue Gipfel erklimmen, Seen entdecken, Wälder durchwandern und dabei immer noch genug Zeit für gemeinsame Erholung haben? Dann schnapp dir deine bessere Hälfte, deinen Tagesrucksack und deine Wanderschuhe und entdecke die besten Wanderreisen in ausgewählten Wanderhotels! Entscheidet jeden Morgen aufs Neue, ob ihr euch einer geführten Wanderung anschließt und danach wohlverdient die Beine im Wellnessbereich hochlegt oder auf eigene Faust die Gegend erkundet.",
            detailsReadMore: "",
            cardTitle: "Ausgewählte Wanderurlaube für Paare",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Wander- & Wellness-Vergnügen am Achensee",
                location: " Pertisau, Österreich",
                calender: "02.05. - 31.10.2021",
                rateDesc: "",
                price: "116 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Wander-Wochenende im Hunsrück am Stausee",
                location: "Losheim Am See, Deutschland",
                calender: "15.10. - 18.10. 2021",
                rateDesc: "",
                price: "155 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Aktivurlaub im Pitztaler Sport- und Wellnesshotel",
                location: "Mandarfen, Österreich",
                calender: "01.01 - 02.05 und 26.06. - 31.12.",
                rateDesc: "",
                price: "115 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Frauen,
            detailsTitle: "Von Frauen für Frauen gemacht",
            detailsDesc:
              "Gemeinsame Bewegung an der frischen Luft schweißt zusammen! Bei diesen exklusiven Wandergruppenreisen für weibliche Teilnehmerinnen kannst du dich auf achtsame Gespräche, einen verständnisvollen Freiraum und viele lustige Momente inmitten von wohltuender Natur freuen. Daraus entstehen oft Freundschaften, die ein Leben lang halten. Wenn du also eine unvergleichliche Auszeit und eine neue Erfahrung brauchst, dann gönne dir jetzt einen Wanderurlaub zusammen mit einer kleinen Gruppe aus wanderbegeisterten und naturverbundenen Frauen!",
            detailsReadMore: "",
            cardTitle: "Ausgewählte Wanderreisen nur für Frauen",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Genuss Wandern für Frauen im Hochpustertal",
                location: "Anras, Österreich",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "161 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Yoga- und Wanderwoche für Frauen im blauen Land",
                location: " Ohlstadt, Deutschland",
                calender: "21.08. - 28.08.2021",
                rateDesc: "",
                price: "156 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Alpenüberquerung für Frauen in Südtirol",
                location: "Mals, Italien",
                calender: "05.09. - 12.09.2021",
                rateDesc: "",
                price: "162 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <ColorDivider
        title="Welcher Wanderurlaub passt zu dir?"
        description="Lass dich von unseren Experten beraten und finde deinen Traumurlaub!"
        buttonTitle="Mehr erfahren"
      />
      <SingleColImg
        title="Wanderreisen nach Erfahrungslevel"
        items={[
          {
            img: Col31,
            title: "Wanderreisen für Anfänger:innen",
          },
          {
            img: Col32,
            title: "Wanderreisen für Fortgeschrittene",
          },
          {
            img: Col33,
            title: "Wanderreisen für Profis",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ImageGalleryFourPic
        title="Ausgewählte Reiseziele für deinen Wanderurlaub"
        items={[
          {
            img: img1,
            shadow: "80",
            title: "Deutschland",
          },
          {
            img: img2,
            shadow: "80",
            title: "Italien",
          },
          {
            img: img3,
            shadow: "80",
            title: "Schweiz",
          },
          {
            img: img4,
            shadow: "80",
            title: "Österreich",
          },
        ]}
      />
      <ColorDivider
        title="Wanderurlaub buchen ohne Risiko"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100 % Rückerstattung!"
        buttonTitle="Mehr erfahren"
      />
      <SingleCardSection
        title="Erholsame Wanderurlaube zum Genießen"
        description="Du möchtest es langsam angehen lassen? Mit diesen Reisen verbindest du Erholung mit Wanderungen in eindrucksvoller Natur!"
        items={[
          {
            cardImage: cardImage,
            title: "Wanderglück mit Blick auf die Königsschlösser",
            location: "Schwangau, Deutschland",
            calender: "01.05. - 07.11.2021",
            rateDesc: "",
            price: "165 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Genuss-Wanderwoche im Nationalpark Eifel",
            location: "Einruhr, Deutschland",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "142 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Winterwandern & Wellness in Tirol",
            location: "Pertisau, Österreich",
            calender: "25.11.2021 - 29.05.2022",
            rateDesc: "",
            price: "102 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Wander- & Aktivurlaub im Wellnesshotel",
            location: "Mandarfen, Österreich",
            calender: "01.01 - 02.05 und 26.06. - 31.12.",
            rateDesc: "",
            price: "115 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Bergwanderwoche durch die tolle Natur Graubündens",
            location: "Bivio, Schweiz",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "183 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Yoga & Wandern auf der Ostseeinsel Rügen",
            location: "Baabe, Rügen, Deutschland",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "112 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Wander-Wochenende im Hunsrück am Stausee",
            location: "Losheim Am See, Deutschland",
            calender: "15.10. - 18.10. 2021",
            rateDesc: "",
            price: "155 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Wander- & Wellness-Vergnügen am Achensee",
            location: "Pertisau, Österreich",
            calender: "02.05. - 31.10.2021",
            rateDesc: "",
            price: "116 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Wander-Erlebniswoche in der Vulkaneifel",
            location: "Salmtal, Deutschland",
            calender: "4 Termine im Jahr",
            rateDesc: "",
            price: "180 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Yoga- und Wanderwoche für Frauen im blauen Land",
            location: " Ohlstadt, Deutschland",
            calender: "21.08. - 28.08.2021",
            rateDesc: "",
            price: "156 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <SingleCardSection
        title="Abenteuerliche Wanderreisen mit Erlebnisfaktor"
        description="Hast du schon den ein oder anderen Gipfel hinter dir gelassen und bist auf der Suche nach der nächsten Herausforderung? Dann erlebe mit diesen Reisen dein nächstes Abenteuer in der Natur!"
        items={[
          {
            cardImage: cardImage,
            title: "Alpenüberquerung von Oberstdorf nach Meran",
            location: "Oberstdorf, Deutschland",
            calender: "7 Termine im Jahr",
            rateDesc: "",
            price: "164 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Alpentraversale: Vom Watzmann zu den Drei Zinnen",
            location: "Königssee, Deutschland",
            calender: "7 Termine im Jahr",
            rateDesc: "",
            price: "174 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Trekking-Tour auf den Gipfeln der Zugspitze",
            location: "Garmisch-Partenkirchen, Deutschland",
            calender: "7 Termine im Jahr",
            rateDesc: "",
            price: "187,50 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Alpenüberquerung für Frauen in Südtirol ",
            location: "Mals, Italien",
            calender: "05.09. - 12.09.2021",
            rateDesc: "",
            price: "162 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Outdoor- und Yoga-Retreat auf 1800 Metern",
            location: " Mayrhofen, Österreich",
            calender: "8 Termine im Jahr",
            rateDesc: "",
            price: "196 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Trekkingreise an der Isar: Von München nach Scharnitz",
            location: "Isar, Deutschland",
            calender: "3 Termine im Jahr",
            rateDesc: "",
            price: "189 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Dolomiten Trekking: Vom Pragser Wildsee nach Belluno",
            location: "Niederdorf, Italien",
            calender: "04.07. - 14.07.2021",
            rateDesc: "",
            price: "125 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-3"
      />
      <DividerImg
        image={Suchst}
        align="left"
        title="Entdecke alle Wanderurlaube"
        description="Bei einem Wanderurlaub mit moverii hast du immer einen professionellen Guide an deiner Seite, mit dem du in kleinen Gruppen unberührte Natur und interessante Geheimtipps entdeckst!"
        buttonTitle="Zur Übersicht"
      />
      <ImageGalleryWindow
        title="Ausgewählte Wanderrouten in den Alpen"
        description="Entdecke unsere ausgewählten Wanderrouten und erfahre mehr über ihre einzigartige Naturpracht."
        items={[
          {
            shadowSize: "80",
            img: wImg1,
            title:
              "Das beliebteste Wanderziel der italienischen Alpen: Die Drei Zinnen",
            description:
              "Die einzigartigen Felsformationen der südlichen Kalkalpen sorgen für beeindruckende Fotomotive!",
          },
          {
            shadowSize: "80",
            img: wImg2,
            title: "Atemberaubende Blicke auf die Zugspitze: Das Kramerspitz",
            description:
              'In Garmisch-Partenkirchen beginnt eine der schönsten Tagestouren Oberbayerns zum Gipfel des "Kramers".',
          },
          {
            shadowSize: "80",
            img: wImg3,
            title: "Auf den Spuren der alten Römer: Der Septimerpass",
            description:
              "Einer der ältesten Alpenübergänge lässt dich die Schweiz in ihrer schönsten Form erleben.",
          },
          {
            shadowSize: "80",
            img: wImg4,
            title: "Seeumrundung mit optionaler Abkühlung: Der Traunsee",
            description:
              "Perfekt für entspannte Genusswandertouren eignet sich der beliebte Traunsee in Oberösterreich!",
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
      <SlideDivider
        image={slideDividerImg}
        dark={true}
        items={[
          {
            description:
              "Mega! Der Ort ist magisch und das Team toll. Jederzeit wieder!",
            name: "Regina",
            date: "04.01.2021",
          },
          {
            description:
              "Das Essen war hausgemacht, die Yoga und Qi Gong Stunden waren wirklich etwas Besonderes und auf den 1800m Höhe kann man super abschalten, den Alltag vergessen und sich um sich selbst kümmern. Es gab viele Angebote wie Klettern, Rafting oder einen Workshoptag, deshalb ist der Preis sehr fair. Danke an Denise, Wendy & Chris für ein rundum gelunges retreat! Gerne wieder!",
            name: "Silke Roth",
            date: "21.04.2021",
          },
          {
            description:
              "Super nettes Personal, fantastisches Essen, tolle Umgebung, schöner Wellness Bereich.",
            name: "Maike Stahl",
            date: "11.11.2022",
          },
        ]}
      />
      <TagSection
        title="Noch mehr Inspiration für deinen Wanderurlaub"
        cols="xl:grid-cols-3"
        items={[
          {
            title: "Wanderurlaub nach Reiseziel",
            items: ["Deutschland", "Österreich", "Schweiz", "Italien"],
          },
          {
            title: "Beliebte Kategorien",
            items: [
              "Genuss Wandern",
              "Gruppenreisen",
              "Trekking Reisen",
              "Wander Wochenenden",
            ],
          },
          {
            title: "Ausgewählte Partner",
            items: [
              "Hauser-Exkursionen",
              "Inselzeitreisen",
              "Alpinkreativ",
              "Hotel Vier Jahreszeiten",
            ],
          },
        ]}
      />
    </div>
  );
};

export default HikingHolidays;

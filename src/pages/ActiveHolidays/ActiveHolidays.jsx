import React from "react";
// Hero
import Hero from "../../components/Hero/Hero";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
import {
  FaRunning,
  FaTree,
  FaBatteryFull,
  FaSearchLocation,
} from "react-icons/fa";
//Description
import Description from "../../components/Description/Description";
import Berge from "../../assets/activeHoliday/Tab Element Oben/Aktivurlaub-Berge.jpg";
import Meer from "../../assets/activeHoliday/Tab Element Oben/Aktivurlaub-Meer.jpg";
import Wellness from "../../assets/activeHoliday/Tab Element Oben/Aktivurlaub-Wellness.jpg";
import Alleinreisende from "../../assets/activeHoliday/Tab Element Oben/Aktivurlaub-Gruppenreisen.jpg";
import Paare from "../../assets/activeHoliday/Tab Element Oben/Aktivurlaub-Paare.jpg";
import Freund from "../../assets/activeHoliday/Tab Element Oben/Aktivurlaub-Freunde.jpg";
import Familien from "../../assets/activeHoliday/Tab Element Oben/Aktivurlaub-Familie.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/activeHoliday/Bild neben Text/Aktivurlaub-Oesterreich.jpg";
import ListAndImage2 from "../../assets/activeHoliday/Bild neben Text/Aktivurlaub-Deutschland.jpg";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/activeHoliday/Reiseziele/Aktivurlaub-Spanien.jpg";
import Col32 from "../../assets/activeHoliday/Reiseziele/Aktivurlaub-Portugal.jpg";
import Col33 from "../../assets/activeHoliday/Reiseziele/Aktivurlaub-Italien.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/activeHoliday/Divider/Aktivurlaub-Alpenueberquerung.jpg";
// ImageGalleryBrick
import ImageGalleryBrick from "../../components/ImageGalleryBrick/ImageGalleryBrick";
import image1 from "../../assets/activeHoliday/Linked Image Kategorien/Yoga-Fitness-Reisen.jpg";
import image2 from "../../assets/activeHoliday/Linked Image Kategorien/Wander-Gruppenreisen.jpg";
import image3 from "../../assets/activeHoliday/Linked Image Kategorien/Yoga-Wander-Urlaube.jpg";
import image4 from "../../assets/activeHoliday/Linked Image Kategorien/Wander-Wochenenden.jpg";
import image5 from "../../assets/activeHoliday/Linked Image Kategorien/Kampfsport-Reisen.jpg";
import image6 from "../../assets/activeHoliday/Linked Image Kategorien/Surfcamps.jpg";
import image7 from "../../assets/activeHoliday/Linked Image Kategorien/Wandern-Genuss.jpg";
import image8 from "../../assets/activeHoliday/Linked Image Kategorien/Mountainbike-Reisen.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
import slideDividerImg from "../../assets/activeHoliday/Divider/Aktivurlaub-Erfahrungen.jpg";
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

const ActiveHolidays = () => {
  return (
    <div>
      <Hero
        image="bg-hero-active-holiday"
        title="Aktivurlaub"
        description="Unvergessliche Erlebnisse in der Natur"
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <FaRunning size={56} />,
            title: "Endlich Zeit für Sport",
            description:
              "Ein guter Aktivurlaub zeichnet sich durch ein abwechslungsreiches Sportprogramm aus, welches dich zugleich fordert und fördert!",
          },
          {
            icon: <FaTree size={56} />,
            title: "Natur erleben",
            description:
              "Frische Luft und Bewegung unter dem freien Himmel sind gesund und machen deinen Urlaub zur vitalen Aktivauszeit!",
          },
          {
            icon: <FaBatteryFull size={56} />,
            title: "Nachhaltige Erholung",
            description:
              "Deine Beine wohlverdient hochzulegen und dich zu entspannen fühlt sich nach einem aktiven Tag in der Natur einfach unvergleichlich an!",
          },
          {
            icon: <FaSearchLocation size={56} />,
            title: "Lokale Tipps",
            description:
              "Unsere Trainer:innen kennen sich in der Umgebung bestens aus und versorgen dich mit wertvollen Geheimtipps!",
          },
        ]}
      />
      <Description
        titel="Finde den Aktivurlaub, der zu dir passt"
        tabItems={[
          "Berge",
          "Meer",
          "Wellness",
          "Für Alleinreisende",
          "Für Paare",
          "Für Freund:innen",
          "Familien",
        ]}
        tabCols="lg:grid-cols-7"
        tabContents={[
          {
            detailsImage: Berge,
            detailsTitle: "Die Berge rufen: Aktiv sein mit Ausblick",
            detailsDesc:
              "Nicht umsonst gelten die Berge als das absolute Paradies für Aktivreisende. Neben den unendlichen Möglichkeiten sich sportlich zu betätigen, sorgen das traumhafte Bergpanorama und zahlreiche Seen für die perfekte Abwechslung bei deinem Aktivurlaub. Dicht verwobene Wandernetze führen dich durch Wälder, Wiesen, Almen und Täler, während die erholsame Bergluft durch deine Lungen strömt.Ganz gleich ob Action, Natur oder Erholung, in den Bergen kommt jeder Outdoor-Fan auf seine Kosten! Neben den vielfältigen Angeboten wie Klettern, Canyoning, Rafting, Paragliding, Mountainbiking sind die meisten Unterkünfte außerdem mit weitläufigen Wellnessbereichen ausgestattet, die zum Entspannen einladen.",
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen in den Bergen",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Aktivurlaub im Pitztaler Sport- und Wellnesshotel",
                location: "Mandarfen, Österreich",
                calender: "01.01 - 02.05 und 26.06. - 31.12.",
                rateDesc: "",
                price: "115 €",
                priceTitle: "pro Tage",
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
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Wander- & Wellnesstraum inmitten der Tiroler Bergwelt",
                location: "Pertisau, Österreich",
                calender: "Ganzjährig",
                rateDesc: "",
                price: "117 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Outdoor- und Yoga-Retreat auf 1800 Metern",
                location: "Mayrhofen, Österreich",
                calender: "8 Termine im Jahr",
                rateDesc: "",
                price: "196 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Meer,
            detailsTitle: "Auspowern am Strand: Sommer, Sonne & Meer",
            detailsDesc:
              "Am Meer macht einfach alles mehr Spaß - besonders Sport und Bewegung werden an der Küste nicht ohne Grund großgeschrieben. Denn was gibt es besseres als nach einem aktiven Urlaubstag ins erfrischende Meer zu springen? Aktivreisen am Meer zeichnen sich meist durch ein abwechslungsreiches Sportprogramm am Strand oder in der Unterkunft aus und lassen dir genug Freiraum, um entspannt an der Promenade zu bummeln, die lokale Kultur zu entdecken oder einen faulen Strandtag einzulegen.",
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen am Meer",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Aktiv- & Wellnessurlaub im exklusiven Resort auf Kreta",
                location: "Elounda, Kreta",
                calender: "20.04. - 21.10.2021",
                rateDesc: "",
                price: "115 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Fitness- & Aktivreise im Inselparadies Sylt",
                location: "Sylt, Deutschland",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "90 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Yoga, Pilates & Surfen auf den Kanaren",
                location: "Villaverde, Fuerteventura",
                calender: "Mai - Oktober",
                rateDesc: "",
                price: "90 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Fitness Reise: Sonne, Sport und Strand",
                location: "Marbella, Spanien",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "108 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Wellness,
            detailsTitle: "Aktivreisen mit Wohlfühlfaktor und Spa-Bereich",
            detailsDesc:
              "Zwischen Arbeit und Alltagsstress bleibt nach dem Sport selten Zeit für nachhaltige Entspannung. Höchste Zeit für deinen wohlverdienten Wellnessurlaub! Nach kräftezehrenden Wanderungen oder Workouts kann eine ausgedehnte Massage wahre Wunder bewirken. Bei einer aktiven Wellness-Auszeit warten exklusive Saunabereiche, auf dein Aktivprogramm angepasste Wellnessanwendungen sowie die längst überfällige Portion Tiefenentspannung auf dich.Wann sonst hast du die Zeit, dich mal so richtig verwöhnen zu lassen?",
            detailsReadMore: "Erfahre mehr über einen Surfurlaub in Spanien",
            cardTitle: "Top-Aktivreisen mit Wellnessangebot",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Aktives Fitness Wochenende im Vital Hotel",
                location: "Winterberg, Deutschland",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "123 €",
                priceTitle: "pro Tage",
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
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Yoga-, Detox- & Wellnessauszeit im Traumresort",
                location: "Elounda, Kreta",
                calender: "20.04. - 21.10.2021",
                rateDesc: "",
                price: "197 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Wohlfühl- und Vital Auszeit im Unterallgäu",
                location: " Bad Wörishofen, Deutschland",
                calender: "06.01. - 29.11.2021",
                rateDesc: "",
                price: "87 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Alleinreisende,
            detailsTitle: "Gemeinsam an einem Strang ziehen",
            detailsDesc:
              "… und mit Gleichgesinnten seine Leidenschaft teilen - das macht eine gute Gruppenreise aus. Frei nach dem Motto “Alles kann, nichts muss” sind Gruppenreisen perfekt für Alleinreisende. Du nimmst täglich an verschiedenen Einheiten teil und bestimmst dabei selbst, ob du dich zum abendlichen Essen verabredest oder dein eigenes Ding machst. Deine Reiseleitungen achten stets darauf, die Bedürfnisse der gesamten Gruppe zu berücksichtigen und haben großen Spaß daran, ihre Leidenschaft sowie hilfreiche Geheimtipps mit dir zu teilen!",
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen in der Gruppe",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Traumhafte Aktiv-Auszeit an der Mosel",
                location: "Senheim, Deutschland",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "153 €",
                priceTitle: "pro Tage",
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
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "CrossFit- und Wander-Urlaub in St. Johann",
                location: "St. Johann, Österreich",
                calender: "29.08. - 04.09.2021",
                rateDesc: "",
                price: "144 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Plaisirklettern auf der kroatischen Halbinsel Istrien",
                location: "Istrien, Kroatien",
                calender: "5 Termine im Jahr",
                rateDesc: "",
                price: "118 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Paare,
            detailsTitle: "Zu zweit den Horizont erweitern",
            detailsDesc:
              "Ein Aktivurlaub ist der beste Weg, um unvergessliche Erlebnisse miteinander zu teilen! Testet gemeinsam neue Sportarten oder Trainingsmethoden aus, entdeckt neue Lieblingsorte und lasst es euch mal so richtig gut gehen. Eure aktive Auszeit wird euch mit Sicherheit enger zusammenschweißen und nachhaltig vitalisieren. Auf euch warten Candle-Light-Dinner, Partnermassagen, Ausflüge und eine unvergessliche Zeit - worauf wartet ihr?",
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen für Paare",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Wander- & Aktivurlaub im Wellnesshotel",
                location: "Mandarfen, Österreich",
                calender: "01.01 - 02.05 und 26.06. - 31.12.",
                rateDesc: "",
                price: "115 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Wander- & Wellness-Vergnügen am Achensee",
                location: " Pertisau, Österreich",
                calender: "02.05. - 31.10.2021",
                rateDesc: "",
                price: "116 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Aktiv- & Wellnessurlaub im exklusiven Resort auf Kreta",
                location: "Elounda, Kreta",
                calender: "20.04. - 21.10.2021",
                rateDesc: "",
                price: "115 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title:
                  "Yoga, Behmfasten und Wandern in Europas größtem Seengebiet",
                location: "Flecken Zechlin, Deutschland",
                calender: "10 Termine im Jahr",
                rateDesc: "",
                price: "150 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Freund,
            detailsTitle: "Aktiv sein mit den engsten Vertrauten",
            detailsDesc:
              "Die Welt zusammen mit den besten Freund:innen entdecken - wir können uns nichts besseres vorstellen! Gemeinsam durch ferne Landschaften wandern oder am Strand joggen, neue Sportarten oder Trainingsmethoden ausprobieren und unvergessliche Abende mit neuen Bekanntschaften verbringen: Das und mehr erwartet dich bei einer gemeinsamen Aktivreise! Also schnapp dir die Menschen, die dir wirklich wichtig sind und erlebe deinen Aktivurlaub entweder gemeinsam mit deinen besten Freunden oder Freundinnen oder lasse alte Freundschaften neu aufleben. Der Spaßfaktor ist auf jeden Fall garantiert!",
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen für Freund:innen",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Yoga, Fitness & Wandern in der Toskana",
                location: "Montegonzi, Italien",
                calender: "01.04. - 31.11.2021",
                rateDesc: "",
                price: "190 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Genusswandern und Yoga auf Usedom",
                location: "Heringsdorf, Deutschland",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "140 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Fitness & Wanderurlaub im Zillertal",
                location: "Mayrhofen, Österreich",
                calender: "03.07. - 09.07.2021",
                rateDesc: "",
                price: "111 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Trainingsparadies Mallorca: Fit werden und Spaß haben",
                location: "Pollenca, Mallorca",
                calender: "30.05. - 27.09.2021",
                rateDesc: "",
                price: "128 €",
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Familien,
            detailsTitle:
              "Aktive Familien-Auszeit: Hier kommen alle auf ihre Kosten",
            detailsDesc:
              "Wir alle wissen wie schwierig es sein kann, jedes Familienmitglied gleichermaßen zufrieden zu stellen. Ein Aktivurlaub bietet viele verschiedene Möglichkeiten, Klein und Groß glücklich zu machen und dabei mal so richtig zu entspannen! Nach einem aktiven Tag voller Bewegung fallen die Augen am Abend meist wie von selbst zu und Mama und Papa können in Ruhe ein Glas Wein genießen.  Deswegen sind Bewegung, Natur und jede Menge Vergnügen die idealen Zutaten für den perfekten Familienurlaub, bei dem die Familie zusammenwächst und alle Beteiligten ihren Alltag gemeinsam hinter sich lassen können!",
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen für Familien",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Aktiv- & Wellnessurlaub im exklusiven Resort auf Kreta",
                location: "Elounda, Kreta",
                calender: "20.04. - 21.10.2021",
                rateDesc: "",
                price: "115 €",
                priceTitle: "pro Tage",
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
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfen & Mountainbiken inmitten der Natur",
                location: "Areia Branca, Portugal",
                calender: "20.03. - 01.10.2021",
                rateDesc: "",
                price: "67 €",
                priceTitle: "pro Tage",
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
                priceTitle: "pro Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <ColorDivider
        title="Aktivurlaub buchen ohne Risiko!"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100 % Rückerstattung"
        buttonTitle="Mehr erfahren"
      />
      <ListAndImage
        mainTitle="Die besten Reiseziele für deinen Aktivurlaub"
        image={ListAndImage1}
        title="Österreich: Das Aktiv-Paradies"
        description="Berge, Täler und Seen soweit das Auge reicht: Actiongeladene Flüsse und Wasserfälle und eine unglaubliche Vielfalt an Wander- und Radwegen machen Österreich zur optimalen Spielwiese für Outdoor-Fans!
        Nirgendwo anders macht das gemeinsame Ausloten der eigenen Grenzen so viel Spaß wie in den Alpen. Aufgrund der einzigartigen Natur ist das Aktivangebot in Österreich so vielfältig wie nirgendwo anders - und darüber hinaus ganz einfach mit dem Auto zu erreichen."
        readMore="Entdecke Aktivreisen in Österreich"
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage2}
        title="Deutschland: Die Qual der Wahl"
        description="Unser Heimatland hat mehr zu bieten, als die meisten vermuten! Von den unendlichen Weiten der rauen Nordseestrände über die einzigartigen Wanderwege der Eifel oder der Sächsischen Schweiz bis hin zu der Idyllik des Schwarzwaldes und den Alpen: In Deutschland bestimmst du selbst, wie dein Aktivurlaub aussieht.
        Egal ob Fitness oder Fahrrad, Strandurlaub oder Wintersport - das nächste Abenteuer wartet bereits vor deiner eigenen Haustür!"
        readMore="Entdecke Aktivreisen in Deutschland"
      />
      <SingleColImg
        title="Welches Surflevel passt zu dir?"
        description="Ganz gleich ob du noch nie auf einem Surfbrett standest oder bereits grüne Wellen surfst, mit unserer handverlesenen Auswahl findest du das passende Surfcamp für dein Surflevel!"
        items={[
          {
            img: Col31,
            title: "Spanien",
          },
          {
            img: Col32,
            title: "Portugal",
          },
          {
            img: Col33,
            title: "Italien",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        image={Besonderheiten}
        align="left"
        title="Die ultimative Herausforderung"
        description="Bist du bereit für die Königsdisziplin? Dann schließe dich jetzt einer unserer Alpentraversalen an und lote deine Grenzen aus!"
        buttonTitle="Zu den besten Alpenüberquerungen"
      />
      <ImageGalleryBrick
        reverse={true}
        title="Beliebte Kategorien für deinen Aktivurlaub"
        description="Es gibt so viele Möglichkeiten aktiv zu sein - lass dich inspirieren!"
        image1={{ img: image1, title: "Fitness & Yoga Reisen" }}
        image2={{ img: image2, title: "Wander Gruppenreisen" }}
        image3={{ img: image3, title: "Wander & Yoga Reisen" }}
        image4={{ img: image4, title: "Wander Wochenenden" }}
        image5={{ img: image5, title: "Kampfsport Reisen" }}
        image6={{ img: image6, title: "Surfcamps" }}
        image7={{ img: image7, title: "Genuss Wander Urlaube" }}
        image8={{ img: image8, title: "Mountainbike Reisen" }}
      />
      <SingleCardSection
        title="Ausgewählte Aktivurlaube"
        description="Entdecke ausgewählte Reisen mit vielfältigem Sportprogramm und passionierten Trainer:innen. Du hast die Wahl zwischen klassischen Fitnessangeboten und spezifischen Wanderreisen, Yoga Retreats und vielen anderen Sportarten!"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <SlideDivider
        image={slideDividerImg}
        dark={true}
        items={[
          {
            description:
              "Das Essen war hausgemacht, die Yoga und Qi Gong Stunden waren wirklich etwas Besonderes und auf den 1800m Höhe kann man super abschalten, den Alltag vergessen und sich um sich selbst kümmern. Es gab viele Angebote wie Klettern, Rafting oder einen Workshoptag, deshalb ist der Preis sehr fair. Danke an Denise, Wendy & Chris für ein rundum gelungenes Retreat!",
            name: "Silke Roth",
            date: "21.01.2022",
          },
          {
            description:
              "Super nettes Personal, fantastisches Essen, tolle Umgebung, schöner Wellness Bereich.",
            name: "Maike Stahl",
            date: "21.04.2022",
          },
          {
            description:
              "Eine unvergessliche Woche liegt hinter mir! Sie war nicht nur entspannend sondern auch inspirierend. Das gesamte Team war sehr freundlich und kompetent, die Massage war genau das richtige um die beanspruchten Muskeln zu lockern und das Essen mit so viel Liebe und Freude zubereitet, das man es tatsächlich schmecken konnte!",
            name: "Tina",
            date: "11.11.2022",
          },
        ]}
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
        cardDesc="Wir stehen dir zu jedem Zeitpunkt deiner Reise persönlich zur Seite - kontaktiere uns einfach:"
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
        title="Noch mehr Inspiration für deinen Aktivurlaub"
        cols="xl:grid-cols-4"
        items={[
          {
            title: "Aktivurlaub nach Region",
            items: [
              "Deutschland",
              "Österreich",
              "Spanien",
              "Portugal",
              "Griechenland",
              "Italien",
            ],
          },
          {
            title: "Beliebte Kategorien",
            items: [
              "Genuss Wander Urlaube",
              "Fitness & Yoga Reisen",
              "Wander Wochenenden",
              "Wander Gruppenreisen",
              "Surfcamps",
              "Surfcamps",
              "Yoga & Wander Urlaube",
              "Kampfsport Reisen",
            ],
          },
          {
            title: "Ausgewählte Aktivhotels",
            items: [
              "Hotel Vier Jahreszeiten",
              "Das Rübezahl",
              "Verwöhnhotel Kristall",
              "Hotel Edelweiss",
              "Porto Elounda",
              "FeelViana",
            ],
          },
          {
            title: "Reisemagazin",
            items: [
              "Wandern für Anfänger",
              "12 Sportreisen für 2021",
              "Bootcamp Urlaube",
              "8 Faszien Training Übungen",
              "Frauenboxen",
              "Lohnt sich ein Personal Trainer?",
              "HIIT Training",
              "Faszination Mud-Run",
            ],
          },
        ]}
      />
    </div>
  );
};

export default ActiveHolidays;

import React from "react";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//Description
import Description from "../../components/Description/Description";
import Kantabrien from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Kantabrien-Spanien.jpg";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Alleinreisende.jpg";
import image2 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Gruppen-Freunde.jpg";
import image3 from "../../assets/spanien/Zielgruppe/Familien-Surfurlaub-Spanien.jpg";
import image4 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Paare.jpg";
import image5 from "../../assets/spanien/Zielgruppe/Junior-Surfcamps-Spanien.jpg";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/spanien/Vorteile-Divider/Surfcamps-Spanien-Besonderheiten.jpg";
import ListAndImage2 from "../../assets/spanien/Unterkungt-RL/Surfcamps-Spanien_Surfhaeuser-Lodges.jpg";
import ListAndImage3 from "../../assets/spanien/Unterkungt-RL/Surfcamps-Spanien_Campingplatz.jpg";
import ListAndImage4 from "../../assets/spanien/Unterkungt-RL/Surfurlaub-Spanien_private-apartments.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//ThreeColImg
import ThreeColImg from "../../components/ThreeColImg/ThreeColImg";
import Col31 from "../../assets/spanien/Vorkenntnisse/Surfcamps-Spanien-Anfaenger.jpg";
import Col32 from "../../assets/spanien/Vorkenntnisse/Surfcamps-Spanien-Intermediates.jpg";
import Col33 from "../../assets/spanien/Vorkenntnisse/Surfari-Surf-Guiding-Spanien.jpg";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery1 from "../../assets/spanien/Kategorien-6er/Surfcamps-Spanien-Natur.jpg";
import imgGallery2 from "../../assets/spanien/Kategorien-6er/Nachhaltiges-Surfcamp-Spanien.jpg";
import imgGallery3 from "../../assets/spanien/Kategorien-6er/Low-Budget_Surfcamps-Spanien.jpg";
import imgGallery4 from "../../assets/spanien/Kategorien-6er/Surfcamps-Spanien_flexible-Stornierung.jpg";
import imgGallery5 from "../../assets/spanien/Kategorien-6er/Surf-Skate-Camp-Spanien.jpg";
import imgGallery6 from "../../assets/spanien/Kategorien-6er/Surf-Yoga-Camps-Spanien.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/spanien/Kunden-Divider/surfcamp-spanin-bewertung.png";
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

const SurfcampSpanien = () => {
  return (
    <div>
      <Hero
        image="bg-hero-spanien"
        title="Surfcamps in Spanien"
        description="Erlebe‌ ‌Sonne,‌ ‌Wellen‌ ‌&‌ ‌spanische‌ ‌Lebensfreude"
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
        titel="Die schönsten Surforte in Spanien"
        tabItems={[
          "Kantabrien",
          "Baskenland",
          "Andalusien",
          "Fuerteventura",
          "Teneriffa",
          "Gran Canaria",
        ]}
        tabCols="lg:grid-cols-6"
        detailsImage={Kantabrien}
        detailsTitle="Kantabrien"
        detailsDesc="Die Region Kantabrien im Norden Spaniens erwartet dich mit einer einzigartigen Landschaft voll von grünen Hügeln mit glücklichen Milchkühen und Bergen im Hintergrund. Gepaart mit einer Vielzahl an schönen Buchten und Wellen für jedes Surflevel ist Kantabrien die perfekte Wahl für einen Surfurlaub in der Natur!
        Anders als andere Regionen in Spanien ist Kantabrien vom Massentourismus verschont geblieben. Die Auswahl für deinen Surfurlaub entlang der Atlantikküste ist dabei groß: Sei es der kilometerlange Sandstrand von Loredo bis Somo, das kleine Fischerdorf Suances oder der Naturpark Oyambre mit seinen tollen Buchten und Steilklippen."
        detailsReadMore="Zu den Details"
        cardTitle="Top-Surfcamps in Kantabrien"
        cardItems={[1, 2, 3, 4]}
        cardCols="lg:grid-cols-4"
      />
      <ImageGalleryFivePic
        title="Finde das Surfcamp, das zu dir passt!"
        description="Die Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die pDie Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die passende Atmosphäre! Mit der richtigen Stimmung um dich herum fühlst du dich sofort wohl, triffst ganz natürlich auf Gleichgesinnte und kannst deinen Urlaub in vollen Zügen genießen."
        image1={{ img: image1, title: "Surfcamps für Alleinreisende" }}
        image2={{ img: image2, title: "Surfcamps für Freund:innen" }}
        image3={{ img: image3, title: "Surfurlaub für Familien" }}
        image4={{ img: image4, title: "Surf-Reisen für Paare" }}
        image5={{ img: image5, title: "Junior Surfcamps für unter 18 Jährige" }}
      />
      <ListAndImage
        image={ListAndImage1}
        title="Ein Surfcamp in Spanien passt zu dir, wenn du…"
        items={[
          "...vielfältige und wunderschöne Strände und Landschaften entdecken willst",
          "...den nie endenden Sommer in Andalusien und den Kanaren genießen willst",
          "...garantiert alles um dich herum vergessen und auf andere Gedanken kommen willst",
          "...spanische Gelassenheit und ein einzigartiges Lebensgefühl erleben willst",
        ]}
      />
      <ListAndImage
        mainTitle="Entdecke die Traumunterkunft für deinen Surfurlaub"
        mainDescription="Entdecke die Traumunterkunft für deinen Surfurlaub"
        image={ListAndImage2}
        title="Surfhäuser & Lodges"
        description="Unsere handverlesenen Surfhäuser & Lodges in Spanien sind individuell gestaltet und mit viel Liebe zum Detail eingerichtet. Mit einer begrenzten Anzahl an Zimmern bleibt die Atmosphäre immer persönlich und du triffst schnell auf Gleichgesinnte. Die großen Outdoor Bereiche laden zum Entspannen in der Sonne und gemeinsamen Stunden am Abend ein. Die perfekte Mischung aus Komfort und Spaß unter Gleichgesinnten!"
        readMore="Entdecke Surfhäuser & Lodges in Spanien"
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage3}
        title="Surfcamps auf Campingplätzen"
        description="Insbesondere der Norden Spaniens mit seiner vielfältigen Natur und den traumhaften Landschaften bietet sich für einen Campingurlaub an: Du tauchst sofort mit deiner Ankunft in eine eigene Welt ab, beobachtest abends beim Lagerfeuer die Sterne und läufst morgens barfuß mit deinem Surfbrett zum Strand. Kurz gesagt: Ein Low Budget Surfurlaub inmitten der Natur, den du nie wieder vergessen wirst!"
        readMore="Zu allen Surfcamps auf Campingplätzen"
      />
      <ListAndImage
        image={ListAndImage4}
        title="Surfurlaub in privaten Apartments"
        description="Sehnst du dich nach Quality-Time mit deinen Liebsten? Bei einem Surfurlaub in privaten Apartments erwartet euch gemeinsamer Spaß in den Wellen und ganz viel Zeit, die ihr individuell nach euren Wünschen gestalten könnt: Seien es Ausflüge in die Region, entspannte Stunden am Strand oder ein Restaurantbesuch am Abend - euer Alltag ist schnell vergessen und die Welt steht euch offen!"
        readMore="Zu allen Surfurlauben in privaten Apartments"
      />
      <SingleCardSection
        title="Die beliebtesten Surfcamps in Spanien"
        description="Von Nordspanien über Andalusien bis hin zu den Kanarischen Inseln - entdecke die am besten bewerteten Surfcamps in Spanien."
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <ColorDivider
        title="Urlaub buchen ohne Risiko"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100% Rückerstattung!"
        buttonTitle="Mehr erfahren"
      />
      <ThreeColImg
        title="Passende Surfcamps für dein Surflevel"
        description="Jeder kann Surfen lernen! Finde mit unserer Auswahl ganz einfach das passende Surfcamp für dein Surflevel."
        items={[
          {
            img: Col31,
            title: "Surfcamps für Anfänger:innen",
            description:
              "Surfe die ersten Wellen deines Lebens und erlebe ein unbeschreibliches Gefühl!",
          },
          {
            img: Col32,
            title: "Surfcamps für Fortgeschrittene",
            description:
              "Hast du deine ersten Surfkurse bereits hinter dir? Dann erreiche jetzt das nächste Level!",
          },
          {
            img: Col33,
            title: "Surfaris für Profis",
            description:
              "Lass dich von lokalen Guides zu den besten Spots bringen und finde deine perfekte Welle!",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ImageGallery3
        title="Ausgewählte Kategorien für deinen Surfurlaub"
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: "Surfcamps in der Natur",
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: "Ökologisches Surfcamp",
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: "Low Budget Surfcamps",
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: "Reisen mit 100% Rückerstattung",
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: "Surf & Skate Camp",
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: "Surf & Yoga Camps",
          },
        ]}
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
        title="Das sagen Reisende über ihren Surfurlaub in Spanien"
        items={[
          {
            rateName: "Chloe",
            rateDesc: "Kleine Gruppe, gutes Essen, schöne Aussicht!",
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote:
              "Surfcamp in Nordspanien: Surfen im Naturpark Oyambre bewertet von",
          },
          {
            rateName: "Yves",
            rateDesc: "Einer der besten Urlaube die ich erleben durfte",
            rateImage: RateImg,
            rateCalendar: "08.12.2021",
            rateFootNote:
              "Surfcamp in Corralejo: Chillen, Surfen & neue Leute bewertet von",
          },
          {
            rateName: "Fabi",
            rateDesc:
              "Sehr sauber, tolle Atmosphäre, super Lage direkt am Strand, mega Blick aufs Meer von der Dachterasse und nette Gäste :)",
            rateImage: RateImg,
            rateCalendar: "22.08.2021",
            rateFootNote:
              "Modernes Surfhaus direkt am Strand von Las Palmas bewertet von",
          },
          {
            rateName: "Christina",
            rateDesc:
              "War ein tolles Erlebnis, und ich durfte sehr viele tolle Menschen kennenlernen!!",
            rateImage: RateImg,
            rateCalendar: "06.12.2021",
            rateFootNote:
              "Surfcamp in Corralejo: Chillen, Surfen & neue Leute bewertet von",
          },
          {
            rateName: "Ella",
            rateDesc:
              "Ich habe ein super Sommer Urlaub mit Volcano surfcamp gemacht! Unser Surftrainer Umberto ist einfach die besten! Die Unterkunft ist auch mega schön, man kann so einfach andere coole Leuten aus der Welt kennenlernen und jeden Tag etwas zusammen unternehmen. I‘ll come back there again for sure :D",
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote:
              "Gemeinschaftliches Surfhaus im Süden Teneriffas bewertet von",
          },
          {
            rateName: "Alexander",
            rateDesc:
              "Perfect waves for Beginner / Intermediates and a nice Hostel as well as a nice Service from moverii. Just pay attention: there are two (or three) latas hostels and we did not stay in the main one so we always had to walk there (15min). However, it has still been very good but I would recommend to stay in the main Hostel.",
            rateImage: RateImg,
            rateCalendar: "17.08.2021",
            rateFootNote:
              "Surfhaus in Kantabrien: Ruhe, Natur & perfekte Wellen bewertet von",
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
              "Surfcamps in Portugal",
              "Surfcamps auf Fuerteventura",
              "Surfcamps in Frankreich",
              "Surfcamps auf Teneriffa",
            ],
          },
          {
            title: "Beliebte Kategorien",
            items: [
              "Surfcamps für Alleinreisende",
              "Surfcamps in der Natur",
              "Surfcamps für Freund:innen",
              "Surf & Yoga Reisen",
            ],
          },
          {
            title: "Unser Reisemagazin",
            items: [
              "Surfen auf den Kanaren",
              "Gemeinsam für den Meeresschutz",
              "Reisebericht: Surf & Yoga Camp in Portugal",
              "Reisebericht: Mein erstes Surfcamp",
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampSpanien;

import React from "react";
// Hero
import Hero from "../../components/Hero/Hero";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
import {
  FaBalanceScale,
  FaPrayingHands,
  FaSpa,
  FaMapSigns,
} from "react-icons/fa";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/yogaRetreats/Angebote/Yoga-Retreat-Yin-Yoga-Portugal.jpg";
import ListAndImage2 from "../../assets/yogaRetreats/Angebote/Yoga-Retreat-Gran-Canaria-Vegan.jpg";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Deutschland.jpg";
import Col32 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Oesterreich.jpg";
import Col33 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Portugal.jpg";
import Col34 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Mallorca.jpg";
import Col35 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Indien.jpg";
import Col36 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Sri Lanka.jpg";
import Col37 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Bali.jpg";
import Col38 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Thailand.jpg";
import Col39 from "../../assets/yogaRetreats/Erfahrung/Yoga-Retreats-Fortgeschrittene.jpg";
import Col40 from "../../assets/yogaRetreats/Erfahrung/Yoga-Retreats-Anfänger.jpg";
import Col41 from "../../assets/yogaRetreats/Erfahrung/Yoga-Retreats-Profis.jpg";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/yogaRetreats/Retreat Arten/Yoga-Retreats-Ayurveda.jpg";
import image2 from "../../assets/yogaRetreats/Retreat Arten/Yoga-Therapie-Reisen.jpg";
import image3 from "../../assets/yogaRetreats/Retreat Arten/Yoga-Mediations-Retreats.jpg";
import image4 from "../../assets/yogaRetreats/Retreat Arten/Spirituelle-Yoga-Retreats.jpg";
import image5 from "../../assets/yogaRetreats/Retreat Arten/Stille-Retreats.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Suchst from "../../assets/yogaRetreats/Divider/Yoga-Wochenenden.jpg";
import welt from "../../assets/yogaRetreats/Divider/yoga-retreats-weltweit.jpg";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery1 from "../../assets/yogaRetreats/Kategorien/Yoga-Retreats-Wellness.jpg";
import imgGallery2 from "../../assets/yogaRetreats/Kategorien/Luxus-Yoga-Retreats.jpg";
import imgGallery3 from "../../assets/yogaRetreats/Kategorien/Yoga-Safaris.jpg";
import imgGallery4 from "../../assets/yogaRetreats/Kategorien/Yoga-Retreats-Frauen.jpg";
import imgGallery5 from "../../assets/yogaRetreats/Kategorien/Yoga-Retreats-Flexible-Stornierungsbedingungen.jpg";
import imgGallery6 from "../../assets/yogaRetreats/Kategorien/Budget-Yoga-Camps.jpg";
//HorizontalCardSection
import HorizontalCardSection from "../../components/horizontalCardSection/horizontalCardSection";
import hImg1 from "../../assets/yogaRetreats/Lehrerinnen/Yoga-Lehrerin-Yogakasha.jpg";
import hImg2 from "../../assets/yogaRetreats/Lehrerinnen/yogalehrerin-yogaion-retreats.jpg";
import hImg3 from "../../assets/yogaRetreats/Lehrerinnen/Yoga-Lehrerin-YoooYoga.jpg";
import hImg4 from "../../assets/yogaRetreats/Lehrerinnen/Yoga-Lehrerin-Casa-Vegana.jpg";
//Description
import Description from "../../components/Description/Description";
import Moliets from "../../assets/yogaRetreats/Yoga Arten/Hatha-Yoga.jpg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
import wImg1 from "../../assets/yogaRetreats/Kombis/Yoga-Wandern.jpg";
import wImg2 from "../../assets/yogaRetreats/Kombis/Yoga-Pilates.jpg";
import wImg3 from "../../assets/yogaRetreats/Kombis/Yoga-Fitness.jpg";
import wImg4 from "../../assets/yogaRetreats/Kombis/Yoga-Surfen.jpg";
//ImageGalleryBrick2
import ImageGalleryBrick2 from "../../components/ImageGalleryBrick2/ImageGalleryBrick2";
import image6 from "../../assets/yogaRetreats/Nachhatltige Retreats/Yoga-Retreat-Balitrees.jpg";
import image7 from "../../assets/yogaRetreats/Nachhatltige Retreats/Yoga-Retreat-Yogaion.jpg";
import image8 from "../../assets/yogaRetreats/Nachhatltige Retreats/Yoga-Retreat-Fastenhof-Behm.jpg";
import image9 from "../../assets/yogaRetreats/Nachhatltige Retreats/Yoga-Retreat-Casa-Vegana.jpg";
import image10 from "../../assets/yogaRetreats/Nachhatltige Retreats/Yoga-Retreat-Goodtimes.jpg";
import image11 from "../../assets/yogaRetreats/Nachhatltige Retreats/Yoga-Retreat-Bali-Floating-Leaf.jpg";
import image12 from "../../assets/yogaRetreats/Nachhatltige Retreats/yoga-retreat-hinterland-village.jpg";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
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

const YogaRetreats = () => {
  return (
    <div>
      <Hero
        image="bg-hero-yoga-retreats"
        title="Yoga Retreats"
        description="Einklang und Harmonie für Körper, Geist und Seele"
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <FaBalanceScale size={56} />,
            title: "Ganzheitliches Erlebnis",
            description:
              "Stärke dein inneres Gleichgewicht mit einem Wohlfühlprogramm aus ausgewogener Verpflegung, Naturverbundenheit und angeleiteten Yoga-Einheiten.",
          },
          {
            icon: <FaPrayingHands size={56} />,
            title: "Liebe für Yoga",
            description:
              "Die inspirierende Umgebung erlaubt es dir, dich voll und ganz auf deine Asanas, Pranayamas sowie deine Ernährung und das Meditieren zu fokussieren und große Fortschritte in deiner Yogapraxis zu erlangen.",
          },
          {
            icon: <FaSpa size={56} />,
            title: "Zeit für dich",
            description:
              "Auf der Suche nach seelischem und körperlichem Wohlbefinden sowie neuer Lebensenergie wirst du nach einem Yoga Retreat erfüllt sein und neue Motivation und Kraft mit nach Hause nehmen.",
          },
          {
            icon: <FaMapSigns size={56} />,
            title: "Raum für neue Erfahrungen",
            description:
              "Die entschleunigende Lebensphilosophie eines Yoga Retreats gibt dir neue Impulse und Antworten und spendet dir wichtige Inspiration für deinen Lebensalltag.",
          },
        ]}
      />
      <ListAndImage
        mainTitle="Entdecke die besten Reiseziele für dein Yoga Retreat"
        mainDescription="Die Umgebung spielt eine zentrale Rolle für die Atmosphäre und die Yogapraxis bei deinem Retreat. Wohin soll deine Reise gehen? Eine Welt voller Inspiration und unvergesslichen Erlebnissen wartet auf dich!"
        image={ListAndImage1}
        title="Yoga Retreats in Europa"
        description="Yoga Retreats in Europa stecken voller Vielfalt und neuer Erfahrungen. Von Retreats am Meer, bis hin zu atemberaubenden Berglandschaften und wohltuenden Wäldern, von angemieteten Seminarhäusern, bis hin zu luxuriösen Hotelaufenthalten: Hier sind deiner Yoga-Erfahrung keinerlei Grenzen gesetzt!
        Gönn dir eine Auszeit und entdecke dich neu bei einem Yoga Retreat in Europa."
      />
      <SingleColImg
        items={[
          {
            img: Col31,
            title: "Deutschland",
          },
          {
            img: Col32,
            title: "Österreich",
          },
          {
            img: Col33,
            title: "Portugal",
          },
          {
            img: Col34,
            title: "Mallorca",
          },
        ]}
        cols="md:grid-cols-4"
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage2}
        title="Yoga Retreats in Asien"
        description="Reise zum Ursprung des Yoga! Nicht nur traditionelle indische Ashrams, sondern auch Länder wie Indonesien oder Thailand pflegen eine langjährige Yoga-Tradition und bieten dir einzigartige Rückzugsorte mitten im Dschungel, direkt am Strand oder in ursprünglichen Dörfern.
        Lass deinen Alltagsstress hinter dir und tauche gemeinsam mit anderen Yogis und Yoginis ein in die lokale Kultur und die paradiesische Natur Asiens!"
      />
      <SingleColImg
        items={[
          {
            img: Col35,
            title: "Indien",
          },
          {
            img: Col36,
            title: "Sri Lanka",
          },
          {
            img: Col37,
            title: "Bali",
          },
          {
            img: Col38,
            title: "Thailand",
          },
        ]}
        cols="md:grid-cols-4"
      />
      <ColorDivider
        title="Yoga Retreats buchen ohne Risiko"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100 % Rückerstattung!"
        buttonTitle="Mehr erfahren"
      />
      <ImageGalleryFivePic
        title="Was für ein Yoga Retreat wünschst du dir?"
        reverse={true}
        image1={{
          img: image1,
          title: "Ayurveda Retreats",
          description:
            "Lerne die ayurvedische Lehre gezielt einzusetzen und von ihrer energiespendenden Heilsamkeit zu profitieren",
        }}
        image2={{
          img: image2,
          title: "Yoga-Therapie Reisen",
          description:
            "Spüre die heilende Wirkung der Kombination aus Yoga, Meditation und gezielten Wellnessanwendungen",
        }}
        image5={{
          img: image5,
          title: "Stille Retreats",
          description:
            "Erkunde dein tiefstes Inneres beim kollektiven Schweigen",
        }}
        image3={{
          img: image3,
          title: "Yoga & Meditations Retreats",
          description:
            "Erlebe den perfekten Mix aus geistiger Ruhe und körperlicher Aktivität",
        }}
        image4={{
          img: image4,
          title: "Spirituelle Retreats",
          description:
            "Erfahre die Kraft der Spiritualität, die dich mit dir und der Umwelt verbindet",
        }}
      />
      <SingleCardSection
        title="Ausgewählte Yoga Retreats"
        items={[1, 2, 3, 4]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        image={Suchst}
        align="left"
        title="Suchst du nach einer kurzen Auszeit vom Alltag?"
        description="Ein Yoga Wochenende bietet die perfekte Gelegenheit, seinen Geist von Ängsten, Sorgen und Stress zu befreien und seinem Körper eine Auszeit von toxischen Alltagsroutinen zu schenken. So kannst du dich intensiv erholen und deine innere Balance wiederherstellen!"
        buttonTitle="Zu allen Yoga Wochenenden"
      />
      <ImageGallery3
        title="Ausgewählte Kategorien für dein Yoga Retreat"
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: "Yoga & Wellness Reisen",
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: "Luxus Yoga Reisen",
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: "Yoga Safari",
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: "Yoga Retreats nur für Frauen",
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: "Flexible Stornierung",
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: "Budget Yoga Camps",
          },
        ]}
      />
      <HorizontalCardSection
        title="Yogalehrer:innen im Fokus"
        description="Lerne die Persönlichkeiten hinter den Retreats kennen und lass dich von ihrer jahrelangen Erfahrung, ihrer Lebensfreude sowie ihrer Leidenschaft für Yoga inspirieren."
        items={[
          {
            image: hImg1,

            description:
              "Ein Retreat bedeutet für mich, sich Zeit zu nehmen, den Alltagstrott einige Momente hinter sich zu lassen und sich nach innen zu kehren um somit wieder Energie für all unsere Aufgaben zu schöpfen",
            name: "Tammy Assanoff",
            details: "Yogalehrerin aus Köln",
          },
          {
            image: hImg2,
            description:
              "Bei unseren Retreats teilen wir einen natürlichen Lebensstil mit lokaler Verpflegung und erneuerbaren Energien sowie kleinen Gruppen statt Massentourismus.",
            name: "Shaini Verdon",
            details: "Iyengar Yogalehrerin in Portugal",
          },
          {
            image: hImg3,
            description:
              "Meine Miniretreats sollen zeigen, dass es nicht viel Zeit braucht um durchzuatmen und Impulse zu geben für mehr Gelassenheit und Frieden mit sich und der Welt.",
            name: "Leander Graf",
            details: "Yogalehrer aus Berlin",
          },
          {
            image: hImg4,
            description:
              "Ich stecke all meine Liebe und Leidenschaft in inspirierende und transformierende Yoga- und Meditationsurlaube an außergewöhnlichen Orten.",
            name: "Chiara Bürkle",
            details: "Yogalehrerin auf Gran Canaria",
          },
        ]}
      />
      <Description
        titel="Yoga Retreats nach Yoga-Arten"
        tabItems={[
          "Hatha Yoga",
          "Yin Yoga",
          "Iyengar Yoga",
          "Vinyasa Yoga",
          "Aerial Yoga",
        ]}
        tabCols="lg:grid-cols-5"
        detailsImage={Moliets}
        detailsTitle="Die Klassische Variante für Yoga-Neulinge"
        detailsDesc="“Hatha” setzt sich aus den Wörtern “Ha” (Sonne) und “Tha” (Mond) zusammen. Während die Sonne für Hitze und Männlichkeit steht, assoziiert man den Mond mit der Rationalität und der Weiblichkeit. Ziel des Hatha Yogas ist es, ein Gleichgewicht zwischen diesen beiden Gegenpolen herzustellen und dem Körper so die nötige Energie für Meditationsübungen bereitzustellen.
        Beim Hatha Yoga werden die Asanas (Körperstellungen)  sehr bewusst ausgeführt. Dabei bleibt das Verhältnis von Entspannung und Muskelbelastung ausgeglichen, um dein Gleichgewicht, deine Stabilität und deine Kraft gleichermaßen zu fordern und zu fördern. Die meisten in der westlichen Welt verbreiteten Yoga-Arten basieren auf dem Hatha Yoga. Seine ausgewogene Kombination aus Ruhe und Anstrengung macht diesen Stil außerdem ideal, um einen ersten Zugang zum Yoga zu finden."
        cardTitle="Ausgewählte Hatha Yoga Retreats"
        cardItems={[1, 2, 3, 4]}
        cardCols="lg:grid-cols-4"
      />
      <ImageGalleryWindow
        title="Kombiniere deine Yogapraxis mit anderen Sportarten"
        items={[
          {
            shadowSize: "80",
            img: wImg1,
            title: "Yoga & Wandern",
            description:
              "Genieße ganzheitliche Wanderungen in der Natur gespickt mit Meditationen und Atemübungen.",
          },
          {
            shadowSize: "80",
            img: wImg2,
            title: "Yoga & Pilates",
            description:
              "Stärke deinen Rücken und deine innere Mitte mit dieser faszinierenden Mischung aus Workout und Erdung.",
          },
          {
            shadowSize: "80",
            img: wImg3,
            title: "Yoga & Fitness",
            description:
              "Wenn dir der sportliche Aspekt beim Yoga zu kurz kommt, dann kombiniere Yoga mit Fitness um dich voll auszulasten!",
          },
          {
            shadowSize: "80",
            img: wImg4,
            title: "Yoga & Surfen",
            description:
              "Zwei Sportarten, die Hand in Hand gehen und nur voneinander profitieren: Erlebe den ultimativen Spaßfaktor!",
          },
        ]}
      />
      <SingleColImg
        title="Yoga Retreats nach Erfahrungslevel"
        items={[
          {
            img: Col39,
            title: "Anfänger:innen",
            description:
              "Probiere dich aus und lerne die heilsame Welt des Yoga kennen",
          },
          {
            img: Col40,
            title: "Fortgeschrittene",
            description:
              "Sammle neue Erfahrungen und Einflüsse für deine Yogapraxis",
          },
          {
            img: Col41,
            title: "Profi",
            description:
              "Erweitere deinen Horizont mit fordernden Techniken und Ansätzen",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ColorDivider
        title="Welches Yoga Retreat passt zu dir?"
        description="Lass dich von unseren Experten beraten und finde deinen Traumretreat!"
        buttonTitle="Kontakt aufnehmen"
      />
      <ImageGalleryBrick2
        title="Nachhaltige Yoga Retreats"
        image1={{
          img: image6,
          title: "Lokaler Ökotourismus",
          description:
            "Erlebe die Bedeutung von Gemeinschaft und lokaler Tradition in Balis ältestem Ashram",
        }}
        image2={{
          img: image7,
          title: "Nachhaltig konzipierte Quinta",
          description:
            "Lass dich komplett von hauseigenen Ressourcen versorgen - inmitten einem der schönsten Nationalparks Portugals",
        }}
        image3={{
          img: image8,
          title: "Ökologisch gestaltete Entgiftungskur",
          description:
            "Resette Körper & Geist auf einem restaurierten Biohof in Norddeutschland",
        }}
        image4={{
          img: image9,
          title: "Kreative vegane Gerichte",
          description:
            "Genieße ausschließlich vegane Speisen in diesem Yogahaus auf Gran Canaria",
        }}
        image5={{
          img: image10,
          title: "Surf- und Yogacamp mit Upcycling-Konzept",
          description:
            "Entspanne auf recycleten selbstgebauten Möbeln mit Stil an Portugals Küste",
        }}
        image6={{
          img: image11,
          title: "Biologisch nachhaltig erbautes Retreat Center",
          description:
            "Verreise mit gutem Gewissen und voll Faszination in eine luxuriöse Unterkunft aus komplett ökologischen Baumaterialen",
        }}
        image7={{
          img: image12,
          title: "Spirituelles Öko-Retreat",
          description:
            "Erlebe Indien hautnah auf reichhaltigem Gemeinschaftsboden, der mit viel Wert auf Biodiversität und Ayurveda neu angesiedelt wurde",
        }}
      />
      <DividerImg
        image={welt}
        align="center"
        title="Entdecke alle Yoga Retreats"
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
      <RateCardSection
        title="Das sagen Reisende über ihren Surfurlaub in Frankreich"
        items={[
          {
            rateName: " Julia Gitzler",
            rateDesc:
              "Perfekt um dem tristen Alltag zu entkommen: Im Boa Onda Guesthouse herrscht eine sehr angenehme, familiäre Atmosphäre.Das Haus und die Zimmer waren sehr sauber. Die Yogaeinheiten auf dem Sonnendeck und im Studio waren perfekt um entspannt in den Tag zu starten oder diesen ausklingen zu lassen. Das Frühstück war immer lecker und dabei sehr gesund und zudem abwechslungsreich.Besonders hervorzuheben ist das Team, das sich sehr aufmerksam um die Gäste kümmert und hilfreiche Tipps für alle hat, die die Gegend erkunden wollen. Von daher ganz klar eine Empfehlung!",
            rateImage: RateImg,
            rateCalendar: "30.04.2021",
            rateFootNote:
              "Yoga Urlaub inmitten von Traumstränden & ruhiger Natur bewertet von",
          },
          {
            rateName: "Michaela",
            rateDesc:
              "Ich habe mich sehr wohl gefühlt im Casa Vegana. Chiara ist eine sehr gute yoga Lehrerin und eine immer gut gelaunte tolle Gastgeberin. Thomas ist ein Meister in seiner Küche, in der er fürs Frühstück selbst gebackenen veganen Semmeln mit vielen anderen veganen Leckereien und abends sehr abwechslungsreiche, super leckeren veganen Speisen zaubert. Die zwei sind tolle Gastgeber und immer am schauen dass sich die Gäste wohl fühlen. Lisel ihr Hund ist ruhig und verschmust und trägt zu der guten Laune im Casa Vegana bei!Auch die Ausflüge mit den beiden waren toll! Ich hab mich rund um wohl gefühlt. Gefühlt bin ich als Gast gekommen und als Freund gegangen. Vielen Dank für alles 🙏",
            rateImage: RateImg,
            rateCalendar: "01.02.2021",
            rateFootNote:
              "Veganes Yoga Retreat: Achtsamkeit auf Gran Canaria bewertet von",
          },
          {
            rateName: "Uwe Poppitz,",
            rateDesc:
              "Traumhaftes Hotel in den Alpen und ein sehr persönlicher Yogakurs. Freundliche, zuvorkommende Athmosphäre mit phantastischem Essen und Wohlgefühl an jeder Ecke.",
            rateImage: RateImg,
            rateCalendar: "12.10.2020",
            rateFootNote:
              "Komfort Yoga- & Meditations-Auszeit in Österreich bewertet von",
          },
          {
            rateName: "Silke Roth",
            rateDesc:
              "Das Essen war hausgemacht, die Yoga und Qi Gong Stunden waren wirklich etwas Besonderes und auf den 1800m Höhe kann man super abschalten, den Alltag vergessen und sich um sich selbst kümmern. Es gab viele Angebote wie Klettern, Rafting oder einen Workshoptag, deshalb ist der Preis sehr fair. Danke an Denise, Wendy & Chris für ein rundum gelunges retreat! Gerne wieder!",
            rateImage: RateImg,
            rateCalendar: "18.09.2020",
            rateFootNote:
              "Abwechslungsreiches Outdoor- und Yoga-Retreat auf 1800 Metern bewertet von",
          },
          {
            rateName: "Melanie",
            rateDesc:
              "Das Mondo Lifestyle Village ist eine echte Oase der Ruhe im geschäftigen Canggu. Die Zimmer sind schön und gemütlich eingerichtet, der Pool lädt zum Schwimmen und Relaxen ein und die gesamte Crew ist wirklich sehr freundlich. Ich kann das Mondo Surf Village nur wärmstens empfehlen!",
            rateImage: RateImg,
            rateCalendar: "29.10.2019",
            rateFootNote:
              "Yoga Village in Canggu: Luxus & Erholung bewertet von",
          },
          {
            rateName: "Tina",
            rateDesc:
              "Eine unvergessliche Woche liegt hinter mir! Sie war nicht nur entspannend sondern auch inspirierend. Das gesamte Team war sehr freundlich und kompetent, die Massage war genau das richtige um die beanspruchten Muskeln zu lockern und das Essen mit so viel Liebe und Freude zubereitet, das man es tatsächlich schmecken konnte!",
            rateImage: RateImg,
            rateCalendar: "17.06.2019",
            rateFootNote:
              "Yoga & Pilates Retreat: Deine Auszeit zum Wohlfühlen bewertet von",
          },
        ]}
        rateCols="xl:grid-cols-3"
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
        title="Mehr Inspiration für dein Yoga Retreat"
        cols="xl:grid-cols-4"
        items={[
          {
            title: "Beliebte Reiseziele",
            items: [
              "Deutschland",
              "Österreich",
              "Portugal",
              "Kanarische Inseln",
              "Italien",
              "Griechenland",
              "Slowenien",
              "Kroatien",
              "Indien",
              "Bali",
            ],
          },
          {
            title: "Top-Kategorien",
            items: [
              "Yoga Wochenenden",
              "Yoga & Wellness Reisen",
              "Yoga & Meditations Retreats",
              "Stille Retreats",
              "Yoga-Therapie Reisen",
              "Spirituelle Retreats",
              "Luxus Yoga Reisen",
              "Yoga Retreats für Frauen",
              "Budget Yoga Camps",
            ],
          },
          {
            title: "Ausgewählte Partner",
            items: [
              "AzulFit",
              "Yogakasha",
              "Traumhotel Alpina",
              "Indigourlaub",
              "globeseekers",
              " Tuscan Fitness",
              "leben & reisen",
              "Joy of Mediterranean",
              "Yogazentrum Rügen",
              "Art of Living",
            ],
          },
          {
            title: "Reisemagazin",
            items: [
              "9 Yoga-Weisheiten",
              "Yoga Retreat in Deutschland",
              "Surf- & Yogacamp in Portugal",
              "Yoga Retreat auf Bali",
              "Yoga für Anfänger",
              "11 Yoga-Arten",
              "Aerial Yoga",
              "Der Traum vom eigenen Yogastudio",
              "Surfboard Balance Yoga",
            ],
          },
        ]}
      />
    </div>
  );
};

export default YogaRetreats;

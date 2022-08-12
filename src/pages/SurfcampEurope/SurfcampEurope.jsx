import React from "react";
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//Description
import Description from "../../components/Description/Description";
import Frankreich from "../../assets/euro/Regionen-20220811T072453Z-001/Regionen/Surfcamps-Frankreich.jpg";
import Portugal from "../../assets/euro/Regionen-20220811T072453Z-001/Regionen/Surfcamps-Frankreich.jpg";
import Spanien from "../../assets/euro/Regionen-20220811T072453Z-001/Regionen/Surfcamps-Spanien.jpg";
import Fuerteventura from "../../assets/euro/Regionen-20220811T072453Z-001/Regionen/Surfcamps-Fuerteventura-Kanaren.jpg";
import Teneriffa from "../../assets/euro/Regionen-20220811T072453Z-001/Regionen/Surfcamps-Teneriffa-Kanaren.jpg";
import Gran from "../../assets/euro/Regionen-20220811T072453Z-001/Regionen/Surfcamps-Gran-Canaria.jpg";
import cardImage from "../../assets/images/cardImage.jpg";

//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//ImageGallery
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
        tabContents={[
          {
            detailsImage: Frankreich,
            detailsTitle: "Surfurlaub in Frankreich",
            detailsDesc:
              "Endlose Sandstrände und Pinienwälder wohin das Auge reicht: Die Atlantikküste Frankreichs erwartet dich mit einer einzigartigen Atmosphäre und den idealen Voraussetzungen für einen unvergesslichen Surfurlaub!Die beste Region für einen Surfurlaub in Frankreich ist die Atlantikküste von Bordeaux bis runter zur spanischen Grenze. Insbesondere im Sommer findest du hier die konstantesten Wellenbedingungen in Europa.Ein weiteres Plus ist die unkomplizierte Anreise. Vom eigenen Auto über eine Bus- oder Zugfahrt bis hin zum Fliegen stehen dir alle Möglichkeiten offen! Und bist du einmal angekommen, tauchst du sofort ein in eine eigene Welt.",
            detailsReadMore:
              "Mehr Inspiration für dein Surfurlaub in Frankreich",
            cardTitle: "Top-Surfcamps in Frankreich",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp in Moliets: Party & Campfeeling pur",
                location: "Moliets, Frankreich",
                calender: "25.06. - 10.09.2022",
                rateDesc: "",
                price: "383 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfurlaub im lässigen Surfhaus nahe Capbreton",
                location: "Bénesse-Maremne, Frankreich",
                calender: "02.04. - 01.10.2022",
                rateDesc: "",
                price: "378 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfcamp weit weg vom Trubel",
                location: "Le Pin Sec, Frankreich",
                calender: "25.06. - 10.09.2022",
                rateDesc: "",
                price: "350 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surf & Yoga Urlaub für Naturliebhaber über 30",
                location: "Mimizan-Plage ,Frankreich",
                calender: "12.06. - 02.10.2022",
                rateDesc: "",
                price: "465 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Portugal,
            detailsTitle: "Surfurlaub in Portugal",
            detailsDesc:
              "Unberührte Natur, die besten Wellen in Europa und die Qual der Wahl: Die verschiedenen Regionen und Surfcamps in Portugal bieten eine enorme Vielfalt und dadurch den passenden Surfurlaub für die unterschiedlichsten Wünsche und Bedürfnisse.Wenn du dir traumhafte grüne Landschaften und leere LineUps wünschst, ist der Norden Portugals die richtige Wahl für deinen Surfurlaub. Die Algarve im Süden ist hingegen die richtige Anlaufstelle für alle Sonnenanbeter: Hier erwarten dich selbst im Winter angenehme Temperaturen. Doch auch die Regionen rund um Lissabon bieten dir vielfältige Möglichkeiten: Angefangen mit Ericeira, dem einzigen World Surf Reserve in Europa, über Peniche, der Hauptstadt der Wellen, bis hin zu Lissabon selber. Was wünschst du dir für deinen Surfurlaub in Portugal?",
            detailsReadMore: "Mehr Inspiration für dein Surfurlaub in Portugal",
            cardTitle: "Top-Surfcamps in Portugal",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Umgeben von Natur: Surfcamp im entspannten Sagres",
                location: "Sagres, Portugal",
                calender: "01.04. - 01.12.2022",
                rateDesc: "",
                price: "410 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Gemütliches Surfhaus direkt am Surfspot",
                location: "Peniche, Portugal",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "380 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title:
                  "Chill in Surfhaus mit Blick auf's Meer im Surfer-Paradies",
                location: "Ericeira, Portugal",
                calender: "01.04. - 04.01.",
                rateDesc: "",
                price: "336 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Familiäres Surfhaus im unberührten Norden Portugals",
                location: "Estela, Portugal",
                calender: "01.03. - 01.11.2022",
                rateDesc: "",
                price: "403 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Spanien,
            detailsTitle: "Surfurlaub in Spanien",
            detailsDesc:
              "Tapas, Sonne und gute Laune - ein Surfurlaub in Spanien, hält was er verspricht! Die besten Wellenbedingungen findest du dabei an der Atlantikküste im Norden Spaniens. Doch auch Andalusien im Süden erwartet dich mit schönen Wellen und traumhaften Stränden.Der Norden Spaniens ist an Vielfalt kaum zu übertreffen! Während das Baskenland mit sattgrüner Natur und lebendigen Städten auf dich wartet, erinnert Kantabrien mit seinen grünen Hügeln und glücklichen Milchkühen an das Allgäu - nur eben am Meer. Angekommen in Galizien wird die Landschaft trockener und die Strände leerer.In Andalusien erwartet dich Sonne das ganze Jahr über! Fernab der Touristenhochburgen kannst du dich auf kleine weiße Dörfer, lange Sandstrände und den typisch entspannten Lebensstil der Spanier freuen.",
            detailsReadMore: "Erfahre mehr über einen Surfurlaub in Spanien",
            cardTitle: "Top-Surfcamps in Spanien",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp im Nationalpark in Kantabrien",
                location: "Ruilobuca, Spanien",
                calender: "28.05. - 17.09.2022",
                rateDesc: "",
                price: "349 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfcamp in der wärmsten Region Europas",
                location: "El Palmar, Spanien",
                calender: "13.09.2021 - 29.05.2022",
                rateDesc: "",
                price: "798 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus mit Apartments im Süden Spaniens",
                location: "Conil De La Frontera, Spanien",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "250 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Moderne Surf Lodge am Traumstrand von Loredo",
                location: "Loredo, Spanien",
                calender: "04.04. - 14.11.2022",
                rateDesc: "",
                price: "189 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Fuerteventura,
            detailsTitle: "Surfurlaub auf Fuerteventura",
            detailsDesc:
              "Fuerteventura gilt als das Hawaii Europas - und das nicht ohne Grund: Weiße Sandstrände, kristallklares Wasser und perfekte Surfbedingungen für jedes Level - was wünscht man sich mehr für seinen Surfurlaub?Die beliebtesten Surforte auf Fuerteventura sind Corralejo und El Cotillo im Norden beziehungsweise Nordwesten der Insel. Corralejo ist die Surf-Hochburg auf Fuerteventura. Neben den bekanntesten Surfspots der Insel kannst du dich hier auf eine große Auswahl an Restaurants, Shoppingmöglichkeiten und ein belebtes Nachtleben freuen. El Cotillo wiederum ist die deutlich ruhigere Variante: Der ursprüngliche Ort lädt zum Entschleunigen und Genießen ein!",
            detailsReadMore:
              "Mehr Inspiration für deinen Surfurlaub auf Fuerteventura",
            cardTitle: "Top-Surfcamps auf Fuerteventura",
            cardItems: [
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
              {
                cardImage: cardImage,
                title:
                  "Surfen in der Sonne: Gemütliche Surfvilla in El Cotillo",
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Teneriffa,
            detailsTitle: "Surfurlaub auf Teneriffa",
            detailsDesc:
              "Eine vielfältige Flora und Fauna, wunderschöne Strände und der größte Vulkan Europas - Teneriffa bietet den passenden Surfurlaub für die verschiedensten Bedürfnisse! Angefangen mit Surfcamps inmitten unberührter Natur bis hin zum Playa Las Americas, wo du die Nacht zum Tag machen kannst.Durch den Vulkan Teide ist Teneriffa vor den teils starken Winden rund um die kanarischen Inseln geschützt und bietet dir dadurch neben den ganzjährig sonnigen Temperaturen auch konstant gute Wellen. Insbesondere als Anfänger:in oder fortgeschrittene Surfer:in ist Teneriffa eine exzellente Wahl für deinen Surfurlaub - ganz gleich zu welcher Jahreszeit!",
            detailsReadMore:
              "Mehr Inspiration für deinen Surfurlaub auf Teneriffa",
            cardTitle: "Top-Surfcamps auf Teneriffa",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp mit entspannter Atmosphäre",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "370 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surf & Yoga Urlaub am einsamen Strand",
                location: "El Poris, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "390 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus im ursprünglichen Küstenort El Poris",
                location: "El Poris, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "280 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus auf Teneriffa: Natur, Leidenschaft & Spaß",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "379 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Gran,
            detailsTitle: "Surfurlaub auf Gran Canaria",
            detailsDesc:
              "Gran Canaria ist bekannt für seine Bergdörfer, Strände und Las Palmas - die größte Stadt auf den Kanaren. Hier kannst du die Atmosphäre einer typisch spanischen Stadt mit seinen Tapas Bars und kleinen Gassen genießen und gleichzeitig mit deinem Surfbrett unter dem Arm direkt zum Strand laufen.Die typischen Tourismushochburgen sind weit entfernt von den Surfspots der Insel. So kannst du selbst mit einem Surfcamp in Las Palmas schnell raus in die Natur und die Vielfalt der Insel entdecken. Neben Wellen sind dir auf Gran Canaria auch das ganze Jahr über angenehme Temperaturen garantiert!",
            detailsReadMore: "Zu den Details",
            cardTitle: "Top-Surfcamp auf Gran Canaria",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfurlaub in direkter Strandlage in Las Palmas",
                location: "Las Palmas, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "500 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfen & Yoga: Erlebe die Magie von Las Palmas",
                location: "Las Palmas, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "382 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Buntes Surfhostel mit Charme auf Gran Canaria",
                location: "San Felipe, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "335 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus mit Dachterrasse am Strand von Las Palmas",
                location: "Las Palmas, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "381 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
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
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
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

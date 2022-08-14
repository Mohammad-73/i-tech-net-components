import React from "react";
import { useTranslation } from "react-i18next";
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
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image51 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Alleinreisende-Europa.jpg";
import image52 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Freunde-Europa.jpg";
import image53 from "../../assets/euro/Zielgruppen/Zielgruppen/Familien-Surfurlaub-Europa.jpg";
import image54 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Paare-Europa.jpg";
import image55 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Jugendliche-Europa.jpg";
//imageGallery2
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
  const { t } = useTranslation();
  return (
    <div>
      <NavBar />
      <Hero
        image="bg-hero-europe"
        title={t("euro_header_title")}
        description={t("euro_header_subtitle")}
      />
      <HintSection
        items={[
          {
            icon: <BiLike size={38} />,
            title: t("euro_3symbol_title1"),
            description: t("euro_3symbol_text1"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiStar size={38} />,
            title: t("euro_3symbol_title2"),
            description: t("euro_3symbol_text2"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiHeart size={38} />,
            title: t("euro_3symbol_title3"),
            description: t("euro_3symbol_text3"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <Description
        titel="Die besten Reiseziele für einen Surfurlaub in Europa"
        tabItems={[
          t("euro_big_tab_element_tab1"),
          t("euro_big_tab_element_tab2"),
          t("euro_big_tab_element_tab3"),
          t("euro_big_tab_element_tab4"),
          t("euro_big_tab_element_tab5"),
          t("euro_big_tab_element_tab6"),
        ]}
        tabCols="lg:grid-cols-6"
        tabContents={[
          {
            detailsImage: Frankreich,
            detailsTitle: t("euro_big_tab_element_title1"),
            detailsDesc: t("euro_big_tab_element_text1"),
            detailsReadMore: t("euro_big_tab_element_more1"),
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
            detailsTitle: t("euro_big_tab_element_title2"),
            detailsDesc: t("euro_big_tab_element_text2"),
            detailsReadMore: t("euro_big_tab_element_more2"),
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
            detailsTitle: t("euro_big_tab_element_title3"),
            detailsDesc: t("euro_big_tab_element_text3"),
            detailsReadMore: t("euro_big_tab_element_more3"),
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
            detailsTitle: t("euro_big_tab_element_title4"),
            detailsDesc: t("euro_big_tab_element_text4"),
            detailsReadMore: t("euro_big_tab_element_more4"),
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
            detailsTitle: t("euro_big_tab_element_title5"),
            detailsDesc: t("euro_big_tab_element_text5"),
            detailsReadMore: t("euro_big_tab_element_more5"),
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
            detailsTitle: t("euro_big_tab_element_title6"),
            detailsDesc: t("euro_big_tab_element_text6"),
            detailsReadMore: t("euro_big_tab_element_more6"),
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
      <ImageGalleryFivePic
        title={t("euro_5_linked_image_element_title")}
        description={t("euro_5_linked_image_element_subtitle")}
        image1={{ img: image51, title: t("euro_5_linked_image_element_tab1") }}
        image2={{ img: image52, title: t("euro_5_linked_image_element_tab2") }}
        image3={{ img: image53, title: t("euro_5_linked_image_element_tab3") }}
        image4={{ img: image54, title: t("euro_5_linked_image_element_tab4") }}
        image5={{ img: image55, title: t("euro_5_linked_image_element_tab5") }}
      />
      <ListAndImage
        image={Besonderheiten}
        title={t("euro_image_and_text_title")}
        items={[
          t("euro_image_and_text1"),
          t("euro_image_and_text2"),
          t("euro_image_and_text3"),
          t("euro_image_and_text4"),
        ]}
        readMore=""
      />
      <ImageGallery2 />
      <SingleCardSection
        title="Empfohlene Surfcamps in Europa"
        description="Entdecke Surfcamps, die von Reisenden mit mindestens 4,5 von 5 Sternen
      bewertet sind, und erlebe deinen Traumurlaub am Meer!"
        items={[
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
            title: "Surfcamp in der wärmsten Region Europas",
            location: "SEl Palmar, Spanien",
            calender: "13.09.2021 - 29.05.2022",
            rateDesc: "",
            price: "798 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Täglich Surfen in entspannter Atmosphäre",
            location: "Vieux Boucau, Frankreich",
            calender: "02.07. - 10.09.2022",
            rateDesc: "",
            price: "373 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
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
            title: "Surf-Abenteuer im idyllischen Norden Lanzarotes",
            location: "Caleta de Famara, Lanzarote",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "354 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
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
            title: "Surfhaus in Kantabrien: Ruhe, Natur & Wellen",
            location: "Loredo, Spanien",
            calender: "03.04. - 15.11.2022",
            rateDesc: "",
            price: "150 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Familien Surfurlaub am langen Sandstrand",
            location: "Peniche, Portugal",
            calender: "01.02. - 23.12.",
            rateDesc: "",
            price: "190 €",
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
            title: "Surfcamp in Nordspanien: Party & Spaß am Traumstrand",
            location: "San Vicente, Spanien",
            calender: "26.06. - 28.08.2022",
            rateDesc: "",
            price: "363 €",
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
            title: "Surfurlaub für Familien: Natur & Spaß am Strand",
            location: "Areia Branca, Portugal",
            calender: "20.03. - 31.10.2022",
            rateDesc: "",
            price: "340 €",
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
            title: "Surfurlaub in privaten Apartments in Biarritz",
            location: "Biarritz, Frankreich",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "260 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Chill in Surfhaus mit Blick auf's Meer im Surfer-Paradies",
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
            title: "Surfhaus mit Dachterrasse am Strand von Las Palmas",
            location: "Las Palmas, Gran Canaria",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "381 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
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

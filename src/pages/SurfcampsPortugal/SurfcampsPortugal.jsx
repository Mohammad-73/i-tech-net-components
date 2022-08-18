import React from "react";
import { useTranslation } from "react-i18next";
import {
  Heart,
  Like,
  Star,
  Phone,
  Email,
  Whatsapp,
} from "../../assets/icons/icons";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
//Description
import Description from "../../components/Description/Description";
//ImageGalleryFourPic
import ImageGalleryFourPic from "../../components/ImageGalleryFourPic/ImageGalleryFourPic";
//ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
//RateCardSection
import RateCardSection from "../../components/RateCardSection/RateCardSection";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampsPortugal = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-portugal"
        title={t("portugal_header_title")}
        description={t("portugal_header_text")}
      />
      <HintSection
        items={[
          {
            icon: <Like size={38} />,
            title: t("portugal_3_symbol_element_title1"),
            description: t("portugal_3_symbol_element_text1"),
            readMore: "Zu den Details",
          },
          {
            icon: <Star size={38} />,
            title: t("portugal_3_symbol_element_title2"),
            description: t("portugal_3_symbol_element_text2"),
            readMore: "Zu den Details",
          },
          {
            icon: <Heart size={38} />,
            title: t("portugal_3_symbol_element_title3"),
            description: t("portugal_3_symbol_element_text3"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <Description
        title={t("portugal_big_tab_element_title")}
        tabItems={[
          t("portugal_big_tab_element_tab1"),
          t("portugal_big_tab_element_tab2"),
          t("portugal_big_tab_element_tab3"),
          t("portugal_big_tab_element_tab4"),
          t("portugal_big_tab_element_tab5"),
          t("portugal_big_tab_element_tab6"),
        ]}
        tabCols="lg:grid-cols-6"
        tabContents={[
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Regionen/Surfcamps-Portugal-Algarve.jpg",

            detailsTitle: t("portugal_big_tab_element_tab1_title"),
            detailsDesc: t("portugal_big_tab_element_tab1_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps an der Algarve",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Gemütliche Villa: Surfen, Natur und leckeres Essen",
                location: "Lagos, Portugal",
                calender: "28.03. - 07.11.2022",
                rateDesc: "",
                price: "608 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Mission-to-Surf: Lass deine Träume wahr werdenl",
                location: "Vale Da Telha, Portugal",
                calender: "30.03. - 21.11.2022",
                rateDesc: "",
                price: "305 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Ganzheitliches Surfcamp für Naturliebhaber",
                location: "Lagoa, Portugal",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "646 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Regionen/Surfcamps-Portugal-Ericeira.jpg",
            detailsTitle: t("portugal_big_tab_element_tab2_title"),
            detailsDesc: t("portugal_big_tab_element_tab2_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Ericeira",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfhaus mit Dachterrasse direkt am Surfspot",
                location: "Ericeira, Portugal",
                calender: "01.04. - 30.10.2022",
                rateDesc: "",
                price: "273 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga- & Surf-Reise im modernen Haus in Ericeira",
                location: "Ericeira, Portugal",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "549 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title:
                  "Surfari für erfahrene Surfer im World Surfing Reserve Europas",
                location: "Ericeira, Portugal",
                calender: "01.04. - 04.01.",
                rateDesc: "",
                price: "16 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Regionen/Surfcamps-Portugal-Peniche.jpg",
            detailsTitle: t("portugal_big_tab_element_tab3_title"),
            detailsDesc: t("portugal_big_tab_element_tab3_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Peniche",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surf-Erlebnis mit Hotelkomfort in Peniche",
                location: "Peniche, Portugal",
                calender: "01.02. - 23.12.",
                rateDesc: "",
                price: "50 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surf & Yoga Urlaub in der Sonne Portugals",
                location: "Peniche, Portugal",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "410 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Regionen/Surfcamps-Portugal-Santa-Cruz.jpg",
            detailsTitle: t("portugal_big_tab_element_tab4_title"),
            detailsDesc: t("portugal_big_tab_element_tab4_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Santa Cruz",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title:
                  "Surf Lodge in Santa Cruz: Umgeben von über 30 Surfspots",
                location: "Santa Cruz, Portugal",
                calender: "20.03. - 18.12.",
                rateDesc: "",
                price: "449 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfcamp am Praia Azul: Surfen an abgelegenen Spots",
                location: "Santa Cruz, Portugal",
                calender: "21.03. - 30.10.2022",
                rateDesc: "",
                price: "399 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surf-Guiding in gemütlicher Surf Lodge in Santa Cruz",
                location: "Santa Cruz, Portugal",
                calender: "20.03. - 26.06. & 25.09. - 18.12.2022",
                rateDesc: "",
                price: "78 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Regionen/Surfcamps-Portugal-Areia-Branca.jpg",
            detailsTitle: t("portugal_big_tab_element_tab5_title"),
            detailsDesc: t("portugal_big_tab_element_tab5_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Lourinha",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfcamp: Entspannte Leute und gute Vibes",
                location: "Lourinha, Portugal",
                calender: "27.03. - 30.10.2022",
                rateDesc: "",
                price: "399 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Beachlodge Surfcamp im sonnigen Winter Portugals",
                location: "Lourinhã, Portugal",
                calender: "30.10. - 27.03.",
                rateDesc: "",
                price: "399 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfen & Mountainbiken inmitten der Natur",
                location: "Areia Branca, Portugal",
                calender: "20.03. - 31.10.2022",
                rateDesc: "",
                price: "67 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Regionen/Surfcamps-Portugal-Porto.jpg",
            detailsTitle: t("portugal_big_tab_element_tab6_title"),
            detailsDesc: t("portugal_big_tab_element_tab6_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in der Region Porto",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surf- & Yoga-Urlaub im Eco-Hotel am Ozean",
                location: "Viana do Castelo, Portugal",
                calender: "30.04. - 10.11.2022",
                rateDesc: "",
                price: "770 €",
                priceTitle: "für 6 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfcamp am unberührten Strand im Norden Portugals",
                location: "Gelfa, Portugal",
                calender: "30.04. - 15.10.2022",
                rateDesc: "",
                price: "749 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfurlaub im innovativen Sporthotel",
                location: "Viana do Castelo, Portugal",
                calender: "30.04. - 10.11.2022",
                rateDesc: "",
                price: "675 €",
                priceTitle: "für 6 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
        ]}
      />
      <ImageGalleryFourPic
        title={t("portugal_4_linked_image_title")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Zielgruppe/Surfcamps-Portugal-Alleinreisende.jpg",

            shadow: "80",
            title: t("portugal_4_linked_image_item1"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Zielgruppe/Surfcamps-Portugal_Gruppen-Freunde-alt.jpg",
            shadow: "80",
            title: t("portugal_4_linked_image_item2"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Zielgruppe/Familien-Surfcamps-Portugal.jpg",
            shadow: "80",
            title: t("portugal_4_linked_image_item3"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Zielgruppe/Surfurlaub-Paare-Portugal.jpg",
            shadow: "80",
            title: t("portugal_4_linked_image_item4"),
          },
        ]}
      />
      <ListAndImage
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Vorteile-Divider/Surfcamps-Portugal-Besonderheiten.jpg"
        }
        title={t("portugal_big_divider_element_title")}
        items={[
          t("portugal_big_divider_element_item1"),
          t("portugal_big_divider_element_item2"),
          t("portugal_big_divider_element_item3"),
          t("portugal_big_divider_element_item4"),
        ]}
      />
      <ImageGallery3
        title={t("portugal_6_part_linked_image_element_title")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Kategorien/Surfcamps-Portugal-Natur.jpg",
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item1"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Kategorien/Surfurlaub-Portugal-Einzelzimmer.jpg",
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item2"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Kategorien/Surf-Mountainbike-Urlaub-Portugal.jpg",
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item3"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Kategorien/Surfcamps-Portugal-Kostenfreie-Stornierung.jpg",
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item4"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Kategorien/Low-Budget-Surfcamps-Portugal.jpg",
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item5"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Kategorien/Surf-Yoga-Camps-Portugal.jpg",
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item6"),
          },
        ]}
      />
      <SingleCardSection
        title={t("portugal_offer_element_title2")}
        description="Freust du dich über ein gemeinsamen Grillabend am Lagerfeuer, willst danach aber schnell ins Bett, um fit für die Wellen am nächsten Morgen zu sein? Dann entdecke unsere beliebtesten Surfcamps für die richtige Balance zwischen Action in den Wellen und Erholung in der Natur:"
        items={[
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Familiäres Surfhaus im unberührten Norden Portugals",
            location: "Estela, Portugal",
            calender: "01.03. - 01.11.2022",
            rateDesc: "",
            price: "43 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfen und Yoga: Wohlfühlurlaub in der Natur",
            location: "Lagos, Portugal",
            calender: "28.03. - 07.11.2022",
            rateDesc: "",
            price: "680 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Beachlodge Surfcamp im sonnigen Winter Portugals",
            location: "Lourinhã, Portugal",
            calender: "30.10. - 27.03.",
            rateDesc: "",
            price: "399 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surf- & Yoga-Urlaub im Eco-Hotel am Ozean",
            location: "Viana do Castelo, Portugal",
            calender: "30.04. - 10.11.2022",
            rateDesc: "",
            price: "770 €",
            priceTitle: "für 6 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfhaus mit Dachterrasse direkt am Surfspot",
            location: "Ericeira, Portugal",
            calender: "01.04. - 30.10.2022",
            rateDesc: "",
            price: "273 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Ganzheitliches Surfcamp für Naturliebhaber",
            location: "Lagoa, Portugal",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "646 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfcamp am Praia Azul: Surfen an abgelegenen Spots",
            location: "Santa Cruz, Portugal",
            calender: "21.03. - 30.10.2022",
            rateDesc: "",
            price: "399 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surf Lodge in Santa Cruz: Umgeben von über 30 Surfspots",
            location: "Santa Cruz, Portugal",
            calender: "20.03. - 18.12.",
            rateDesc: "",
            price: "449 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Mission-to-Surf: Lass deine Träume wahr werden",
            location: "Vale Da Telha, Portugal",
            calender: "30.03. - 21.11.2022",
            rateDesc: "",
            price: "305 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfen & Mountainbiken inmitten der Natur",
            location: "Areia Branca, Portugal",
            calender: "20.03. - 31.10.2022",
            rateDesc: "",
            price: "67 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Gemütliche Villa: Surfen, Natur und leckeres Essen",
            location: "Lagos, Portugal",
            calender: "28.03. - 07.11.2022",
            rateDesc: "",
            price: "608 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surf-Erlebnis mit Hotelkomfort in Peniche",
            location: "Peniche, Portugal",
            calender: "01.02. - 23.12.",
            rateDesc: "",
            price: "50 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga- & Surf-Reise im modernen Haus in Ericeira",
            location: "Ericeira, Portugal",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "549 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        align="center"
        title={t("portugal_big_divider_with_image_bg_title")}
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Divider/surfcamps-portugal.jpg"
        }
        buttonTitle={t("portugal_big_divider_with_image_bg_button")}
      />
      <SingleColImg
        title={t("portugal_3_linked_image_element_title")}
        description={t("portugal_3_linked_image_element_subtitle")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Vorkenntnisse/Surfcamps-Portugal-Anfänger.jpg",

            title: t("portugal_3_linked_image_element_tab1_title"),
            description: t("portugal_3_linked_image_element_tab1_text"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Vorkenntnisse/Surfcamps-Portugal_Intermediates.jpg",
            title: t("portugal_3_linked_image_element_tab2_title"),
            description: t("portugal_3_linked_image_element_tab2_text"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/SurfcampPortugal/Vorkenntnisse/Surfari-Surf-Guiding-Portugal.jpg",
            title: t("portugal_3_linked_image_element_tab3_title"),
            description: t("portugal_3_linked_image_element_tab3_text"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/Besonderheiten.jpg"
        }
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <RateCardSection
        title={t("portugal_review_element_title")}
        items={[
          {
            rateName: "Amelie",
            rateDesc: t("portugal_review_element_text1"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "28.09.2021",
            rateFootNote: t("portugal_review_element_more1"),
          },
          {
            rateName: "Taty",
            rateDesc: t("portugal_review_element_text2"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "03.12.2021",
            rateFootNote: t("portugal_review_element_more2"),
          },
          {
            rateName: "Sarah",
            rateDesc: t("portugal_review_element_text3"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "28.09.2021",
            rateFootNote: t("portugal_review_element_more3"),
          },
          {
            rateName: "Christine",
            rateDesc: t("portugal_review_element_text4"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "30.07.2021",
            rateFootNote: t("portugal_review_element_more4"),
          },
          {
            rateName: "Pia",
            rateDesc: t("portugal_review_element_text5"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "28.09.2021",
            rateFootNote: t("portugal_review_element_more5"),
          },
          {
            rateName: "Melina",
            rateDesc: t("portugal_review_element_text6"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "19.08.2021",
            rateFootNote: t("portugal_review_element_more6"),
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title={t("portugal_contact_us_title")}
        descritpion={t("portugal_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("portugal_contact_us_input_first_name"),
          },
          { type: "text", placeholder: t("portugal_contact_us_input_email") },
        ]}
        formTextarea={t("portugal_contact_us_input_write_message")}
        formButton={t("portugal_contact_us_input_send_message")}
        cardImageSrc={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/contact.jpg"
        }
        cardTitle={t("portugal_contact_us_card_title")}
        cardDesc={t("portugal_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("portugal_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("portugal_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("portugal_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <TagSection
        title={t("portugal_link_element_title")}
        cols="xl:grid-cols-3"
        items={[
          {
            title: t("portugal_link_element_col1_title"),
            items: [
              t("portugal_link_element_col1_item1"),
              t("portugal_link_element_col1_item2"),
              t("portugal_link_element_col1_item3"),
              t("portugal_link_element_col1_item4"),
            ],
          },
          {
            title: t("portugal_link_element_col2_title"),
            items: [
              t("portugal_link_element_col2_item1"),
              t("portugal_link_element_col2_item2"),
              t("portugal_link_element_col2_item3"),
              t("portugal_link_element_col2_item4"),
            ],
          },
          {
            title: t("portugal_link_element_col3_title"),
            items: [
              t("portugal_link_element_col3_item1"),
              t("portugal_link_element_col3_item2"),
              t("portugal_link_element_col3_item3"),
              t("portugal_link_element_col3_item4"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampsPortugal;

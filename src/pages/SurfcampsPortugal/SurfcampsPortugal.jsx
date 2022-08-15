import React from "react";
import { useTranslation } from "react-i18next";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//Description
import Description from "../../components/Description/Description";
import Algarve from "../../assets/SurfcampPortugal/Regionen/Surfcamps-Portugal-Algarve.jpg";
import Ericeira from "../../assets/SurfcampPortugal/Regionen/Surfcamps-Portugal-Ericeira.jpg";
import Peniche from "../../assets/SurfcampPortugal/Regionen/Surfcamps-Portugal-Peniche.jpg";
import Santa from "../../assets/SurfcampPortugal/Regionen/Surfcamps-Portugal-Santa-Cruz.jpg";
import Lourinha from "../../assets/SurfcampPortugal/Regionen/Surfcamps-Portugal-Areia-Branca.jpg";
import Region from "../../assets/SurfcampPortugal/Regionen/Surfcamps-Portugal-Porto.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
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
            icon: <BiLike size={38} />,
            title: t("portugal_3_symbol_element_title1"),
            description: t("portugal_3_symbol_element_text1"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiStar size={38} />,
            title: t("portugal_3_symbol_element_title2"),
            description: t("portugal_3_symbol_element_text2"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiHeart size={38} />,
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
            detailsImage: Algarve,
            detailsTitle: t("portugal_big_tab_element_tab1_title"),
            detailsDesc: t("portugal_big_tab_element_tab1_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps an der Algarve",
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
                cardImage: cardImage,
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
                cardImage: cardImage,
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
            detailsImage: Ericeira,
            detailsTitle: t("portugal_big_tab_element_tab2_title"),
            detailsDesc: t("portugal_big_tab_element_tab2_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Ericeira",
            cardItems: [
              {
                cardImage: cardImage,
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
                cardImage: cardImage,
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
            detailsImage: Peniche,
            detailsTitle: t("portugal_big_tab_element_tab3_title"),
            detailsDesc: t("portugal_big_tab_element_tab3_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Peniche",
            cardItems: [
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
                cardImage: cardImage,
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
            detailsImage: Santa,
            detailsTitle: t("portugal_big_tab_element_tab4_title"),
            detailsDesc: t("portugal_big_tab_element_tab4_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Santa Cruz",
            cardItems: [
              {
                cardImage: cardImage,
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
                cardImage: cardImage,
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
                cardImage: cardImage,
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
            detailsImage: Lourinha,
            detailsTitle: t("portugal_big_tab_element_tab5_title"),
            detailsDesc: t("portugal_big_tab_element_tab5_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Lourinha",
            cardItems: [
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
                cardImage: cardImage,
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
                cardImage: cardImage,
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
            detailsImage: Region,
            detailsTitle: t("portugal_big_tab_element_tab6_title"),
            detailsDesc: t("portugal_big_tab_element_tab6_text"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in der Region Porto",
            cardItems: [
              {
                cardImage: cardImage,
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
                cardImage: cardImage,
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
                cardImage: cardImage,
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
        ]}
      />
      <ImageGalleryFourPic
        title={t("portugal_4_linked_image_title")}
        items={[
          {
            img: img1,
            shadow: "80",
            title: t("portugal_4_linked_image_item1"),
          },
          {
            img: img2,
            shadow: "80",
            title: t("portugal_4_linked_image_item2"),
          },
          {
            img: img3,
            shadow: "80",
            title: t("portugal_4_linked_image_item3"),
          },
          {
            img: img4,
            shadow: "80",
            title: t("portugal_4_linked_image_item4"),
          },
        ]}
      />
      <ListAndImage
        image={ListAndImage1}
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
            img: imgGallery1,
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item1"),
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item2"),
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item3"),
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item4"),
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: t("portugal_6_part_linked_image_element_item5"),
          },
          {
            img: imgGallery6,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
        image={dividerImage}
        buttonTitle={t("portugal_big_divider_with_image_bg_button")}
      />
      <SingleColImg
        title={t("portugal_3_linked_image_element_title")}
        description={t("portugal_3_linked_image_element_subtitle")}
        items={[
          {
            img: Col31,
            title: t("portugal_3_linked_image_element_tab1_title"),
            description: t("portugal_3_linked_image_element_tab1_text"),
          },
          {
            img: Col32,
            title: t("portugal_3_linked_image_element_tab2_title"),
            description: t("portugal_3_linked_image_element_tab2_text"),
          },
          {
            img: Col33,
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
        image={Besonderheiten}
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <RateCardSection
        title={t("portugal_review_element_title")}
        items={[
          {
            rateName: "Amelie",
            rateDesc: t("portugal_review_element_text1"),
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote: t("portugal_review_element_more1"),
          },
          {
            rateName: "Taty",
            rateDesc: t("portugal_review_element_text2"),
            rateImage: RateImg,
            rateCalendar: "03.12.2021",
            rateFootNote: t("portugal_review_element_more2"),
          },
          {
            rateName: "Sarah",
            rateDesc: t("portugal_review_element_text3"),
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote: t("portugal_review_element_more3"),
          },
          {
            rateName: "Christine",
            rateDesc: t("portugal_review_element_text4"),
            rateImage: RateImg,
            rateCalendar: "30.07.2021",
            rateFootNote: t("portugal_review_element_more4"),
          },
          {
            rateName: "Pia",
            rateDesc: t("portugal_review_element_text5"),
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote: t("portugal_review_element_more5"),
          },
          {
            rateName: "Melina",
            rateDesc: t("portugal_review_element_text6"),
            rateImage: RateImg,
            rateCalendar: "19.08.2021",
            rateFootNote: t("portugal_review_element_more6"),
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

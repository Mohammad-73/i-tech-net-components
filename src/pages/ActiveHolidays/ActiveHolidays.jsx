import React from "react";
import { useTranslation } from "react-i18next";
import {
  Heart,
  Like,
  Star,
  HeartOrange,
  LikeOrange,
  StarOrange,
  Phone,
  Email,
  Whatsapp,
} from "../../assets/icons/icons";
// Hero
import Hero from "../../components/Hero/Hero";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
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

//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";

//TagSection
import TagSection from "../../components/TagSection/TagSection";

const ActiveHolidays = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-active-holiday"
        title={t("active_header_title")}
        description={t("active_header_subtitle")}
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <HeartOrange size={56} />,
            title: t("active_4symbol_title1"),
            description: t("active_4symbol_text1"),
          },
          {
            icon: <LikeOrange size={56} />,
            title: t("active_4symbol_title2"),
            description: t("active_4symbol_text2"),
          },
          {
            icon: <StarOrange size={56} />,
            title: t("active_4symbol_title3"),
            description: t("active_4symbol_text3"),
          },
          {
            icon: <HeartOrange size={56} />,
            title: t("active_4symbol_title4"),
            description: t("active_4symbol_text4"),
          },
        ]}
      />
      <Description
        title={t("active_big_tab_element_title")}
        tabItems={[
          t("active_big_tab_element_tab1"),
          t("active_big_tab_element_tab2"),
          t("active_big_tab_element_tab3"),
          t("active_big_tab_element_tab4"),
          t("active_big_tab_element_tab5"),
          t("active_big_tab_element_tab6"),
          t("active_big_tab_element_tab7"),
        ]}
        tabCols="lg:grid-cols-7"
        tabContents={[
          {
            detailsImage: Berge,
            detailsTitle: t("active_big_tab_element_title1"),
            detailsDesc: "",
            detailsReadMore: t("active_big_tab_element_text1"),
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
            detailsTitle: t("active_big_tab_element_title2"),
            detailsDesc: t("active_big_tab_element_text2"),
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
            detailsTitle: t("active_big_tab_element_title3"),
            detailsDesc: t("active_big_tab_element_text3"),
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
            detailsTitle: t("active_big_tab_element_title4"),
            detailsDesc: t("active_big_tab_element_text4"),
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
            detailsTitle: t("active_big_tab_element_title5"),
            detailsDesc: t("active_big_tab_element_text5"),
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
            detailsTitle: t("active_big_tab_element_title6"),
            detailsDesc: t("active_big_tab_element_text6"),
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
            detailsTitle: t("active_big_tab_element_title7"),
            detailsDesc: t("active_big_tab_element_text7"),
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
        title={t("active_narrow_divider_element_title")}
        description={t("active_narrow_divider_element_text")}
        buttonTitle={t("active_narrow_divider_element_button")}
      />
      <ListAndImage
        mainTitle="Die besten Reiseziele für deinen Aktivurlaub"
        image={ListAndImage1}
        title={t("active_image_and_text_element_title1")}
        description={t("active_image_and_text_element_text1")}
        readMore={t("active_image_and_text_element_more1")}
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage2}
        title={t("active_image_and_text_element_title2")}
        description={t("active_image_and_text_element_text2")}
        readMore={t("active_image_and_text_element_more2")}
      />
      <SingleColImg
        title={t("active_3_linked_images_title")}
        description={t("active_3_linked_images_subtitle")}
        items={[
          {
            img: Col31,
            title: t("active_3_linked_images_item1"),
          },
          {
            img: Col32,
            title: t("active_3_linked_images_item2"),
          },
          {
            img: Col33,
            title: t("active_3_linked_images_item3"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        image={Besonderheiten}
        align="left"
        title={t("active_divider_wide_with_image_background_title")}
        description={t("active_divider_wide_with_image_background_text")}
        buttonTitle={t("active_divider_wide_with_image_background_button")}
      />
      <ImageGalleryBrick
        reverse={true}
        title={t("active_8_parted_linked_image_title")}
        description={t("active_8_parted_linked_image")}
        image1={{ img: image1, title: t("active_8_parted_linked_image_tab1") }}
        image2={{ img: image2, title: t("active_8_parted_linked_image_tab2") }}
        image3={{ img: image3, title: t("active_8_parted_linked_image_tab3") }}
        image4={{ img: image4, title: t("active_8_parted_linked_image_tab4") }}
        image5={{ img: image5, title: t("active_8_parted_linked_image_tab5") }}
        image6={{ img: image6, title: t("active_8_parted_linked_image_tab6") }}
        image7={{ img: image7, title: t("active_8_parted_linked_image_tab7") }}
        image8={{ img: image8, title: t("active_8_parted_linked_image_tab8") }}
      />
      <SingleCardSection
        title={t("active_offer_element_title")}
        description={t("active_offer_element")}
        items={[
          {
            cardImage: cardImage,
            title: "Yoga, Pilates & Surfen auf den Kanaren",
            location: "Villaverde, Fuerteventura",
            calender: "Mai - Oktober",
            rateDesc: "",
            price: "90 €",
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
          {
            cardImage: cardImage,
            title: "Yoga, Fitness & Wandern in der Toskana",
            location: "Montegonzi, Italien",
            calender: "01.04. - 31.11.2021",
            rateDesc: "",
            price: "190 €",
            priceTitle: "pro Nacht",
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
            priceTitle: "pro Nacht",
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
            priceTitle: "pro Nacht",
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
          {
            cardImage: cardImage,
            title: "Surfen & Mountainbiken inmitten der Natur",
            location: "Areia Branca, Portugal",
            calender: "20.03. - 01.10.2021",
            rateDesc: "",
            price: "67 €",
            priceTitle: "pro Nacht",
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
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Traumhafte Aktiv-Auszeit an der Mosel",
            location: "Senheim, Deutschland",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "153 €",
            priceTitle: "pro Nacht",
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
            priceTitle: "pro Nacht",
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
            title: "CrossFit- und Wander-Urlaub in St. Johann",
            location: "St. Johann, Österreich",
            calender: "29.08. - 04.09.2021",
            rateDesc: "",
            price: "144 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Aktives Fitness Wochenende im Vital Hotel",
            location: "Winterberg, Deutschland",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "123 €",
            priceTitle: "pro Nacht",
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
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <SlideDivider
        image={slideDividerImg}
        dark={true}
        items={[
          {
            description: t(
              "active_big_divider_with_image_as_background_review_element_text1"
            ),
            name: t(
              "active_big_divider_with_image_as_background_review_element_name1"
            ),
            date: "21.01.2022",
          },
          {
            description: t(
              "active_big_divider_with_image_as_background_review_element_text2"
            ),
            name: t(
              "active_big_divider_with_image_as_background_review_element_name2"
            ),
            date: "21.04.2022",
          },
          {
            description: t(
              "active_big_divider_with_image_as_background_review_element_text3"
            ),
            name: t(
              "active_big_divider_with_image_as_background_review_element_name3"
            ),
            date: "11.11.2022",
          },
        ]}
      />
      <HintSection
        items={[
          {
            icon: <Like size={38} />,
            title: t("active_3_symbol_element_title1"),
            description: t("active_3_symbol_element_text1"),
            readMore: "Zu den Details",
          },
          {
            icon: <Star size={38} />,
            title: t("active_3_symbol_element_title2"),
            description: t("active_3_symbol_element_text2"),
            readMore: "Zu den Details",
          },
          {
            icon: <Heart size={38} />,
            title: t("active_3_symbol_element_title3"),
            description: t("active_3_symbol_element_text3"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <ContactUsSection
        title={t("active_contact_us_title")}
        descritpion={t("active_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("active_contact_us_input_first_name"),
          },
          { type: "text", placeholder: t("active_contact_us_input_email") },
        ]}
        formTextarea={t("active_contact_us_input_write_message")}
        formButton={t("active_contact_us_input_send_message")}
        cardImageSrc={Contact}
        cardTitle={t("active_contact_us_card_title")}
        cardDesc={t("active_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("active_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("active_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("active_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <TagSection
        title="Noch mehr Inspiration für deinen Aktivurlaub"
        cols="xl:grid-cols-4"
        items={[
          {
            title: t("active_link_element_col1_title"),
            items: [
              t("active_link_element_col1_item1"),
              t("active_link_element_col1_item2"),
              t("active_link_element_col1_item3"),
              t("active_link_element_col1_item4"),
              t("active_link_element_col1_item5"),
              t("active_link_element_col1_item6"),
            ],
          },
          {
            title: t("active_link_element_col2_title"),
            items: [
              t("active_link_element_col2_item1"),
              t("active_link_element_col2_item2"),
              t("active_link_element_col2_item3"),
              t("active_link_element_col2_item4"),
              t("active_link_element_col2_item5"),
              t("active_link_element_col2_item6"),
              t("active_link_element_col2_item7"),
              t("active_link_element_col2_item8"),
            ],
          },
          {
            title: t("active_link_element_col3_title"),
            items: [
              t("active_link_element_col3_item1"),
              t("active_link_element_col3_item2"),
              t("active_link_element_col3_item3"),
              t("active_link_element_col3_item4"),
              t("active_link_element_col3_item5"),
              t("active_link_element_col3_item6"),
            ],
          },
          {
            title: t("active_link_element_col4_title"),
            items: [
              t("active_link_element_col4_item1"),
              t("active_link_element_col4_item2"),
              t("active_link_element_col4_item3"),
              t("active_link_element_col4_item4"),
              t("active_link_element_col4_item5"),
              t("active_link_element_col4_item6"),
              t("active_link_element_col4_item7"),
              t("active_link_element_col4_item8"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default ActiveHolidays;

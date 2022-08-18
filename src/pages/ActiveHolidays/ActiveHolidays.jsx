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
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
// ImageGalleryBrick
import ImageGalleryBrick from "../../components/ImageGalleryBrick/ImageGalleryBrick";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Tab Element Oben/Aktivurlaub-Berge.jpg",
            detailsTitle: t("active_big_tab_element_title1"),
            detailsDesc: "",
            detailsReadMore: t("active_big_tab_element_text1"),
            cardTitle: "Top-Aktivreisen in den Bergen",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Tab Element Oben/Aktivurlaub-Meer.jpg",
            detailsTitle: t("active_big_tab_element_title2"),
            detailsDesc: t("active_big_tab_element_text2"),
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen am Meer",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Tab Element Oben/Aktivurlaub-Wellness.jpg",
            detailsTitle: t("active_big_tab_element_title3"),
            detailsDesc: t("active_big_tab_element_text3"),
            detailsReadMore: "Erfahre mehr über einen Surfurlaub in Spanien",
            cardTitle: "Top-Aktivreisen mit Wellnessangebot",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Tab Element Oben/Aktivurlaub-Gruppenreisen.jpg",
            detailsTitle: t("active_big_tab_element_title4"),
            detailsDesc: t("active_big_tab_element_text4"),
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen in der Gruppe",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Tab Element Oben/Aktivurlaub-Paare.jpg",
            detailsTitle: t("active_big_tab_element_title5"),
            detailsDesc: t("active_big_tab_element_text5"),
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen für Paare",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Tab Element Oben/Aktivurlaub-Freunde.jpg",
            detailsTitle: t("active_big_tab_element_title6"),
            detailsDesc: t("active_big_tab_element_text6"),
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen für Freund:innen",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Tab Element Oben/Aktivurlaub-Familie.jpg",
            detailsTitle: t("active_big_tab_element_title7"),
            detailsDesc: t("active_big_tab_element_text7"),
            detailsReadMore: "",
            cardTitle: "Top-Aktivreisen für Familien",
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Bild neben Text/Aktivurlaub-Oesterreich.jpg"
        }
        title={t("active_image_and_text_element_title1")}
        description={t("active_image_and_text_element_text1")}
        readMore={t("active_image_and_text_element_more1")}
      />
      <ListAndImage
        imgAlign="right"
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Bild neben Text/Aktivurlaub-Deutschland.jpg"
        }
        title={t("active_image_and_text_element_title2")}
        description={t("active_image_and_text_element_text2")}
        readMore={t("active_image_and_text_element_more2")}
      />
      <SingleColImg
        title={t("active_3_linked_images_title")}
        description={t("active_3_linked_images_subtitle")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Reiseziele/Aktivurlaub-Spanien.jpg",
            title: t("active_3_linked_images_item1"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Reiseziele/Aktivurlaub-Portugal.jpg",
            title: t("active_3_linked_images_item2"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Reiseziele/Aktivurlaub-Italien.jpg",
            title: t("active_3_linked_images_item3"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Divider/Aktivurlaub-Alpenueberquerung.jpg"
        }
        align="left"
        title={t("active_divider_wide_with_image_background_title")}
        description={t("active_divider_wide_with_image_background_text")}
        buttonTitle={t("active_divider_wide_with_image_background_button")}
      />
      <ImageGalleryBrick
        reverse={true}
        title={t("active_8_parted_linked_image_title")}
        description={t("active_8_parted_linked_image")}
        image1={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Yoga-Fitness-Reisen.jpg",
          title: t("active_8_parted_linked_image_tab1"),
        }}
        image2={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Wander-Gruppenreisen.jpg",
          title: t("active_8_parted_linked_image_tab2"),
        }}
        image3={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Yoga-Wander-Urlaube.jpg",
          title: t("active_8_parted_linked_image_tab3"),
        }}
        image4={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Wander-Wochenenden.jpg",
          title: t("active_8_parted_linked_image_tab4"),
        }}
        image5={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Kampfsport-Reisen.jpg",
          title: t("active_8_parted_linked_image_tab5"),
        }}
        image6={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Surfcamps.jpg",
          title: t("active_8_parted_linked_image_tab6"),
        }}
        image7={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Wandern-Genuss.jpg",
          title: t("active_8_parted_linked_image_tab7"),
        }}
        image8={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Linked Image Kategorien/Mountainbike-Reisen.jpg",
          title: t("active_8_parted_linked_image_tab8"),
        }}
      />
      <SingleCardSection
        title={t("active_offer_element_title")}
        description={t("active_offer_element")}
        items={[
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/activeHoliday/Divider/Aktivurlaub-Erfahrungen.jpg"
        }
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
        cardImageSrc={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/contact.jpg"
        }
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

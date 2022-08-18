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
// Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
//ImageGalleryBrick2
import ImageGalleryBrick2 from "../../components/ImageGalleryBrick2/ImageGalleryBrick2";
//Description
import Description from "../../components/Description/Description";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
//ImageGalleryFourPic
import ImageGalleryFourPic from "../../components/ImageGalleryFourPic/ImageGalleryFourPic";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const HikingHolidays = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-hiking-holiday"
        title={t("hiking_header_title")}
        description={t("hiking_header_subtitle")}
      />
      <HintSection
        items={[
          {
            icon: <Like size={38} />,
            title: t("hiking_3_symbol_title1"),
            description: t("hiking_3_symbol_text1"),
            readMore: "Zu den Details",
          },
          {
            icon: <Star size={38} />,
            title: t("hiking_3_symbol_title2"),
            description: t("hiking_3_symbol_text2"),
            readMore: "Zu den Details",
          },
          {
            icon: <Heart size={38} />,
            title: t("hiking_3_symbol_title3"),
            description: t("hiking_3_symbol_text3"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <ImageGalleryBrick2
        title={t("hiking_7_clickable_box_title")}
        description={t("hiking_7_clickable_box_subtitle")}
        image1={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Kategorien/Wander-Wochenenden.jpg",

          title: t("hiking_7_clickable_box_item1_title"),
          description: t("hiking_7_clickable_box_item1_desc"),
        }}
        image2={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Kategorien/Wandern-Wellness.jpg",
          title: t("hiking_7_clickable_box_item2_title"),
          description: t("hiking_7_clickable_box_item2_desc"),
        }}
        image3={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Kategorien/Standort-Wandern.jpg",
          title: t("hiking_7_clickable_box_item3_title"),
          description: t("hiking_7_clickable_box_item3_desc"),
        }}
        image4={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Kategorien/Wandern-Genuss.jpg",
          title: t("hiking_7_clickable_box_item4_title"),
          description: t("hiking_7_clickable_box_item4_desc"),
        }}
        image5={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Kategorien/Wandern-Trekking.jpg",
          title: t("hiking_7_clickable_box_item5_title"),
          description: t("hiking_7_clickable_box_item5_desc"),
        }}
        image6={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Kategorien/Wandern-Yoga.jpg",
          title: t("hiking_7_clickable_box_item6_title"),
          description: t("hiking_7_clickable_box_item6_desc"),
        }}
        image7={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Kategorien/Wandern-Alpenueberquerungen.jpg",
          title: t("hiking_7_clickable_box_item7_title"),
          description: t("hiking_7_clickable_box_item7_desc"),
        }}
      />
      <Description
        title={t("hiking_big_tab_element_title")}
        tabItems={[
          t("hiking_big_tab_element_tab1"),
          t("hiking_big_tab_element_tab2"),
          t("hiking_big_tab_element_tab3"),
          t("hiking_big_tab_element_tab4"),
        ]}
        tabCols="lg:grid-cols-4"
        tabContents={[
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Zielgruppen/Wandern-Gruppenreisen.jpg",

            detailsTitle: t("hiking_big_tab_element_tab1_title"),
            detailsDesc: t("hiking_big_tab_element_tab1_subtitle"),
            detailsReadMore: "",
            cardTitle: t("hiking_big_tab_element_tab1_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Zielgruppen/Wandern-Familien.jpg",
            detailsTitle: t("hiking_big_tab_element_tab2_title"),
            detailsDesc: t("hiking_big_tab_element_tab2_subtitle"),
            detailsReadMore: "",
            cardTitle: t("hiking_big_tab_element_tab2_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Zielgruppen/Wandern-Paare.jpg",
            detailsTitle: t("hiking_big_tab_element_tab3_title"),
            detailsDesc: t("hiking_big_tab_element_tab3_subtitle"),
            detailsReadMore: "",
            cardTitle: t("hiking_big_tab_element_tab3_more"),
            cardItems: [
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Zielgruppen/Wandern-Frauen.jpg",
            detailsTitle: t("hiking_big_tab_element_tab4_title"),
            detailsDesc: t("hiking_big_tab_element_tab4_subtitle"),
            detailsReadMore: "",
            cardTitle: t("hiking_big_tab_element_tab4_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
        title={t("hiking_3_clickable_boxes_title")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Fitnesslevel/Wandern-Anfaenger.jpg",

            title: t("hiking_3_clickable_boxes_item1"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Fitnesslevel/Wandern-Fortgeschritte.jpg",
            title: t("hiking_3_clickable_boxes_item2"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Fitnesslevel/Wandern-Profis.jpg",
            title: t("hiking_3_clickable_boxes_item3"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ImageGalleryFourPic
        title={t("hiking_4_clickable_box_title")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Reiseziele/Wandern-Deutschland.jpg",
            shadow: "80",
            title: t("hiking_4_clickable_box_item1"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Reiseziele/Wandern-Italien.jpg",
            shadow: "80",
            title: t("hiking_4_clickable_box_item2"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Reiseziele/Wandern-Schweiz.jpg",
            shadow: "80",
            title: t("hiking_4_clickable_box_item3"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Reiseziele/Wandern-Oesterreich.jpg",
            shadow: "80",
            title: t("hiking_4_clickable_box_item4"),
          },
        ]}
      />
      <ColorDivider
        title={t("hiking_divider_title")}
        description={t("hiking_divider_text")}
        buttonTitle={t("hiking_divider_button")}
      />
      <SingleCardSection
        title={t("hiking_offer_title")}
        description={t("hiking_offer_subtitle")}
        items={[
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
        title={t("hiking_offer_title2")}
        description={t("hiking_offer_subtitle2")}
        items={[
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Divider/Wandern-Divider-3.jpg"
        }
        align="left"
        title={t("hiking_divider_title2")}
        description={t("hiking_divider_text2")}
        buttonTitle={t("hiking_divider_button2")}
      />
      <ImageGalleryWindow
        title={t("hiking_4_clickable_box2_title")}
        description={t("hiking_4_clickable_box2_subtitle")}
        items={[
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Routen/Wandern-Dolomiten.jpg",
            title: t("hiking_4_clickable_box2_item1_title"),
            description: t("hiking_4_clickable_box2_item1_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Routen/Wandern-Kramerspitz.jpg",
            title: t("hiking_4_clickable_box2_item2_title"),
            description: t("hiking_4_clickable_box2_item2_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Routen/Wandern-Septimer.jpg",
            title: t("hiking_4_clickable_box2_item3_title"),
            description: t("hiking_4_clickable_box2_item3_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Routen/Wandern-Traunsee.jpg",
            title: t("hiking_4_clickable_box2_item4_title"),
            description: t("hiking_4_clickable_box2_item4_subtitle"),
          },
        ]}
      />
      <ContactUsSection
        title={t("hiking_contact_us_title")}
        descritpion={t("hiking_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("hiking_contact_us_input_first_name"),
          },
          { type: "text", placeholder: t("hiking_contact_us_input_email") },
        ]}
        formTextarea={t("hiking_contact_us_input_write_message")}
        formButton={t("hiking_contact_us_input_send_message")}
        cardImageSrc={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/contact.jpg"
        }
        cardTitle={t("hiking_contact_us_card_title")}
        cardDesc={t("hiking_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("hiking_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("hiking_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("hiking_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <SlideDivider
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/hiking-holiday/Divider/Wandern-Divider-1.jpg"
        }
        dark={true}
        items={[
          {
            description: t("hiking_divider_review_item1_text"),
            name: "Regina",
            date: "04.01.2021",
          },
          {
            description: t("hiking_divider_review_item2_text"),
            name: "Silke Roth",
            date: "21.04.2021",
          },
          {
            description: t("hiking_divider_review_item3_text"),
            name: "Maike Stahl",
            date: "11.11.2022",
          },
        ]}
      />
      <TagSection
        title={t("hiking_links_element_title")}
        cols="xl:grid-cols-3"
        items={[
          {
            title: t("hiking_links_element_col1_title"),
            items: [
              t("hiking_links_element_col1_item1"),
              t("hiking_links_element_col1_item2"),
              t("hiking_links_element_col1_item3"),
              t("hiking_links_element_col1_item4"),
            ],
          },
          {
            title: t("hiking_links_element_col2_title"),
            items: [
              t("hiking_links_element_col2_item1"),
              t("hiking_links_element_col2_item2"),
              t("hiking_links_element_col2_item3"),
              t("hiking_links_element_col2_item4"),
            ],
          },
          {
            title: t("hiking_links_element_col3_title"),
            items: [
              t("hiking_links_element_col3_item1"),
              t("hiking_links_element_col3_item2"),
              t("hiking_links_element_col3_item3"),
              t("hiking_links_element_col3_item4"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default HikingHolidays;

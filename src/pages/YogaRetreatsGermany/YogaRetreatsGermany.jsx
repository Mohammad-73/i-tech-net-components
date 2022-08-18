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
//ImageGalleryFourPic
import ImageGalleryFourPic from "../../components/ImageGalleryFourPic/ImageGalleryFourPic";
//HorizontalCardSection
import HorizontalCardSection from "../../components/horizontalCardSection/horizontalCardSection";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//ImageGalleryBrick2
import ImageGalleryBrick2 from "../../components/ImageGalleryBrick2/ImageGalleryBrick2";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const YogaRetreatsGermany = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-yoga-in-deutschland"
        title={t("germany_header_title")}
        description={t("germany_header_subtitle")}
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <HeartOrange size={56} />,
            title: t("germany_4_symbol_title1"),
            description: t("germany_4_symbol_text1"),
          },
          {
            icon: <LikeOrange size={56} />,
            title: t("germany_4_symbol_title2"),
            description: t("germany_4_symbol_text2"),
          },
          {
            icon: <StarOrange size={56} />,
            title: t("germany_4_symbol_title3"),
            description: t("germany_4_symbol_text3"),
          },
          {
            icon: <HeartOrange size={56} />,
            title: t("germany_4_symbol_title4"),
            description: t("germany_4_symbol_text4"),
          },
        ]}
      />
      <Description
        title={t("germany_divider_big_tab_title")}
        tabItems={[
          t("germany_divider_big_tab1"),
          t("germany_divider_big_tab2"),
          t("germany_divider_big_tab3"),
          t("germany_divider_big_tab4"),
          t("germany_divider_big_tab5"),
          t("germany_divider_big_tab6"),
        ]}
        tabCols="lg:grid-cols-6"
        tabContents={[
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Regionen/Yoga-Retreat-Deutschland-Ostsee.jpg",

            detailsTitle: t("germany_divider_big_tab1_title"),
            detailsDesc: t("germany_divider_big_tab1_text"),
            detailsReadMore: "",
            cardTitle: t("germany_divider_big_tab1_more"),
            cardItems: [
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
                title: "Idyllisches Yoga Retreat in der Lübecker Bucht",
                location: "Scharbeutz, Deutschland",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "260 €",
                priceTitle: "pro Nacht",
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
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Iyengar Yoga zwischen blauen Wellen & weißer Kreide",
                location: " Silenz, Rügen, Deutschland",
                calender: "01.04. - 01.11.2021",
                rateDesc: "",
                price: "70 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Regionen/Yoga-Retreat-Deutschland-Nordsee.jpg",
            detailsTitle: t("germany_divider_big_tab2_title"),
            detailsDesc: t("germany_divider_big_tab2_text"),
            detailsReadMore: "",
            cardTitle: t("germany_divider_big_tab2_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Innere Balance & neue Kraft auf Norderney",
                location: "Norderney, Deutschland",
                calender: "3 Termine im Jahr",
                rateDesc: "",
                price: "195 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Umfassendes Yoga-Erlebnis auf Langeoog",
                location: "Langeoog, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "179 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Wirksames Yoga-Wochenende auf Norderney",
                location: "Norderney, Deutschland",
                calender: "30.08. - 02.09.2021",
                rateDesc: "",
                price: "210 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga-Wochenende auf Langeoog",
                location: "Langeoog, Deutschland",
                calender: "10.06. - 13.06.2021 ",
                rateDesc: "",
                price: "179 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Regionen/Yoga-Retreat-Deutschland-Bayern.jpg",
            detailsTitle: t("germany_divider_big_tab3_title"),
            detailsDesc: t("germany_divider_big_tab3_text"),
            detailsReadMore: "",
            cardTitle: t("germany_divider_big_tab3_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwelt",
                location: "Aschau im Chiemgau, Deutschland",
                calender: "09.01. - 19.12.2021",
                rateDesc: "",
                price: "91 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga Wochenende in Bayern: Raum und Zeit für Dich",
                location: "Zell Am Main, Deutschland",
                calender: "3 Termine im Jahr",
                rateDesc: "",
                price: "199,50 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title:
                  "Wirksames Yoga-Wochenende Yoga- und Wanderwoche für Frauen im blauen Land Norderney",
                location: " Ohlstadt, Deutschland ",
                calender: "21.08. - 28.08.2021",
                rateDesc: "",
                price: "156 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Regionen/Yoga-Retreat-Deutschland-Schwarzwald.jpg",
            detailsTitle: t("germany_divider_big_tab4_title"),
            detailsDesc: t("germany_divider_big_tab4_text"),
            detailsReadMore: "",
            cardTitle: t("germany_divider_big_tab4_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Stille Retreat an der Antonius-Quelle im Schwarzwald",
                location: "Bad Antogast, Deutschland",
                calender: "15 Termine im Jahr",
                rateDesc: "",
                price: "98 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga & Entschleunigung im Naturpark Stromberg",
                location: " Häfnerhaslach, Deutschland",
                calender: "10 Termine im Jahr",
                rateDesc: "",
                price: "75 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Neustart: Yoga-Retreat in der Natur Oberschwabens",
                location: "Eintürnen, Deutschland",
                calender: "25.08. - 29.08.2021 ",
                rateDesc: "",
                price: "150 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga-Regenerations-Wochenende im Naturpark",
                location: " Häfnerhaslach, Deutschland",
                calender: "3 Termine im Jahr",
                rateDesc: "",
                price: "125 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Regionen/Yoga-Retreat-Deutschland-Brandenburg.jpg",
            detailsTitle: t("germany_divider_big_tab5_title"),
            detailsDesc: t("germany_divider_big_tab5_text"),
            detailsReadMore: "",
            cardTitle: t("germany_divider_big_tab5_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title:
                  "Yoga, Behmfasten und Wandern in Europas größtem Seengebiet",
                location: "Flecken Zechlin, Deutschland",
                calender: "10 Termine im Jahr",
                rateDesc: "",
                price: "150 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Miniretreat mitten im Potsdamer Seengebiet",
                location: "Nedlitz, Deutschland",
                calender: "3 Termine im Jahr",
                rateDesc: "",
                price: "215 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga, Basenfasten & Wandern am Schwarzen See",
                location: "Flecken Zechlin, Deutschland",
                calender: "11 Termine im Jahr",
                rateDesc: "",
                price: "151 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga, Hildegardfasten & Wandern in Mecklenburg",
                location: " Flecken Zechlin, Deutschland",
                calender: "20.11. - 26.11.2021",
                rateDesc: "",
                price: "151 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Regionen/Yoga-Retreat-Deutschland-NRW.jpg",
            detailsTitle: t("germany_divider_big_tab6_title"),
            detailsDesc: t("germany_divider_big_tab6_text"),
            detailsReadMore: "",
            cardTitle: t("germany_divider_big_tab6_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Deep Relax Yoga-Woche im Bergischen Land",
                location: " Wermelskirchen, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "202 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga-Erfahrung im größten Yogazentrum Europas ",
                location: "Bad Meinberg, Deutschland",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "53 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Yoga- & Soul-Wochenende im Naherholungsgebiet",
                location: "Wermelskirchen, Deutschland",
                calender: "2 Termine im Jahr",
                rateDesc: "",
                price: "224 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Zeit für dich: Yoga-Retreat in der Nordeifel",
                location: "Tondorf, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "157 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <ImageGalleryFourPic
        title={t("germany_4_clickable_box_title")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Retreat Arten/Yoga-Wochenenden.jpg",

            shadow: "80",
            title: t("germany_4_clickable_box_item1_title"),
            description: t("germany_4_clickable_box_item1_text"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Retreat Arten/Stille-Retreats.jpg",
            shadow: "80",
            title: t("germany_4_clickable_box_item2_title"),
            description: t("germany_4_clickable_box_item2_text"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Retreat Arten/Spirituelle-Retreats.jpg",
            shadow: "80",
            title: t("germany_4_clickable_box_item3_title"),
            description: t("germany_4_clickable_box_item3_text"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Retreat Arten/Yoga-Meditation.jpg",
            shadow: "80",
            title: t("germany_4_clickable_box_item4_title"),
            description: t("germany_4_clickable_box_item4_text"),
          },
        ]}
      />
      <HorizontalCardSection
        title={t("germany_4_slide_title")}
        description={t("germany_4_slide_subtitle")}
        items={[
          {
            image:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Lehrerinnen/Yogalehrer-Friethjof-Bluhm.jpg",

            description: t("germany_4_slide_item1_text"),
            name: "Frithjof Bluhm",
            details: t("germany_4_slide_item1_desc"),
          },
          {
            image:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Lehrerinnen/yogalehrerin-sylvia-asmodena.jpg",
            description: t("germany_4_slide_item2_text"),
            name: "Sylvia Asmodena Kurtar",
            details: t("germany_4_slide_item2_desc"),
          },
          {
            image:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Lehrerinnen/Yogalehrerin-Sara-Lyn.jpg",
            description: t("germany_4_slide_item3_text"),
            name: "Sara-Lyn Chana",
            details: t("germany_4_slide_item3_desc"),
          },
          {
            image:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Lehrerinnen/Yoga-Lehrerin-Yogakasha.jpg",
            description: t("germany_4_slide_item4_text"),
            name: "Tammy Assanoff",
            details: t("germany_4_slide_item4_desc"),
          },
        ]}
      />
      <ColorDivider
        title={t("germany_narrow_divider_element_title")}
        description={t("germany_narrow_divider_element_text")}
        buttonTitle={t("germany_narrow_divider_element_button")}
      />
      <ImageGallery3
        title={t("germany_6_clickable_boxes_title")}
        description={t("germany_6_clickable_boxes_subtitle")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Center.jpg",

            shadow: "80",
            title: t("germany_6_clickable_boxes_item1"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Fastenhof.jpg",
            shadow: "80",
            title: t("germany_6_clickable_boxes_item2"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Biohotel.jpg",
            shadow: "80",
            title: t("germany_6_clickable_boxes_item3"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Designholzhaus.jpg",
            shadow: "80",
            title: t("germany_6_clickable_boxes_item4"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Reetdachhaus.jpg",
            shadow: "80",
            title: t("germany_6_clickable_boxes_item5"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Unterkuenfte/Yoga-Retreat-im-Kloster.jpg",
            shadow: "80",
            title: t("germany_6_clickable_boxes_item6"),
          },
        ]}
      />
      <SingleCardSection
        title={t("germany_offer_element_title")}
        description={t("germany_offer_element_subtitle")}
        items={[
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga-Wochenende: Kraft tanken in der Casa Inspira",
            location: "Tondorf, Deutschland",
            calender: "7 Termine im Jahr",
            rateDesc: "",
            price: "157 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Neustart: Yoga-Retreat in der Natur Oberschwabens",
            location: "Eintürnen, Deutschland",
            calender: "25.08. - 29.08.2021 ",
            rateDesc: "",
            price: "150 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Miniretreat mitten im Potsdamer Seengebiet",
            location: "Nedlitz, Deutschland",
            calender: "3 Termine im Jahr",
            rateDesc: "",
            price: "215 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Zeit für dich: Yoga Wochenende an der Ostsee",
            location: "Wendelstorf, Deutschland",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "163 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Deep Relax Yoga-Woche im Bergischen Land",
            location: " Wermelskirchen, Deutschland",
            calender: "4 Termine im Jahr",
            rateDesc: "",
            price: "202 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga & Entschleunigung im Naturpark Stromberg",
            location: " Häfnerhaslach, Deutschland",
            calender: "10 Termine im Jahr",
            rateDesc: "",
            price: "75 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga Wochenende in Bayern: Raum und Zeit für Dich",
            location: "Zell Am Main, Deutschland",
            calender: "3 Termine im Jahr",
            rateDesc: "",
            price: "199,50 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga- & Soul-Wochenende im Naherholungsgebiet",
            location: "Wermelskirchen, Deutschland",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "224 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Zeit für dich: Yoga-Retreat in der Nordeifeln",
            location: " Tondorf, Deutschland",
            calender: "4 Termine im Jahr",
            rateDesc: "",
            price: "157 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga-Regenerations-Wochenende im Naturpark",
            location: " Häfnerhaslach, Deutschland",
            calender: "3 Termine im Jahr",
            rateDesc: "",
            price: "125 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <ColorDivider
        title="Welches Yoga Retreat passt zu dir?"
        description="Lass dich von unseren Expert:innen beraten und finde dein Traumretreat!"
        buttonTitle="Kontakt aufnehmen"
      />
      <ImageGalleryBrick2
        title={t("germany_7_clickable_boxex_title")}
        image1={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Kategorien/Yoga-Wellness.jpg",

          title: t("germany_7_clickable_boxex_item1"),
        }}
        image2={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Kategorien/Yoga-Fasten.jpg",
          title: t("germany_7_clickable_boxex_item2"),
        }}
        image3={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Kategorien/Yoga-Flexible-Stornierungsbedingungen.jpg",
          title: t("germany_7_clickable_boxex_item3"),
        }}
        image4={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Kategorien/Yoga-Wandern.jpg",
          title: t("germany_7_clickable_boxex_item4"),
        }}
        image5={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Kategorien/Yoga-Anfaenger.jpg",
          title: t("germany_7_clickable_boxex_item5"),
        }}
        image6={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Kategorien/Yoga-Surf.jpg",
          title: t("germany_7_clickable_boxex_item6"),
        }}
        image7={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Kategorien/Yoga-Fahrrad.jpg",
          title: t("germany_7_clickable_boxex_item7"),
        }}
      />
      <SingleCardSection
        title={t("germany_offer_element2_title")}
        items={[
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwelt",
            location: "Aschau im Chiemgau, Deutschland",
            calender: "09.01. - 19.12.2021",
            rateDesc: "",
            price: "91 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Innere Balance & neue Kraft auf Norderney",
            location: "Norderney, Deutschland",
            calender: "3 Termine im Jahr",
            rateDesc: "",
            price: "195 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga-Wochenende beim Seeheilbad Scharbeutz",
            location: "Scharbeutz, Deutschland",
            calender: "07.10. - 10.10.2021",
            rateDesc: "",
            price: "290 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Iyengar Yoga zwischen blauen Wellen & weißer Kreide",
            location: " Silenz, Rügen, Deutschland",
            calender: "01.04. - 01.11.2021",
            rateDesc: "",
            price: "70 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Umfassendes Yoga-Erlebnis auf Langeoog",
            location: "Langeoog, Deutschland",
            calender: "4 Termine im Jahr",
            rateDesc: "",
            price: "179 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Wirksames Yoga-Wochenende auf Norderney",
            location: "Norderney, Deutschland",
            calender: "30.08. - 02.09.2021",
            rateDesc: "",
            price: "210 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga-Erfahrung im größten Yogazentrum Europas",
            location: "Bad Meinberg, Deutschland",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "53 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Yoga-Wochenende auf Langeoog",
            location: "Langeoog, Deutschland",
            calender: "10.06. - 13.06.2021 ",
            rateDesc: "",
            price: "179 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Rügen mal anders: Iyengar Yoga und Windsurfen",
            location: "Silenz, Rügen, Deutschland",
            calender: "16.05. - 19.09.",
            rateDesc: "",
            price: "140 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Klassisches Yoga-Retreat im nordfriesischen Tönning",
            location: " Tönning, Deutschland",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "184 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Stille Retreat an der Antonius-Quelle im Schwarzwald",
            location: "Bad Antogast, Deutschland",
            calender: "15 Termine im Jahr",
            rateDesc: "",
            price: "98 €",
            priceTitle: "pro Nacht",
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
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/YogaRetreatsGermany/Divider/sunset-3087288_1920 (1).jpg"
        }
        align="left"
        title={t("germany_divider_title")}
        buttonTitle={t("germany_divider_button")}
      />
      <HintSection
        title={t("germany_3_symbol_element_title")}
        items={[
          {
            icon: <Like size={38} />,
            title: t("germany_3_symbol_element_item1_title"),
            description: t("germany_3_symbol_element_item1_subtitle"),
            readMore: "Zu den Details",
          },
          {
            icon: <Star size={38} />,
            title: t("germany_3_symbol_element_item2_title"),
            description: t("germany_3_symbol_element_item2_subtitle"),
            readMore: "Zu den Details",
          },
          {
            icon: <Heart size={38} />,
            title: t("germany_3_symbol_element_item3_title"),
            description: t("germany_3_symbol_element_item3_subtitle"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <ContactUsSection
        title={t("germany_contact_us_title")}
        descritpion={t("germany_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("germany_contact_us_input_first_name"),
          },
          { type: "text", placeholder: t("germany_contact_us_input_email") },
        ]}
        formTextarea={t("germany_contact_us_input_write_message")}
        formButton={t("germany_contact_us_input_send_message")}
        cardImageSrc={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/contact.jpg"
        }
        cardTitle={t("germany_contact_us_card_title")}
        cardDesc={t("germany_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("germany_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("germany_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("germany_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <TagSection
        title={t("germany_links_title")}
        cols="xl:grid-cols-3"
        items={[
          {
            title: t("germany_links_col1_title"),
            items: [
              t("germany_links_col1_item1"),
              t("germany_links_col1_item2"),
              t("germany_links_col1_item3"),
              t("germany_links_col1_item4"),
              t("germany_links_col1_item5"),
              t("germany_links_col1_item6"),
            ],
          },
          {
            title: t("germany_links_col2_title"),
            items: [
              t("germany_links_col2_item1"),
              t("germany_links_col2_item2"),
              t("germany_links_col2_item3"),
              t("germany_links_col2_item4"),
              t("germany_links_col2_item5"),
            ],
          },
          {
            title: t("germany_links_col3_title"),
            items: [
              t("germany_links_col3_item1"),
              t("germany_links_col3_item2"),
              t("germany_links_col3_item3"),
              t("germany_links_col3_item4"),
              t("germany_links_col3_item5"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default YogaRetreatsGermany;

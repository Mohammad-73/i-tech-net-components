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
import hImg5 from "../../assets/yogaRetreats/Lehrerinnen/yogalehrerin-fastenhof-behm.jpg";
import hImg6 from "../../assets/yogaRetreats/Lehrerinnen/Yoga-Lehrerin-Nella-Yoga.jpg";
import hImg7 from "../../assets/yogaRetreats/Lehrerinnen/yogalehrerin-globeseekers.jpg";
import hImg8 from "../../assets/yogaRetreats/Lehrerinnen/Yoga-Lehrer-simha.jpg";
//Description
import Description from "../../components/Description/Description";
import Moliets from "../../assets/yogaRetreats/Yoga Arten/Hatha-Yoga.jpg";
import Yin from "../../assets/yogaRetreats/Yoga Arten/Yin-Yoga.jpg";
import Iyengar from "../../assets/yogaRetreats/Yoga Arten/Iyengar-Yoga.jpg";
import Vinyasa from "../../assets/yogaRetreats/Yoga Arten/Vinyasa-Yoga.jpg";
import Aerial from "../../assets/yogaRetreats/Yoga Arten/Aerial-Yoga.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
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

//RateCardSection
import RateCardSection from "../../components/RateCardSection/RateCardSection";
import RateImg from "../../assets/images/g1.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";

//TagSection
import TagSection from "../../components/TagSection/TagSection";

const YogaRetreats = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-yoga-retreats"
        title={t("yoga_retreats_header_title")}
        description={t("yoga_retreats_header_subtitle")}
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <HeartOrange size={56} />,
            title: t("yoga_retreats_4_symbols_title1"),
            description: t("yoga_retreats_4_symbols_text1"),
          },
          {
            icon: <LikeOrange size={56} />,
            title: t("yoga_retreats_4_symbols_title2"),
            description: t("yoga_retreats_4_symbols_text2"),
          },
          {
            icon: <StarOrange size={56} />,
            title: t("yoga_retreats_4_symbols_title3"),
            description: t("yoga_retreats_4_symbols_text3"),
          },
          {
            icon: <HeartOrange size={56} />,
            title: t("yoga_retreats_4_symbols_title4"),
            description: t("yoga_retreats_4_symbols_text4"),
          },
        ]}
      />
      <ListAndImage
        mainTitle="Entdecke die besten Reiseziele für dein Yoga Retreat"
        mainDescription="Die Umgebung spielt eine zentrale Rolle für die Atmosphäre und die Yogapraxis bei deinem Retreat. Wohin soll deine Reise gehen? Eine Welt voller Inspiration und unvergesslichen Erlebnissen wartet auf dich!"
        image={ListAndImage1}
        title={t("yoga_retreats_white_box1_title")}
        description={t("yoga_retreats_white_box1_text1")}
      />
      <SingleColImg
        items={[
          {
            img: Col31,
            title: t("yoga_retreats_box1_4_clickable_box1"),
          },
          {
            img: Col32,
            title: t("yoga_retreats_box1_4_clickable_box2"),
          },
          {
            img: Col33,
            title: t("yoga_retreats_box1_4_clickable_box3"),
          },
          {
            img: Col34,
            title: t("yoga_retreats_box1_4_clickable_box4"),
          },
        ]}
        cols="md:grid-cols-4"
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage2}
        title={t("yoga_retreats_white_box2_title")}
        description={t("yoga_retreats_white_box2_text1")}
      />
      <SingleColImg
        items={[
          {
            img: Col35,
            title: t("yoga_retreats_box2_4_clickable_box1"),
          },
          {
            img: Col36,
            title: t("yoga_retreats_box2_4_clickable_box2"),
          },
          {
            img: Col37,
            title: t("yoga_retreats_box2_4_clickable_box3"),
          },
          {
            img: Col38,
            title: t("yoga_retreats_box2_4_clickable_box4"),
          },
        ]}
        cols="md:grid-cols-4"
      />
      <ColorDivider
        title={t("yoga_retreats_narrow_divider_element_title")}
        description={t("yoga_retreats_narrow_divider_element_text")}
        buttonTitle={t("yoga_retreats_narrow_divider_element_button")}
      />
      <ImageGalleryFivePic
        title={t("yoga_retreats_5_clickable_box_title")}
        reverse={true}
        image1={{
          img: image1,
          title: t("yoga_retreats_5_clickable_box_item4_title"),
          description: t("yoga_retreats_5_clickable_box_item4_title"),
        }}
        image2={{
          img: image2,
          title: t("yoga_retreats_5_clickable_box_item2_title"),
          description: t("yoga_retreats_5_clickable_box_item2_title"),
        }}
        image5={{
          img: image5,
          title: t("yoga_retreats_5_clickable_box_item5_title"),
          description: t("yoga_retreats_5_clickable_box_item5_title"),
        }}
        image3={{
          img: image3,
          title: t("yoga_retreats_5_clickable_box_item3_title"),
          description: t("yoga_retreats_5_clickable_box_item3_title"),
        }}
        image4={{
          img: image4,
          title: t("yoga_retreats_5_clickable_box_item1_title"),
          description: t("yoga_retreats_5_clickable_box_item1_title"),
        }}
      />
      <SingleCardSection
        title={t("yoga_retreats_offer_element_4_part")}
        items={[
          {
            cardImage: cardImage,
            title: "Veganes Yoga Retreat: Achtsamkeit auf Gran Canaria",
            location: "Arucas, Gran Canaria",
            calender: "15 Termine im Jahr",
            rateDesc: "",
            price: "114 €",
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
            title: "Yoga, Surfen & Kochen an der Algarve in Portugal",
            location: "Aljezur, Portugal",
            calender: "4 Termine im JahrS",
            rateDesc: "",
            price: "143 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
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
            cardImage: cardImage,
            title: "Yoga & Pilates: Deine Auszeit zum Wohlfühlen",
            location: "Villaverde, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "105 €",
            priceTitle: "pro NachtS",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
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
            cardImage: cardImage,
            title: "Growing Happiness Yoga Retreat an der Costa Verde",
            location: "Gelfa, Portugal",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "118 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Umfassendes Yoga Retreat auf der grünen Insel Mijet",
            location: "Mijet, Kroatien",
            calender: "18.09. - 25.09.2021",
            rateDesc: "",
            price: "228 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Yoga-Trip durch die Wüste Marokkos",
            location: " Ait Ben Haddou, Marokko",
            calender: "2 Termine im Jahr",
            rateDesc: "",
            price: "199 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
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
            cardImage: cardImage,
            title: "Yoga Retreat im Märchenwald Sloweniens",
            location: "Most Na Soči, Slowenien",
            calender: "19.06. - 26.06.2021",
            rateDesc: "",
            price: "228 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Iyengar Yoga zwischen blauen Wellen & weißer KreideS",
            location: " Silenz, Rügen, Deutschland",
            calender: "01.04. - 01.11.2021",
            rateDesc: "",
            price: "70 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Yoga, Behmfasten und Wandern in Europas größtem Seengebiet",
            location: "Flecken Zechlin, Deutschland",
            calender: "10 Termine im Jahr",
            rateDesc: "",
            price: "150 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Traumhaftes Yoga Retreat an der Nordküste Siziliens",
            location: " Cefalù, Sizilien",
            calender: "09.10. - 16.10.2021 ",
            rateDesc: "",
            price: "164 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Yoga Retreat im oberösterreichischen Mühlviertel",
            location: " Altenfeden, Österreich",
            calender: "Ganzjährig buchbar",
            rateDesc: "",
            price: "120 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Zeit für dich: Yoga-Retreat in der Nordeifel",
            location: " Tondorf, Deutschland",
            calender: "4 Termine im Jahr",
            rateDesc: "",
            price: "157 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
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
            cardImage: cardImage,
            title: "Yoga-Auszeit in idyllischer Finca auf Mallorca",
            location: " Mallorca, Spanien",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "130 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        image={Suchst}
        align="left"
        title={t("yoga_retreats_divider_title")}
        description={t("yoga_retreats_divider_text")}
        buttonTitle={t("yoga_retreats_divider_button")}
      />
      <ImageGallery3
        title={t("yoga_retreats_6_clickable_boxes_title")}
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: t("yoga_retreats_6_clickable_boxes_item1"),
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: t("yoga_retreats_6_clickable_boxes_item2"),
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: t("yoga_retreats_6_clickable_boxes_item3"),
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: t("yoga_retreats_6_clickable_boxes_item4"),
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: t("yoga_retreats_6_clickable_boxes_item5"),
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: t("yoga_retreats_6_clickable_boxes_item6"),
          },
        ]}
      />
      <HorizontalCardSection
        title={t("yoga_retreats_2_slide_title")}
        description={t("yoga_retreats_2_slide_subTitle")}
        items={[
          {
            image: hImg1,
            description: t("yoga_retreats_2_slide_desc1"),
            name: t("yoga_retreats_2_slide_name1"),
            details: "Yogalehrerin aus Köln",
          },
          {
            image: hImg2,
            description: t("yoga_retreats_2_slide_desc2"),
            name: t("yoga_retreats_2_slide_name2"),
            details: "Iyengar Yogalehrerin in Portugal",
          },
          {
            image: hImg3,
            description: t("yoga_retreats_2_slide_desc3"),
            name: t("yoga_retreats_2_slide_name3"),
            details: "Yogalehrer aus Berlin",
          },
          {
            image: hImg4,
            description: t("yoga_retreats_2_slide_desc4"),
            name: t("yoga_retreats_2_slide_name4"),
            details: "Yogalehrerin auf Gran Canaria",
          },
          {
            image: hImg5,
            description: t("yoga_retreats_2_slide_desc5"),
            name: t("yoga_retreats_2_slide_name5"),
            details: "Fastenleiterin, CQM-Coach und Yogalehrerin",
          },
          {
            image: hImg6,
            description: t("yoga_retreats_2_slide_desc6"),
            name: t("yoga_retreats_2_slide_name6"),
            details: "Yogalehrerin aus Klagenfurt am Wörthersee",
          },
          {
            image: hImg7,
            description: t("yoga_retreats_2_slide_desc7"),
            name: t("yoga_retreats_2_slide_name7"),
            details: "Yogalehrerin im Zillertal",
          },
          {
            image: hImg8,
            description: t("yoga_retreats_2_slide_desc8"),
            name: t("yoga_retreats_2_slide_name8"),
            details: "Yogalehrer aus Baden-Württemberg",
          },
        ]}
      />
      <Description
        titel={t("yoga_retreats_big_tab_element_title")}
        tabItems={[
          t("yoga_retreats_big_tab_element_tab1"),
          t("yoga_retreats_big_tab_element_tab2"),
          t("yoga_retreats_big_tab_element_tab3"),
          t("yoga_retreats_big_tab_element_tab4"),
          t("yoga_retreats_big_tab_element_tab5"),
        ]}
        tabCols="lg:grid-cols-5"
        tabContents={[
          {
            detailsImage: Moliets,
            detailsTitle: t("yoga_retreats_big_tab_element_tab1_title"),
            detailsDesc: t("yoga_retreats_big_tab_element_tab1_subtitle"),
            detailsReadMore: "",
            cardTitle: t("yoga_retreats_big_tab_element_tab1_more"),
            cardItems: [
              {
                cardImage: cardImage,
                title: "Hatha Yoga-Wochenende in ehemaligem Kloster",
                location: " Damme, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "198 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Komfort Yoga- & Meditations-Auszeit in Brand",
                location: "Brand, Österreich",
                calender: "15 Termine im Jahr",
                rateDesc: "",
                price: "298 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Deep Relax Yoga-Woche im Bergischen Land",
                location: " Wermelskirchen, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "202 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Erholsame Yoga-Auszeit im Lifestyle Resort",
                location: " Mellau, Österreich",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "273 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Yin,
            detailsTitle: t("yoga_retreats_big_tab_element_tab2_title"),
            detailsDesc: t("yoga_retreats_big_tab_element_tab2_subtitle"),
            detailsReadMore: "",
            cardTitle: t("yoga_retreats_big_tab_element_tab2_more"),
            cardItems: [
              {
                cardImage: cardImage,
                title: "Zeit für dich: Yoga-Retreat in der Nordeifel",
                location: " Tondorf, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "157 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "YinYourMind: Yin Yoga Retreat in Nordportugal",
                location: "Gelfa, Portugal",
                calender: "18.09. - 25.09.2021",
                rateDesc: "",
                price: "114 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Deep Relax Yoga-Woche im Bergischen Land",
                location: "Wermelskirchen, Deutschland",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "202 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Iyengar,
            detailsTitle: t("yoga_retreats_big_tab_element_tab3_title"),
            detailsDesc: t("yoga_retreats_big_tab_element_tab3_subtitle"),
            detailsReadMore: "",
            cardTitle: t("yoga_retreats_big_tab_element_tab3_more"),
            cardItems: [
              {
                cardImage: cardImage,
                title: "Iyengar Yoga: Für ein ausgewogenes Leben",
                location: " Aljezur, Portugal",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "143 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Rügen mal anders: Iyengar Yoga und Windsurfen",
                location: "Silenz, Rügen, Deutschland",
                calender: "16.05. - 19.09.",
                rateDesc: "",
                price: "140 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Women’s Wisdom: Iyengar Yoga in Portugal",
                location: "Aljezur, Portugal",
                calender: "04.09. - 10.09.2021",
                rateDesc: "",
                price: "143 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Iyengar Yoga zwischen blauen Wellen & weißer Kreide",
                location: " Silenz, Rügen, Deutschland",
                calender: "01.04. - 01.11.2021",
                rateDesc: "",
                price: "70 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Vinyasa,
            detailsTitle: t("yoga_retreats_big_tab_element_tab4_title"),
            detailsDesc: t("yoga_retreats_big_tab_element_tab4_subtitle"),
            detailsReadMore: "",
            cardTitle: t("yoga_retreats_big_tab_element_tab4_more"),
            cardItems: [
              {
                cardImage: cardImage,
                title: "Yoga, Fitness & Wandern in der Toskana",
                location: " Montegonzi, Italien",
                calender: "01.04. - 31.11.2021",
                rateDesc: "",
                price: "190 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Harmonischer Vinyasa-Flow am mächtigen Atlantik",
                location: "Gelfa, Portugal",
                calender: "12.06.2021 - 19.06.2021",
                rateDesc: "",
                price: "114 €",
                priceTitle: "pro nacht",
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
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Veganes Yoga Retreat: Achtsamkeit auf Gran Canaria",
                location: "Arucas, Gran Canaria",
                calender: "15 Termine im Jahr",
                rateDesc: "",
                price: "114 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Aerial,
            detailsTitle: t("yoga_retreats_big_tab_element_tab5_title"),
            detailsDesc: t("yoga_retreats_big_tab_element_tab5_subtitle"),
            detailsReadMore: "",
            cardTitle: t("yoga_retreats_big_tab_element_tab5_more"),
            cardItems: [
              {
                cardImage: cardImage,
                title: "Aerial Yoga im Tamarindos stylischem Yoga-Hostel",
                location: "Tamarindo, Costa Rica",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "65 €",
                priceTitle: "pro Nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Yoga Village in Canggu: Luxus & Erholung",
                location: "Canggu, Bali",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "88 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Yoga Retreat mit Dschungel-Feeling in Costa Rica",
                location: "Santa Teresa, Costa Rica",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "34 €",
                priceTitle: "pro nacht",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <ImageGalleryWindow
        title={t("yoga_retreats_4_clickable_box_title")}
        items={[
          {
            shadowSize: "80",
            img: wImg1,
            title: t("yoga_retreats_4_clickable_box_item1"),
            description:
              "Genieße ganzheitliche Wanderungen in der Natur gespickt mit Meditationen und Atemübungen.",
          },
          {
            shadowSize: "80",
            img: wImg2,
            title: t("yoga_retreats_4_clickable_box_item2"),
            description:
              "Stärke deinen Rücken und deine innere Mitte mit dieser faszinierenden Mischung aus Workout und Erdung.",
          },
          {
            shadowSize: "80",
            img: wImg3,
            title: t("yoga_retreats_4_clickable_box_item3"),
            description:
              "Wenn dir der sportliche Aspekt beim Yoga zu kurz kommt, dann kombiniere Yoga mit Fitness um dich voll auszulasten!",
          },
          {
            shadowSize: "80",
            img: wImg4,
            title: t("yoga_retreats_4_clickable_box_item4"),
            description:
              "Zwei Sportarten, die Hand in Hand gehen und nur voneinander profitieren: Erlebe den ultimativen Spaßfaktor!",
          },
        ]}
      />
      <SingleColImg
        title={t("yoga_retreats_3_clickable_box_title")}
        items={[
          {
            img: Col39,
            title: t("yoga_retreats_3_clickable_box_item1"),
            description: t("yoga_retreats_3_clickable_box_item1_desc"),
          },
          {
            img: Col40,
            title: t("yoga_retreats_3_clickable_box_item2"),
            description: t("yoga_retreats_3_clickable_box_item2_desc"),
          },
          {
            img: Col41,
            title: t("yoga_retreats_3_clickable_box_item3"),
            description: t("yoga_retreats_3_clickable_box_item3_desc"),
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
        title={t("yoga_retreats_7_clickable_box_title")}
        image1={{
          img: image6,
          title: t("yoga_retreats_7_clickable_box_item1_title"),
          description: t("yoga_retreats_7_clickable_box_item1_desc"),
        }}
        image2={{
          img: image7,
          title: t("yoga_retreats_7_clickable_box_item2_title"),
          description: t("yoga_retreats_7_clickable_box_item2_desc"),
        }}
        image3={{
          img: image8,
          title: t("yoga_retreats_7_clickable_box_item3_title"),
          description: t("yoga_retreats_7_clickable_box_item3_desc"),
        }}
        image4={{
          img: image9,
          title: t("yoga_retreats_7_clickable_box_item4_title"),
          description: t("yoga_retreats_7_clickable_box_item4_desc"),
        }}
        image5={{
          img: image10,
          title: t("yoga_retreats_7_clickable_box_item5_title"),
          description: t("yoga_retreats_7_clickable_box_item5_desc"),
        }}
        image6={{
          img: image11,
          title: t("yoga_retreats_7_clickable_box_item6_title"),
          description: t("yoga_retreats_7_clickable_box_item6_desc"),
        }}
        image7={{
          img: image12,
          title: t("yoga_retreats_7_clickable_box_item7_title"),
          description: t("yoga_retreats_7_clickable_box_item7_desc"),
        }}
      />
      <DividerImg
        image={welt}
        align="center"
        title={t("yoga_retreats_divider2_title")}
        buttonTitle={t("yoga_retreats_divider2_button")}
      />
      <HintSection
        title={t("yoga_retreats_3_symbol_title")}
        items={[
          {
            icon: <Like size={38} />,
            title: t("yoga_retreats_3_symbol_title1"),
            description: t("yoga_retreats_3_symbol_subtitle1"),
            readMore: "Zu den Details",
          },
          {
            icon: <Star size={38} />,
            title: t("yoga_retreats_3_symbol_title2"),
            description: t("yoga_retreats_3_symbol_subtitle2"),
            readMore: "Zu den Details",
          },
          {
            icon: <Heart size={38} />,
            title: t("yoga_retreats_3_symbol_title2"),
            description: t("yoga_retreats_3_symbol_subtitle3"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <RateCardSection
        title={t("yoga_retreats_review_element_title")}
        items={[
          {
            rateName: " Julia Gitzler",
            rateDesc: t("yoga_retreats_review_element_desc1"),
            rateImage: RateImg,
            rateCalendar: "30.04.2021",
            rateFootNote: t("yoga_retreats_review_element_more1"),
          },
          {
            rateName: "Michaela",
            rateDesc: t("yoga_retreats_review_element_desc2"),
            rateImage: RateImg,
            rateCalendar: "01.02.2021",
            rateFootNote: t("yoga_retreats_review_element_more2"),
          },
          {
            rateName: "Uwe Poppitz,",
            rateDesc: t("yoga_retreats_review_element_desc3"),
            rateImage: RateImg,
            rateCalendar: "12.10.2020",
            rateFootNote: t("yoga_retreats_review_element_more3"),
          },
          {
            rateName: "Silke Roth",
            rateDesc: t("yoga_retreats_review_element_desc4"),
            rateImage: RateImg,
            rateCalendar: "18.09.2020",
            rateFootNote: t("yoga_retreats_review_element_more4"),
          },
          {
            rateName: "Melanie",
            rateDesc: t("yoga_retreats_review_element_desc5"),
            rateImage: RateImg,
            rateCalendar: "29.10.2019",
            rateFootNote: t("yoga_retreats_review_element_more5"),
          },
          {
            rateName: "Tina",
            rateDesc: t("yoga_retreats_review_element_desc6"),
            rateImage: RateImg,
            rateCalendar: "17.06.2019",
            rateFootNote: t("yoga_retreats_review_element_more6"),
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title={t("yoga_retreats_contact_us_title")}
        descritpion={t("yoga_retreats_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("yoga_retreats_contact_us_input_first_name"),
          },
          {
            type: "text",
            placeholder: t("yoga_retreats_contact_us_input_email"),
          },
        ]}
        formTextarea={t("yoga_retreats_contact_us_input_write_message")}
        formButton={t("yoga_retreats_contact_us_input_send_message")}
        cardImageSrc={Contact}
        cardTitle={t("yoga_retreats_contact_us_card_title")}
        cardDesc={t("yoga_retreats_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("yoga_retreats_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("yoga_retreats_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("yoga_retreats_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <TagSection
        title={t("yoga_retreats_link_element_title")}
        cols="xl:grid-cols-4"
        items={[
          {
            title: t("yoga_retreats_link_element_col1_title"),
            items: [
              t("yoga_retreats_link_element_col1_item1"),
              t("yoga_retreats_link_element_col1_item2"),
              t("yoga_retreats_link_element_col1_item3"),
              t("yoga_retreats_link_element_col1_item4"),
              t("yoga_retreats_link_element_col1_item5"),
              t("yoga_retreats_link_element_col1_item6"),
              t("yoga_retreats_link_element_col1_item7"),
              t("yoga_retreats_link_element_col1_item8"),
              t("yoga_retreats_link_element_col1_item9"),
              t("yoga_retreats_link_element_col1_item10"),
            ],
          },
          {
            title: t("yoga_retreats_link_element_col2_title"),
            items: [
              t("yoga_retreats_link_element_col2_item1"),
              t("yoga_retreats_link_element_col2_item2"),
              t("yoga_retreats_link_element_col2_item3"),
              t("yoga_retreats_link_element_col2_item4"),
              t("yoga_retreats_link_element_col2_item5"),
              t("yoga_retreats_link_element_col2_item6"),
              t("yoga_retreats_link_element_col2_item7"),
              t("yoga_retreats_link_element_col2_item8"),
              t("yoga_retreats_link_element_col2_item9"),
            ],
          },
          {
            title: t("yoga_retreats_link_element_col3_title"),
            items: [
              t("yoga_retreats_link_element_col3_item1"),
              t("yoga_retreats_link_element_col3_item2"),
              t("yoga_retreats_link_element_col3_item3"),
              t("yoga_retreats_link_element_col3_item4"),
              t("yoga_retreats_link_element_col3_item5"),
              t("yoga_retreats_link_element_col3_item6"),
              t("yoga_retreats_link_element_col3_item7"),
              t("yoga_retreats_link_element_col3_item8"),
              t("yoga_retreats_link_element_col3_item9"),
              t("yoga_retreats_link_element_col3_item10"),
            ],
          },
          {
            title: t("yoga_retreats_link_element_col4_title"),
            items: [
              t("yoga_retreats_link_element_col4_item1"),
              t("yoga_retreats_link_element_col4_item2"),
              t("yoga_retreats_link_element_col4_item3"),
              t("yoga_retreats_link_element_col4_item4"),
              t("yoga_retreats_link_element_col4_item5"),
              t("yoga_retreats_link_element_col4_item6"),
              t("yoga_retreats_link_element_col4_item7"),
              t("yoga_retreats_link_element_col4_item8"),
              t("yoga_retreats_link_element_col4_item9"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default YogaRetreats;

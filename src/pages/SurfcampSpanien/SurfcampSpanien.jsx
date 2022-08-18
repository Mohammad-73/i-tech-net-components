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
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
//RateCardSection
import RateCardSection from "../../components/RateCardSection/RateCardSection";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampSpanien = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-spanien"
        title={t("spain_header_title")}
        description={t("spain_header_subtitletitle")}
      />
      <HintSection
        items={[
          {
            icon: <Like size={38} />,
            title: t("spain_3_symbol_item1_title"),
            description: t("spain_3_symbol_item1_subtitle"),
            readMore: "Zu den Details",
          },
          {
            icon: <Star size={38} />,
            title: t("spain_3_symbol_item2_title"),
            description: t("spain_3_symbol_item2_subtitle"),
            readMore: "Zu den Details",
          },
          {
            icon: <Heart size={38} />,
            title: t("spain_3_symbol_item3_title"),
            description: t("spain_3_symbol_item3_subtitle"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <Description
        title={t("spain_big_tab_title")}
        tabItems={[
          t("spain_big_tab_tab1"),
          t("spain_big_tab_tab2"),
          t("spain_big_tab_tab3"),
          t("spain_big_tab_tab4"),
          t("spain_big_tab_tab5"),
          t("spain_big_tab_tab6"),
        ]}
        tabCols="lg:grid-cols-6"
        tabContents={[
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Regionen-Tab-Element/Surfcamps-Kantabrien-Spanien.jpg",

            detailsTitle: t("spain_big_tab_tab1_title"),
            detailsDesc: t("spain_big_tab_tab1_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab1_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title:
                  "Surfhaus in Nordspanien: Surfen, Party & perfekte Vibes",
                location: "Somo, Spanien",
                calender: "04.04. - 14.11.2022",
                rateDesc: "",
                price: "189 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfcamp im Naturpark Oyambre",
                location: "Oyambre, Spanien",
                calender: "10.06. - 25.09.2022",
                rateDesc: "",
                price: "334 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Regionen-Tab-Element/Surfcamps-Baskenland-Spanien.jpg",
            detailsTitle: t("spain_big_tab_tab2_title"),
            detailsDesc: t("spain_big_tab_tab2_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab2_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surf & Skate Hostel mit baskischem Flair",
                location: "Urduliz, Spanien",
                calender: "09.06. - 29.10.2022",
                rateDesc: "",
                price: "234 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Regionen-Tab-Element/Surfcamps-Andalusien-Spanien.jpg",
            detailsTitle: t("spain_big_tab_tab3_title"),
            detailsDesc: t("spain_big_tab_tab3_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab3_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title:
                  "Surf-Finca mit Pool, Sauna & großem Garten in Andalusien",
                location: "Conil De La Frontera, Spanien",
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
                title: "Longboard-Surfen und Yoga-Retreat am Strand",
                location: "El Plamar, Spaniens",
                calender: "18.12. - 25.12.2021",
                rateDesc: "",
                price: "1200 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfhaus mit Apartments im Süden Spaniens",
                location: "Conil De La Frontera, Spanien",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "250 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Regionen-Tab-Element/Surfcamps-Fuerteventura.jpg",
            detailsTitle: t("spain_big_tab_tab4_title"),
            detailsDesc: t("spain_big_tab_tab4_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab4_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Regionen-Tab-Element/Surfcamps-Teneriffa.jpg",
            detailsTitle: t("spain_big_tab_tab5_title"),
            detailsDesc: t("spain_big_tab_tab5_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab5_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfhaus im ursprünglichen Küstenort El Poris ",
                location: "El Poris, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "280 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Surfhaus auf Teneriffa: Natur, Leidenschaft & Spaß",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "379 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
                title: "Modernes Surf & Yoga Haus mit Dachterrasse",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "415 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Regionen-Tab-Element/Surfcamps-Gran-Canaria.jpg",
            detailsTitle: t("spain_big_tab_tab6_title"),
            detailsDesc: t("spain_big_tab_tab6_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab6_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
        title={t("spain_5_clickable_boxes_title")}
        description={t("spain_5_clickable_boxes_subtitle")}
        image1={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Zielgruppe/Surfcamps-Spanien-Alleinreisende.jpg",

          title: t("spain_5_clickable_boxes_item1_title"),
        }}
        image2={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Zielgruppe/Surfcamps-Spanien-Gruppen-Freunde.jpg",
          title: t("spain_5_clickable_boxes_item2_title"),
        }}
        image3={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Zielgruppe/Familien-Surfurlaub-Spanien.jpg",
          title: t("spain_5_clickable_boxes_item3_title"),
        }}
        image4={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Zielgruppe/Surfcamps-Spanien-Paare.jpg",
          title: t("spain_5_clickable_boxes_item4_title"),
        }}
        image5={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Zielgruppe/Junior-Surfcamps-Spanien.jpg",
          title: t("spain_5_clickable_boxes_item5_title"),
        }}
      />
      <ListAndImage
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Vorteile-Divider/Surfcamps-Spanien-Besonderheiten.jpg"
        }
        title={t("spain_divider_with_symbol_title")}
        items={[
          t("spain_divider_with_symbol_item1"),
          t("spain_divider_with_symbol_item2"),
          t("spain_divider_with_symbol_item3"),
          t("spain_divider_with_symbol_item4"),
        ]}
      />
      <ListAndImage
        mainTitle={t("spain_text_and_image_element_title")}
        mainDescription={t("spain_text_and_image_element_subtitle")}
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Unterkungt-RL/Surfcamps-Spanien_Surfhaeuser-Lodges.jpg"
        }
        title={t("spain_text_and_image_element_item1_title")}
        description={t("spain_text_and_image_element_item1_subtitle")}
        readMore={t("spain_text_and_image_element_item1_more")}
      />
      <ListAndImage
        imgAlign="right"
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Unterkungt-RL/Surfcamps-Spanien_Campingplatz.jpg"
        }
        title={t("spain_text_and_image_element_item2_title")}
        description={t("spain_text_and_image_element_item2_subtitle")}
        readMore={t("spain_text_and_image_element_item2_more")}
      />
      <ListAndImage
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Unterkungt-RL/Surfurlaub-Spanien_private-apartments.jpg"
        }
        title={t("spain_text_and_image_element_item3_title")}
        description={t("spain_text_and_image_element_item3_subtitle")}
        readMore={t("spain_text_and_image_element_item3_more")}
      />
      <SingleCardSection
        title={t("spain_offer_element_title")}
        description={t("spain_offer_element_subtitle")}
        items={[
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfhaus auf Teneriffa: Natur, Leidenschaft & Spaß",
            location: "Adeje, Teneriffa",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "379 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surf-Hostel in Andalusien: Sonne und entspannte Vibes",
            location: "Conil De La Frontera, Spanien",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "220 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Dein Surferlebnis zwischen Klippen und Vulkanen",
            location: "Caleta de Famara, Lanzarote",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "170 €",
            priceTitle: "für 4 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Longboard-Surfen und Yoga-Retreat am Strand",
            location: "El Plamar, Spanien",
            calender: "18.12. - 25.12.2021",
            rateDesc: "",
            price: "1200 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfhaus in Nordspanien: Surfen, Party & perfekte Vibes",
            location: "Somo, Spanien",
            calender: "04.04. - 14.11.2022",
            rateDesc: "",
            price: "189 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfhaus mit Dachterrasse am Strand von Las Palmas",
            location: "Las Palmas, Gran Canaria",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "381 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surf & Skate Hostel mit baskischem Flair",
            location: "Urduliz, Spanien",
            calender: "09.06. - 29.10.2022",
            rateDesc: "",
            price: "234 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Moderne Surf Lodge am Traumstrand von Loredo",
            location: "Loredo, Spanien",
            calender: "04.04. - 14.11.2022",
            rateDesc: "",
            price: "189 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
            title: "Surfen & Yoga: Erlebe die Magie von Las Palmas",
            location: "Las Palmas, Gran Canaria",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "382 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <ColorDivider
        title={t("spain_narrow_divider_title")}
        description={t("spain_narrow_divider_text")}
        buttonTitle={t("spain_narrow_divider_button")}
      />
      <SingleColImg
        title={t("spain_3_clickable_boxes_title")}
        description={t("spain_3_clickable_boxes_subtitle")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Vorkenntnisse/Surfcamps-Spanien-Anfaenger.jpg",

            title: t("spain_3_clickable_boxes_item1_title"),
            description: t("spain_3_clickable_boxes_item1_subtitle"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Vorkenntnisse/Surfcamps-Spanien-Intermediates.jpg",
            title: t("spain_3_clickable_boxes_item2_title"),
            description: t("spain_3_clickable_boxes_item2_subtitle"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Vorkenntnisse/Surfari-Surf-Guiding-Spanien.jpg",
            title: t("spain_3_clickable_boxes_item3_title"),
            description: t("spain_3_clickable_boxes_item3_subtitle"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ImageGallery3
        title={t("spain_6_clickable_boxes_title")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Kategorien-6er/Surfcamps-Spanien-Natur.jpg",

            shadow: "80",
            title: t("spain_6_clickable_boxes_item1"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Kategorien-6er/Nachhaltiges-Surfcamp-Spanien.jpg",
            shadow: "80",
            title: t("spain_6_clickable_boxes_item2"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Kategorien-6er/Low-Budget_Surfcamps-Spanien.jpg",
            shadow: "80",
            title: t("spain_6_clickable_boxes_item3"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Kategorien-6er/Surfcamps-Spanien_flexible-Stornierung.jpg",
            shadow: "80",
            title: t("spain_6_clickable_boxes_item4"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Kategorien-6er/Surf-Skate-Camp-Spanien.jpg",
            shadow: "80",
            title: t("spain_6_clickable_boxes_item5"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Kategorien-6er/Surf-Yoga-Camps-Spanien.jpg",
            shadow: "80",
            title: t("spain_6_clickable_boxes_item6"),
          },
        ]}
      />
      <DividerImg
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/spanien/Kunden-Divider/surfcamp-spanin-bewertung.png"
        }
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <RateCardSection
        title={t("spain_review_element_title")}
        items={[
          {
            rateName: "Chloe",
            rateDesc: t("spain_review_element_item1_text"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "27.08.2021",
            rateFootNote: t("spain_review_element_item1_more"),
          },
          {
            rateName: "Yves",
            rateDesc: t("spain_review_element_item2_text"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "08.12.2021",
            rateFootNote: t("spain_review_element_item2_more"),
          },
          {
            rateName: "Fabi",
            rateDesc: t("spain_review_element_item3_text"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "22.08.2021",
            rateFootNote: t("spain_review_element_item3_more"),
          },
          {
            rateName: "Christina",
            rateDesc: t("spain_review_element_item4_text"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "06.12.2021",
            rateFootNote: t("spain_review_element_item4_more"),
          },
          {
            rateName: "Ella",
            rateDesc: t("spain_review_element_item5_text"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "27.08.2021",
            rateFootNote: t("spain_review_element_item5_more"),
          },
          {
            rateName: "Alexander",
            rateDesc: t("spain_review_element_item6_text"),
            rateImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/g1.jpg",
            rateCalendar: "17.08.2021",
            rateFootNote: t("spain_review_element_item6_more"),
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title={t("spain_contact_us_title")}
        descritpion={t("spain_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("spain_contact_us_input_first_name"),
          },
          { type: "text", placeholder: t("spain_contact_us_input_email") },
        ]}
        formTextarea={t("spain_contact_us_input_write_message")}
        formButton={t("spain_contact_us_input_send_message")}
        cardImageSrc={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/contact.jpg"
        }
        cardTitle={t("spain_contact_us_card_title")}
        cardDesc={t("spain_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("spain_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("spain_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("spain_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <TagSection
        title={t("spain_links_title")}
        cols="xl:grid-cols-3"
        items={[
          {
            title: t("spain_links_col1_title"),
            items: [
              t("spain_links_col1_item1"),
              t("spain_links_col1_item2"),
              t("spain_links_col1_item3"),
              t("spain_links_col1_item4"),
            ],
          },
          {
            title: t("spain_links_col2_title"),
            items: [
              t("spain_links_col2_item1"),
              t("spain_links_col2_item2"),
              t("spain_links_col2_item3"),
              t("spain_links_col2_item4"),
            ],
          },
          {
            title: t("spain_links_col3_title"),
            items: [
              t("spain_links_col3_item1"),
              t("spain_links_col3_item2"),
              t("spain_links_col3_item3"),
              t("spain_links_col3_item4"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampSpanien;

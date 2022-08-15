import React from "react";
import { useTranslation } from "react-i18next";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//Description
import Description from "../../components/Description/Description";
import Kantabrien from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Kantabrien-Spanien.jpg";
import Baskenland from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Baskenland-Spanien.jpg";
import Andalusien from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Andalusien-Spanien.jpg";
import Fuerteventura from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Fuerteventura.jpg";
import Teneriffa from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Teneriffa.jpg";
import Gran from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Gran-Canaria.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Alleinreisende.jpg";
import image2 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Gruppen-Freunde.jpg";
import image3 from "../../assets/spanien/Zielgruppe/Familien-Surfurlaub-Spanien.jpg";
import image4 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Paare.jpg";
import image5 from "../../assets/spanien/Zielgruppe/Junior-Surfcamps-Spanien.jpg";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/spanien/Vorteile-Divider/Surfcamps-Spanien-Besonderheiten.jpg";
import ListAndImage2 from "../../assets/spanien/Unterkungt-RL/Surfcamps-Spanien_Surfhaeuser-Lodges.jpg";
import ListAndImage3 from "../../assets/spanien/Unterkungt-RL/Surfcamps-Spanien_Campingplatz.jpg";
import ListAndImage4 from "../../assets/spanien/Unterkungt-RL/Surfurlaub-Spanien_private-apartments.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/spanien/Vorkenntnisse/Surfcamps-Spanien-Anfaenger.jpg";
import Col32 from "../../assets/spanien/Vorkenntnisse/Surfcamps-Spanien-Intermediates.jpg";
import Col33 from "../../assets/spanien/Vorkenntnisse/Surfari-Surf-Guiding-Spanien.jpg";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery1 from "../../assets/spanien/Kategorien-6er/Surfcamps-Spanien-Natur.jpg";
import imgGallery2 from "../../assets/spanien/Kategorien-6er/Nachhaltiges-Surfcamp-Spanien.jpg";
import imgGallery3 from "../../assets/spanien/Kategorien-6er/Low-Budget_Surfcamps-Spanien.jpg";
import imgGallery4 from "../../assets/spanien/Kategorien-6er/Surfcamps-Spanien_flexible-Stornierung.jpg";
import imgGallery5 from "../../assets/spanien/Kategorien-6er/Surf-Skate-Camp-Spanien.jpg";
import imgGallery6 from "../../assets/spanien/Kategorien-6er/Surf-Yoga-Camps-Spanien.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/spanien/Kunden-Divider/surfcamp-spanin-bewertung.png";
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
            icon: <BiLike size={38} />,
            title: t("spain_3_symbol_item1_title"),
            description: t("spain_3_symbol_item1_subtitle"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiStar size={38} />,
            title: t("spain_3_symbol_item2_title"),
            description: t("spain_3_symbol_item2_subtitle"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiHeart size={38} />,
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
            detailsImage: Kantabrien,
            detailsTitle: t("spain_big_tab_tab1_title"),
            detailsDesc: t("spain_big_tab_tab1_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab1_more"),
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
                cardImage: cardImage,
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
            detailsImage: Baskenland,
            detailsTitle: t("spain_big_tab_tab2_title"),
            detailsDesc: t("spain_big_tab_tab2_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab2_more"),
            cardItems: [
              {
                cardImage: cardImage,
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
            detailsImage: Andalusien,
            detailsTitle: t("spain_big_tab_tab3_title"),
            detailsDesc: t("spain_big_tab_tab3_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab3_more"),
            cardItems: [
              {
                cardImage: cardImage,
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
                cardImage: cardImage,
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Fuerteventura,
            detailsTitle: t("spain_big_tab_tab4_title"),
            detailsDesc: t("spain_big_tab_tab4_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab4_more"),
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
            detailsTitle: t("spain_big_tab_tab5_title"),
            detailsDesc: t("spain_big_tab_tab5_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab5_more"),
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
              {
                cardImage: cardImage,
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
            detailsImage: Gran,
            detailsTitle: t("spain_big_tab_tab6_title"),
            detailsDesc: t("spain_big_tab_tab6_text"),
            detailsReadMore: "",
            cardTitle: t("spain_big_tab_tab6_more"),
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
        title={t("spain_5_clickable_boxes_title")}
        description={t("spain_5_clickable_boxes_subtitle")}
        image1={{
          img: image1,
          title: t("spain_5_clickable_boxes_item1_title"),
        }}
        image2={{
          img: image2,
          title: t("spain_5_clickable_boxes_item2_title"),
        }}
        image3={{
          img: image3,
          title: t("spain_5_clickable_boxes_item3_title"),
        }}
        image4={{
          img: image4,
          title: t("spain_5_clickable_boxes_item4_title"),
        }}
        image5={{
          img: image5,
          title: t("spain_5_clickable_boxes_item5_title"),
        }}
      />
      <ListAndImage
        image={ListAndImage1}
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
        image={ListAndImage2}
        title={t("spain_text_and_image_element_item1_title")}
        description={t("spain_text_and_image_element_item1_subtitle")}
        readMore={t("spain_text_and_image_element_item1_more")}
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage3}
        title={t("spain_text_and_image_element_item2_title")}
        description={t("spain_text_and_image_element_item2_subtitle")}
        readMore={t("spain_text_and_image_element_item2_more")}
      />
      <ListAndImage
        image={ListAndImage4}
        title={t("spain_text_and_image_element_item3_title")}
        description={t("spain_text_and_image_element_item3_subtitle")}
        readMore={t("spain_text_and_image_element_item3_more")}
      />
      <SingleCardSection
        title={t("spain_offer_element_title")}
        description={t("spain_offer_element_subtitle")}
        items={[
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
            cardImage: cardImage,
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
          {
            cardImage: cardImage,
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
            img: Col31,
            title: t("spain_3_clickable_boxes_item1_title"),
            description: t("spain_3_clickable_boxes_item1_subtitle"),
          },
          {
            img: Col32,
            title: t("spain_3_clickable_boxes_item2_title"),
            description: t("spain_3_clickable_boxes_item2_subtitle"),
          },
          {
            img: Col33,
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
            img: imgGallery1,
            shadow: "80",
            title: t("spain_6_clickable_boxes_item1"),
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: t("spain_6_clickable_boxes_item2"),
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: t("spain_6_clickable_boxes_item3"),
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: t("spain_6_clickable_boxes_item4"),
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: t("spain_6_clickable_boxes_item5"),
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: t("spain_6_clickable_boxes_item6"),
          },
        ]}
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
        title={t("spain_review_element_title")}
        items={[
          {
            rateName: "Chloe",
            rateDesc: t("spain_review_element_item1_text"),
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote: t("spain_review_element_item1_more"),
          },
          {
            rateName: "Yves",
            rateDesc: t("spain_review_element_item2_text"),
            rateImage: RateImg,
            rateCalendar: "08.12.2021",
            rateFootNote: t("spain_review_element_item2_more"),
          },
          {
            rateName: "Fabi",
            rateDesc: t("spain_review_element_item3_text"),
            rateImage: RateImg,
            rateCalendar: "22.08.2021",
            rateFootNote: t("spain_review_element_item3_more"),
          },
          {
            rateName: "Christina",
            rateDesc: t("spain_review_element_item4_text"),
            rateImage: RateImg,
            rateCalendar: "06.12.2021",
            rateFootNote: t("spain_review_element_item4_more"),
          },
          {
            rateName: "Ella",
            rateDesc: t("spain_review_element_item5_text"),
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote: t("spain_review_element_item5_more"),
          },
          {
            rateName: "Alexander",
            rateDesc: t("spain_review_element_item6_text"),
            rateImage: RateImg,
            rateCalendar: "17.08.2021",
            rateFootNote: t("spain_review_element_item6_more"),
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

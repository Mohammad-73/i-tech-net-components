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
import { Like, Star, Heart, RightArrow } from "../../assets/icons/icons";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image51 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Alleinreisende-Europa.jpg";
import image52 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Freunde-Europa.jpg";
import image53 from "../../assets/euro/Zielgruppen/Zielgruppen/Familien-Surfurlaub-Europa.jpg";
import image54 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Paare-Europa.jpg";
import image55 from "../../assets/euro/Zielgruppen/Zielgruppen/Surfcamps-Jugendliche-Europa.jpg";
import image56 from "../../assets/euro/Kategorien/Kategorien/Surfcamps-Campingurlaub-Europa (2).jpg";
import image57 from "../../assets/euro/Kategorien/Kategorien/Surfhaeuser-Apartments-Lodges-Europa.jpg";
import image58 from "../../assets/euro/Kategorien/Kategorien/Surfcamps-in-der-Natur.jpg";
import image59 from "../../assets/euro/Kategorien/Kategorien/Surfcamps-mit-flexiblen-Stornierungsbedingungen.jpg";
import image60 from "../../assets/euro/Kategorien/Kategorien/Low-Budget-Surfcamps.jpg";
//ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import NavBar from "../../components/NavBar/NavBar";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
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
import { Phone, Email, Whatsapp } from "../../assets/icons/icons";

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
            icon: <Like size={38} />,
            title: t("euro_3symbol_title1"),
            description: t("euro_3symbol_text1"),
            readMore: t("euro_3symbol_more"),
          },
          {
            icon: <Star size={38} />,
            title: t("euro_3symbol_title2"),
            description: t("euro_3symbol_text2"),
            readMore: t("euro_3symbol_more"),
          },
          {
            icon: <Heart size={38} />,
            title: t("euro_3symbol_title3"),
            description: t("euro_3symbol_text3"),
            readMore: t("euro_3symbol_more"),
          },
        ]}
      />
      <Description
        title={t("euro_big_tab_element_title")}
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
      <ImageGalleryFivePic
        reverse={true}
        title={t("euro_5_part_linked_image_title")}
        image1={{
          img: image56,
          title: t("euro_5_part_linked_image_tab1"),
          description: t("euro_5_part_linked_image_desc1"),
        }}
        image2={{
          img: image57,
          title: t("euro_5_part_linked_image_tab2"),
          description: t("euro_5_part_linked_image_desc2"),
        }}
        image3={{
          img: image58,
          title: t("euro_5_part_linked_image_tab3"),
          description: t("euro_5_part_linked_image_desc3"),
        }}
        image4={{
          img: image59,
          title: t("euro_5_part_linked_image_tab4"),
          description: t("euro_5_part_linked_image_desc4"),
        }}
        image5={{
          img: image60,
          title: t("euro_5_part_linked_image_tab5"),
          description: t("euro_5_part_linked_image_desc5"),
        }}
      />
      <SingleCardSection
        title={t("euro_offer_element_title")}
        description={t("euro_offer_element_text")}
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
        title={t("euro_divider_with_image_as_background_title")}
        description={t("euro_divider_with_image_as_background_subtitle")}
        image={DividerImage}
        buttonTitle={t("euro_divider_with_image_as_background_button")}
      />
      <SingleColImg
        title={t("euro_3_part_linked_image_element_title")}
        description={t("euro_3_part_linked_image_element_text")}
        items={[
          {
            img: Col31,
            title: t("euro_3_part_linked_image_element_tab1"),
            description: t("euro_3_part_linked_image_element_desc1"),
          },
          {
            img: Col32,
            title: t("euro_3_part_linked_image_element_tab2"),
            description: t("euro_3_part_linked_image_element_desc2"),
          },
          {
            img: Col33,
            title: t("euro_3_part_linked_image_element_tab3"),
            description: t("euro_3_part_linked_image_element_desc3"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ImageGallery3
        title={t("euro_6_part_linked_image_title")}
        description={t("euro_6_part_linked_image_subtitle")}
        items={[
          {
            img: Extra1,
            shadow: "80",
            title: t("euro_6_part_linked_image_tab1"),
          },
          {
            img: Extra2,
            shadow: "80",
            title: t("euro_6_part_linked_image_tab2"),
          },
          {
            img: Extra3,
            shadow: "80",
            title: t("euro_6_part_linked_image_tab3"),
          },
          {
            img: Extra4,
            shadow: "80",
            title: t("euro_6_part_linked_image_tab4"),
          },
          {
            img: Extra5,
            shadow: "80",
            title: t("euro_6_part_linked_image_tab5"),
          },
          {
            img: Extra6,
            shadow: "80",
            title: t("euro_6_part_linked_image_tab6"),
          },
        ]}
      />
      <DividerImg
        align="left"
        title={t("euro_divider_with_image_as_background_title2")}
        description={t("euro_divider_with_image_as_background_subtitle2")}
        image={Besonderheiten}
        dark={true}
        buttonTitle={t("euro_divider_with_image_as_background_button2")}
        icon={<RightArrow size={30} />}
      />
      <RateCardSection
        title={t("euro_reviews_title")}
        items={[
          {
            rateName: "Febi",
            rateDesc: t("euro_reviews_review1"),
            rateImage: RateImg,
            rateCalendar: "22.08.2021",
            rateFootNote: t("euro_reviews_more1"),
          },
          {
            rateName: "Yves",
            rateDesc: t("euro_reviews_review2"),
            rateImage: RateImg,
            rateCalendar: " 08.12.2021",
            rateFootNote: t("euro_reviews_more2"),
          },
          {
            rateName: "Pia",
            rateDesc: t("euro_reviews_review3"),
            rateImage: RateImg,
            rateCalendar: " 28.09.2021",
            rateFootNote: t("euro_reviews_more3"),
          },
          {
            rateName: "Paula",
            rateDesc: t("euro_reviews_review4"),
            rateImage: RateImg,
            rateCalendar: "09.09.2021",
            rateFootNote: t("euro_reviews_more3"),
          },
          {
            rateName: "Ella",
            rateDesc: t("euro_reviews_review5"),
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote: t("euro_reviews_more5"),
          },
          {
            rateName: "Melina",
            rateDesc: t("euro_reviews_review6"),
            rateImage: RateImg,
            rateCalendar: "19.08.2021",
            rateFootNote: t("euro_reviews_more6"),
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title={t("euro_contact_us_title")}
        formInputs={[
          { type: "text", placeholder: t("euro_contact_us_input_first_name") },
          { type: "text", placeholder: t("euro_contact_us_input_email") },
          { type: "text", placeholder: t("euro_contact_us_input_phone") },
          { type: "text", placeholder: t("euro_contact_us_input_subject") },
        ]}
        formTextarea={t("euro_contact_us_input_write_message")}
        formButton={t("euro_contact_us_input_send_message")}
        cardImageSrc={Contact}
        cardItems={[
          {
            title: t("euro_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("euro_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("euro_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <TagSection
        title={t("euro_link_element_title")}
        cols="xl:grid-cols-4"
        items={[
          {
            title: t("euro_link_element_col1_title"),
            items: [
              t("euro_link_element_col1_item1"),
              t("euro_link_element_col1_item2"),
              t("euro_link_element_col1_item3"),
              t("euro_link_element_col1_item4"),
              t("euro_link_element_col1_item5"),
            ],
          },
          {
            title: t("euro_link_element_col2_title"),
            items: [
              t("euro_link_element_col2_item1"),
              t("euro_link_element_col2_item2"),
              t("euro_link_element_col2_item3"),
              t("euro_link_element_col2_item4"),
              t("euro_link_element_col2_item5"),
            ],
          },

          {
            title: t("euro_link_element_col3_title"),
            items: [
              t("euro_link_element_col3_item1"),
              t("euro_link_element_col3_item2"),
              t("euro_link_element_col3_item3"),
              t("euro_link_element_col3_item4"),
              t("euro_link_element_col3_item5"),
            ],
          },
          {
            title: t("euro_link_element_col4_title"),
            items: [
              t("euro_link_element_col4_item1"),
              t("euro_link_element_col4_item2"),
              t("euro_link_element_col4_item3"),
              t("euro_link_element_col4_item4"),
              t("euro_link_element_col4_item5"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampEurope;

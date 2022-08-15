import React from "react";
import { useTranslation } from "react-i18next";
// Hero
import Hero from "../../components/Hero/Hero";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
import { MdWaves } from "react-icons/md";
import { FaHeart, FaSun, FaLeaf } from "react-icons/fa";
//ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImg from "../../assets/SurfcampsFuerteventura/Tab-Element-Regionen/Surfcamp-Vieux-Boucau-Frankreich.jpg";
import ListAndImg2 from "../../assets/SurfcampsFuerteventura/Unterkunft/Surfurlaub-Apartments.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
import cardImage from "../../assets/images/cardImage.jpg";
//ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery6 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Familien-Surfurlaub-Frankreich.jpg";
import imgGallery1 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Starsurfcamp-Moliets-Frankreich.jpg";
import imgGallery4 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Backwash-Surfcamp-Frankreich-Cap-Ferret.jpg";
import imgGallery3 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Dreamsea-Surf-Yogacamp-Moliets-Frankreich.jpg";
import imgGallery5 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Eco-Surfcamp-Frankreich-Seignosse.jpg";
import imgGallery2 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Surf-Villa-Frankreich-Seignosse.jpg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
import wImg1 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Planet-Surfcamp-Le-Pin-Sec-Frankreich.jpg";
import wImg2 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Pura-Vida-Surf-Lodge-Mimizan-Plage-Frankreich.jpg";
import wImg3 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Dreamsea-Surfcamp-Party-Moliets-Frankreich.jpg";
import wImg4 from "../../assets/SurfcampsFuerteventura/Angebote-3er-Elemente/Surf-Yoga-Urlaub-Pura-Vida-Lodge-Mimizan-Plage-Frankreich.jpg";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
import slideDividerImg from "../../assets/SurfcampsFuerteventura/Header/surfcamps-frankreich.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/images/Besonderheiten.jpg";
import dividerImage from "../../assets/SurfcampsFuerteventura/Header/surfcamps-europa.jpg";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Surfcamp-Frankreich-Vieux Boucau.jpg";
import Col32 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Starsurfcamp-Moliets-Frankreich.jpg";
import Col33 from "../../assets/SurfcampsFuerteventura/Angebote-4er-Elemente/Surf-Yoga-Camp-Frankreich-Seignosse.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampFuerteventura = () => {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <Hero
        image="bg-hero-frankreich"
        title={t("fuerteventura_header_title")}
        description={t("fuerteventura_header_subtitle")}
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <MdWaves size={56} />,
            title: t("fuerteventura_4_symbol_item1_title"),
            description: t("fuerteventura_4_symbol_item1_subtitle"),
          },
          {
            icon: <FaSun size={56} />,
            title: t("fuerteventura_4_symbol_item2_title"),
            description: t("fuerteventura_4_symbol_item2_subtitle"),
          },
          {
            icon: <FaLeaf size={56} />,
            title: t("fuerteventura_4_symbol_item3_title"),
            description: t("fuerteventura_4_symbol_item3_subtitle"),
          },
          {
            icon: <FaHeart size={56} />,
            title: t("fuerteventura_4_symbol_item4_title"),
            description: t("fuerteventura_4_symbol_item4_subtitle"),
          },
        ]}
      />
      <ListAndImage
        mainTitle={t("fuerteventura_image_and_text_element_title")}
        mainDescription={t("fuerteventura_image_and_text_element_subtitle")}
        image={ListAndImg}
        title={t("fuerteventura_image_and_text_element_item1_title")}
        description={t("fuerteventura_image_and_text_element_item1_subtitle")}
      />
      <SingleCardSection
        title={t("fuerteventura_image_and_text_element_item1_offers")}
        items={[
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
        ]}
        cols="lg:grid-cols-3"
      />
      <ListAndImage
        image={ListAndImg2}
        title={t("fuerteventura_image_and_text_element_item2_title")}
        description={t("fuerteventura_image_and_text_element_item2_subtitle")}
      />
      <SingleCardSection
        title={t("fuerteventura_image_and_text_element_item2_offers")}
        items={[
          {
            cardImage: cardImage,
            title: "Surfcamp mit Meerblick auf Fuerteventura",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "249 €",
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
            title: "Surfen in der Sonne: Gemütliche Surfvilla in El Cotillo",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "440 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-3"
      />
      <ColorDivider
        title={t("fuerteventura_narrow_divider_title")}
        description={t("fuerteventura_narrow_divider_subtitle")}
        buttonTitle={t("fuerteventura_narrow_divider_button")}
      />
      <ImageGallery3
        title={t("fuerteventura_6_part_linked_image_element_title")}
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: t("fuerteventura_6_part_linked_image_element_item1"),
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: t("fuerteventura_6_part_linked_image_element_item2"),
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: t("fuerteventura_6_part_linked_image_element_item3"),
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: t("fuerteventura_6_part_linked_image_element_item4"),
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: t("fuerteventura_6_part_linked_image_element_item5"),
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: t("fuerteventura_6_part_linked_image_element_item6"),
          },
        ]}
      />
      <ImageGalleryWindow
        title={t("fuerteventura_4_part_linked_imaege_title")}
        description={t("fuerteventura_4_part_linked_imaege_subtitle")}
        items={[
          {
            shadowSize: "80",
            img: wImg1,
            title: t("fuerteventura_4_part_linked_imaege_item1_title"),
            description: t("fuerteventura_4_part_linked_imaege_item1_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg2,
            title: t("fuerteventura_4_part_linked_imaege_item2_title"),
            description: t("fuerteventura_4_part_linked_imaege_item2_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg3,
            title: t("fuerteventura_4_part_linked_imaege_item3_title"),
            description: t("fuerteventura_4_part_linked_imaege_item3_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg4,
            title: t("fuerteventura_4_part_linked_imaege_item4_title"),
            description: t("fuerteventura_4_part_linked_imaege_item4_subtitle"),
          },
        ]}
      />
      <SlideDivider
        image={slideDividerImg}
        dark={true}
        items={[
          {
            description: t("fuerteventura_riview_element_divider_tab1_title"),
            name: "Svenja",
            date: "15.08.2022",
          },
          {
            description: t("fuerteventura_riview_element_divider_tab2_title"),
            name: "Beate",
            date: "23.02.2022",
          },
          {
            description: t("fuerteventura_riview_element_divider_tab3_title"),
            name: "Johanna",
            date: "25.05.2022",
          },
        ]}
      />
      <SingleCardSection
        title={t("fuerteventura_offer_title")}
        items={[
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
        ]}
        cols="lg:grid-cols-4"
      />
      <DividerImg
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        image={Besonderheiten}
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <SingleColImg
        title={t("fuerteventura_3_part_linked_image_title")}
        description={t("fuerteventura_3_part_linked_image_subtitle")}
        items={[
          {
            img: Col31,
            title: t("fuerteventura_3_part_linked_image_item1_title"),
            description: t("fuerteventura_3_part_linked_image_item1_subtitle"),
          },
          {
            img: Col32,
            title: t("fuerteventura_3_part_linked_image_item2_title"),
            description: t("fuerteventura_3_part_linked_image_item2_subtitle"),
          },
          {
            img: Col33,
            title: t("fuerteventura_3_part_linked_image_item3_title"),
            description: t("fuerteventura_3_part_linked_image_item3_subtitle"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        align="center"
        title={t("fuerteventura_wide_divider_title")}
        description={t("fuerteventura_wide_divider_subtitle")}
        image={dividerImage}
        buttonTitle={t("fuerteventura_wide_divider_button")}
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
        title={t("fuerteventura_link_element_title")}
        cols="xl:grid-cols-3"
        items={[
          {
            title: t("fuerteventura_link_element_col1_title"),
            items: [
              t("fuerteventura_link_element_col1_item1"),
              t("fuerteventura_link_element_col1_item2"),
              t("fuerteventura_link_element_col1_item3"),
              t("fuerteventura_link_element_col1_item4"),
            ],
          },
          {
            title: t("fuerteventura_link_element_col2_title"),
            items: [
              t("fuerteventura_link_element_col2_item1"),
              t("fuerteventura_link_element_col2_item2"),
              t("fuerteventura_link_element_col2_item3"),
              t("fuerteventura_link_element_col2_item4"),
            ],
          },
          {
            title: t("fuerteventura_link_element_col3_title"),
            items: [
              t("fuerteventura_link_element_col3_item1"),
              t("fuerteventura_link_element_col3_item2"),
              t("fuerteventura_link_element_col3_item3"),
              t("fuerteventura_link_element_col3_item4"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampFuerteventura;

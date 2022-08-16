import React from "react";
import { useTranslation } from "react-i18next";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//Description
import Description from "../../components/Description/Description";
import Alleinreisende from "../../assets/teneriffa/Zielgruppen-Tab-Element/Surfcamps-Alleinreisende-Teneriffa.jpg";
import Freund from "../../assets/teneriffa/Zielgruppen-Tab-Element/Surfcamps-Teneriffa-Gruppen-Freunde.jpg";
import Paare from "../../assets/teneriffa/Zielgruppen-Tab-Element/Surf-Reisen-Teneriffa-Paare.jpg";
import Familien from "../../assets/teneriffa/Zielgruppen-Tab-Element/Surfurlaub-Familien-Teneriffa.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-Natur.jpg";
import image2 from "../../assets/teneriffa/Kategorien-5er_LI/Surf-Yoga-Camps-Teneriffa.jpg";
import image3 from "../../assets/teneriffa/Kategorien-5er_LI/Low-Budget-Surfcamps-Teneriffa.jpg";
import image4 from "../../assets/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-flexible-Stornierung.jpg";
import image5 from "../../assets/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-Camping.jpg";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/teneriffa/Besonderheiten-Divider/Surfcamps-Teneriffa-Besonderheiten.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/SUP-Tour_Surfcamps-Teneriffa.jpg";
import Col32 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Kajak-Tour-Delphine_Surfcamps-Teneriffa.jpg";
import Col33 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Schnorchel-ausflug-Schildkröten_Surfcamps-Teneriffa.jpg";
import Col34 from "../../assets/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Anfaenger.jpg";
import Col35 from "../../assets/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Fortgeschrittene.jpg";
import Col36 from "../../assets/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Profis.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import dividerImage from "../../assets/teneriffa/Kanaren-Divider/Surfcamps-Kanaren.jpg";
import Besonderheiten from "../../assets/teneriffa/Kunden-Divider/Surfcamps-Teneriffa-Bewertungen.jpg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
import wImg1 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Schnorchel-ausflug-Schildkroeten_Surfcamps-Teneriffa.jpg";
import wImg2 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Paragliding_Surfcamps-Teneriffa.jpg";
import wImg3 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/SUP-Tour_Surfcamps-Teneriffa.jpg";
import wImg4 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Vulkan-Teide_Surfcamps-Teneriffa.jpg";
import wImg5 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Freediving_Surfcamps-Teneriffa.jpg";
import wImg6 from "../../assets/teneriffa/Besondere-Extras_6er-Kacheln/Kajak-Tour-Delphine_Surfcamps-Teneriffa.jpg";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
import slideDividerImg from "../../assets/teneriffa/Kunden-Divider/Surfcamps-Teneriffa_Bewertungen.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampTeneriffa = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-teneriffa"
        title={t("teneriffa_header_title")}
        description={t("teneriffa_header_subtitle")}
      />
      <HintSection
        items={[
          {
            icon: <BiLike size={38} />,
            title: t("teneriffa_3_symbol_title1"),
            description: t("teneriffa_3_symbol_subtitle1"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiStar size={38} />,
            title: t("teneriffa_3_symbol_title2"),
            description: t("teneriffa_3_symbol_subtitle2"),
            readMore: "Zu den Details",
          },
          {
            icon: <BiHeart size={38} />,
            title: t("teneriffa_3_symbol_title3"),
            description: t("teneriffa_3_symbol_subtitle3"),
            readMore: "Zu den Details",
          },
        ]}
      />
      <Description
        title={t("teneriffa_big_tab_title")}
        tabItems={[
          t("teneriffa_big_tab_tab1"),
          t("teneriffa_big_tab_tab2"),
          t("teneriffa_big_tab_tab3"),
          t("teneriffa_big_tab_tab4"),
        ]}
        tabCols="lg:grid-cols-4"
        tabContents={[
          {
            detailsImage: Alleinreisende,
            detailsTitle: t("teneriffa_big_tab_tab1_title"),
            detailsDesc: t("teneriffa_big_tab_tab1_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab1_more"),
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
                title: "Modernes Surf & Yoga Haus mit Dachterrasse",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "415 €",
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Freund,
            detailsTitle: t("teneriffa_big_tab_tab2_title"),
            detailsDesc: t("teneriffa_big_tab_tab2_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab2_more"),
            cardItems: [
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
            detailsImage: Paare,
            detailsTitle: t("teneriffa_big_tab_tab3_title"),
            detailsDesc: t("teneriffa_big_tab_tab3_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab3_more"),
            cardItems: [
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Familien,
            detailsTitle: t("teneriffa_big_tab_tab4_title"),
            detailsDesc: t("teneriffa_big_tab_tab4_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab4_more"),
            cardItems: [
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
                title: "Surf & Yoga Urlaub am einsamen Strand",
                location: "El Poris, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "390 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <ImageGalleryFivePic
        title={t("teneriffa_5_linked_image_title")}
        description={t("teneriffa_5_linked_image_subtitle")}
        image1={{ img: image1, title: t("teneriffa_5_linked_image_item1") }}
        image2={{ img: image2, title: t("teneriffa_5_linked_image_item2") }}
        image3={{ img: image3, title: t("teneriffa_5_linked_image_item3") }}
        image4={{ img: image4, title: t("teneriffa_5_linked_image_item4") }}
        image5={{ img: image5, title: t("teneriffa_5_linked_image_item5") }}
      />
      <ListAndImage
        image={ListAndImage1}
        title={t("teneriffa_big_divider_with_sumbol_title")}
        items={[
          t("teneriffa_big_divider_with_sumbol_item1"),
          t("teneriffa_big_divider_with_sumbol_item2"),
          t("teneriffa_big_divider_with_sumbol_item3"),
          t("teneriffa_big_divider_with_sumbol_item4"),
        ]}
      />
      <SingleCardSection
        title={t("teneriffa_4_part_linked_offer_title")}
        description={t("teneriffa_4_part_linked_offer_subtitle")}
        items={[
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
        ]}
        cols="lg:grid-cols-4"
      />
      <SingleColImg
        title={t("teneriffa_3_part_link_image_title")}
        description={t("teneriffa_3_part_link_image_subtitle")}
        items={[
          {
            img: Col31,
            title: t("teneriffa_3_part_link_image_item1_title"),
            description: t("teneriffa_3_part_link_image_item1_subtitle"),
          },
          {
            img: Col32,
            title: t("teneriffa_3_part_link_image_item2_title"),
            description: t("teneriffa_3_part_link_image_item2_subtitle"),
          },
          {
            img: Col33,
            title: t("teneriffa_3_part_link_image_item3_title"),
            description: t("teneriffa_3_part_link_image_item3_subtitle"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        align="center"
        title={t("teneriffa_big_divider_title")}
        description={t("teneriffa_big_divider_subtitle")}
        image={dividerImage}
        buttonTitle={t("teneriffa_big_divider_button")}
      />
      <SingleColImg
        title={t("teneriffa_3_part_link_image2_title")}
        description={t("teneriffa_3_part_link_image2_sutitle")}
        items={[
          {
            img: Col34,
            title: t("teneriffa_3_part_link_image2_item1_title"),
            description: t("teneriffa_3_part_link_image2_item1_sutitle"),
          },
          {
            img: Col35,
            title: t("teneriffa_3_part_link_image2_item2_title"),
            description: t("teneriffa_3_part_link_image2_item2_sutitle"),
          },
          {
            img: Col36,
            title: t("teneriffa_3_part_link_image2_item3_title"),
            description: t("teneriffa_3_part_link_image2_item3_sutitle"),
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
      <ImageGalleryWindow
        title={t("teneriffa_6_part_linked_image_title")}
        description={t("teneriffa_6_part_linked_image_subtitle")}
        items={[
          {
            shadowSize: "80",
            img: wImg1,
            title: t("teneriffa_6_part_linked_image_item1_title"),
            description: t("teneriffa_6_part_linked_image_item1_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg2,
            title: t("teneriffa_6_part_linked_image_item2_title"),
            description: t("teneriffa_6_part_linked_image_item2_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg3,
            title: t("teneriffa_6_part_linked_image_item3_title"),
            description: t("teneriffa_6_part_linked_image_item3_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg4,
            title: t("teneriffa_6_part_linked_image_item4_title"),
            description: t("teneriffa_6_part_linked_image_item4_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg5,
            title: t("teneriffa_6_part_linked_image_item5_title"),
            description: t("teneriffa_6_part_linked_image_item5_subtitle"),
          },
          {
            shadowSize: "80",
            img: wImg6,
            title: t("teneriffa_6_part_linked_image_item6_title"),
            description: t("teneriffa_6_part_linked_image_item6_subtitle"),
          },
        ]}
      />
      <SlideDivider
        image={slideDividerImg}
        dark={true}
        items={[
          {
            description: t("teneriffa_review_element_item1_title"),
            name: "Lena",
            date: "21.01.2022",
          },
        ]}
      />
      <ContactUsSection
        title={t("teneriffa_contact_us_title")}
        descritpion={t("teneriffa_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("teneriffa_contact_us_input_first_name"),
          },
          { type: "text", placeholder: t("teneriffa_contact_us_input_email") },
        ]}
        formTextarea={t("teneriffa_contact_us_input_write_message")}
        formButton={t("teneriffa_contact_us_input_send_message")}
        cardImageSrc={Contact}
        cardTitle={t("teneriffa_contact_us_card_title")}
        cardDesc={t("teneriffa_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("teneriffa_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <MdOutlineLocalPhone />,
          },
          {
            title: t("teneriffa_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <HiOutlineMail />,
          },
          {
            title: t("teneriffa_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <BsWhatsapp />,
          },
        ]}
      />
      <TagSection
        title={t("teneriffa_link_title")}
        cols="xl:grid-cols-4"
        items={[
          {
            title: t("teneriffa_link_col1_title"),
            items: [
              t("teneriffa_link_col1_item1"),
              t("teneriffa_link_col1_item1"),
              t("teneriffa_link_col1_item1"),
              t("teneriffa_link_col1_item1"),
            ],
          },
          {
            title: t("teneriffa_link_col2_title"),
            items: [
              t("teneriffa_link_col2_item1"),
              t("teneriffa_link_col2_item1"),
              t("teneriffa_link_col2_item1"),
              t("teneriffa_link_col2_item1"),
            ],
          },
          {
            title: t("teneriffa_link_col3_title"),
            items: [
              t("teneriffa_link_col3_item1"),
              t("teneriffa_link_col3_item1"),
              t("teneriffa_link_col3_item1"),
              t("teneriffa_link_col3_item1"),
            ],
          },
          {
            title: t("teneriffa_link_col4_title"),
            items: [
              t("teneriffa_link_col4_item1"),
              t("teneriffa_link_col4_item1"),
              t("teneriffa_link_col4_item1"),
              t("teneriffa_link_col4_item1"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampTeneriffa;

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
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
//ImageGalleryWindow
import ImageGalleryWindow from "../../components/ImageGalleryWindow/ImageGalleryWindow";
//SlideDivider
import SlideDivider from "../../components/SlideDivider/SlideDivider";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
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
            icon: <Like size={38} />,
            title: t("teneriffa_3_symbol_title1"),
            description: t("teneriffa_3_symbol_subtitle1"),
            readMore: "Zu den Details",
          },
          {
            icon: <Star size={38} />,
            title: t("teneriffa_3_symbol_title2"),
            description: t("teneriffa_3_symbol_subtitle2"),
            readMore: "Zu den Details",
          },
          {
            icon: <Heart size={38} />,
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Zielgruppen-Tab-Element/Surfcamps-Alleinreisende-Teneriffa.jpg",
            detailsTitle: t("teneriffa_big_tab_tab1_title"),
            detailsDesc: t("teneriffa_big_tab_tab1_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab1_more"),
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Zielgruppen-Tab-Element/Surfcamps-Teneriffa-Gruppen-Freunde.jpg",
            detailsTitle: t("teneriffa_big_tab_tab2_title"),
            detailsDesc: t("teneriffa_big_tab_tab2_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab2_more"),
            cardItems: [
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
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Zielgruppen-Tab-Element/Surf-Reisen-Teneriffa-Paare.jpg",
            detailsTitle: t("teneriffa_big_tab_tab3_title"),
            detailsDesc: t("teneriffa_big_tab_tab3_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab3_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            detailsImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Zielgruppen-Tab-Element/Surfurlaub-Familien-Teneriffa.jpg",
            detailsTitle: t("teneriffa_big_tab_tab4_title"),
            detailsDesc: t("teneriffa_big_tab_tab4_subtitle"),
            detailsReadMore: "",
            cardTitle: t("teneriffa_big_tab_tab4_more"),
            cardItems: [
              {
                cardImage:
                  "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <ImageGalleryFivePic
        title={t("teneriffa_5_linked_image_title")}
        description={t("teneriffa_5_linked_image_subtitle")}
        image1={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-Natur.jpg",

          title: t("teneriffa_5_linked_image_item1"),
        }}
        image2={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kategorien-5er_LI/Surf-Yoga-Camps-Teneriffa.jpg",
          title: t("teneriffa_5_linked_image_item2"),
        }}
        image3={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kategorien-5er_LI/Low-Budget-Surfcamps-Teneriffa.jpg",
          title: t("teneriffa_5_linked_image_item3"),
        }}
        image4={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-flexible-Stornierung.jpg",
          title: t("teneriffa_5_linked_image_item4"),
        }}
        image5={{
          img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kategorien-5er_LI/Surfcamps-Teneriffa-Camping.jpg",
          title: t("teneriffa_5_linked_image_item5"),
        }}
      />
      <ListAndImage
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besonderheiten-Divider/Surfcamps-Teneriffa-Besonderheiten.jpg"
        }
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
          {
            cardImage:
              "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/cardImage.jpg",
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
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/SUP-Tour_Surfcamps-Teneriffa.jpg",

            title: t("teneriffa_3_part_link_image_item1_title"),
            description: t("teneriffa_3_part_link_image_item1_subtitle"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/Kajak-Tour-Delphine_Surfcamps-Teneriffa.jpg",
            title: t("teneriffa_3_part_link_image_item2_title"),
            description: t("teneriffa_3_part_link_image_item2_subtitle"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/Schnorchel-ausflug-Schildkröten_Surfcamps-Teneriffa.jpg",
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
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kanaren-Divider/Surfcamps-Kanaren.jpg"
        }
        buttonTitle={t("teneriffa_big_divider_button")}
      />
      <SingleColImg
        title={t("teneriffa_3_part_link_image2_title")}
        description={t("teneriffa_3_part_link_image2_sutitle")}
        items={[
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Anfaenger.jpg",

            title: t("teneriffa_3_part_link_image2_item1_title"),
            description: t("teneriffa_3_part_link_image2_item1_sutitle"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Fortgeschrittene.jpg",
            title: t("teneriffa_3_part_link_image2_item2_title"),
            description: t("teneriffa_3_part_link_image2_item2_sutitle"),
          },
          {
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Vorkenntnisse_3er-LI/Surfcamps-Teneriffa-Profis.jpg",
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
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kunden-Divider/Surfcamps-Teneriffa-Bewertungen.jpg"
        }
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <ImageGalleryWindow
        title={t("teneriffa_6_part_linked_image_title")}
        description={t("teneriffa_6_part_linked_image_subtitle")}
        items={[
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/Schnorchel-ausflug-Schildkroeten_Surfcamps-Teneriffa.jpg",

            title: t("teneriffa_6_part_linked_image_item1_title"),
            description: t("teneriffa_6_part_linked_image_item1_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/Paragliding_Surfcamps-Teneriffa.jpg",
            title: t("teneriffa_6_part_linked_image_item2_title"),
            description: t("teneriffa_6_part_linked_image_item2_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/SUP-Tour_Surfcamps-Teneriffa.jpg",
            title: t("teneriffa_6_part_linked_image_item3_title"),
            description: t("teneriffa_6_part_linked_image_item3_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/Vulkan-Teide_Surfcamps-Teneriffa.jpg",
            title: t("teneriffa_6_part_linked_image_item4_title"),
            description: t("teneriffa_6_part_linked_image_item4_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/Freediving_Surfcamps-Teneriffa.jpg",
            title: t("teneriffa_6_part_linked_image_item5_title"),
            description: t("teneriffa_6_part_linked_image_item5_subtitle"),
          },
          {
            shadowSize: "80",
            img: "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Besondere-Extras_6er-Kacheln/Kajak-Tour-Delphine_Surfcamps-Teneriffa.jpg",
            title: t("teneriffa_6_part_linked_image_item6_title"),
            description: t("teneriffa_6_part_linked_image_item6_subtitle"),
          },
        ]}
      />
      <SlideDivider
        image={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/teneriffa/Kunden-Divider/Surfcamps-Teneriffa_Bewertungen.jpg"
        }
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
        cardImageSrc={
          "https://moveriitest.s3.eu-central-1.amazonaws.com/statics/landing/images/contact.jpg"
        }
        cardTitle={t("teneriffa_contact_us_card_title")}
        cardDesc={t("teneriffa_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("teneriffa_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("teneriffa_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("teneriffa_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
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

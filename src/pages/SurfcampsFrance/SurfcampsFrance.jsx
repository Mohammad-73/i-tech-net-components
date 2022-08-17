import React from "react";
import { useTranslation } from "react-i18next";
import {
  HeartOrange,
  LikeOrange,
  StarOrange,
  Phone,
  Email,
  Whatsapp,
  RightArrow,
} from "../../assets/icons/icons";

// Hero
import Hero from "../../components/Hero/Hero";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Frankreich-Alleinreisende.jpg";
import image2 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Familien-Frankreich.jpg";
import image3 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Frankreich_Gruppen-Freunde.jpg";
import image4 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Paare-Frankreich.jpg";
import image5 from "../../assets/surfcampFrance/imageGalleryFiveImage/Surfcamps-Frankreich-Jugendliche.jpg";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";

// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/surfcampFrance/listAndImage/Surfcamp-Campingurlaub-Frankreich.jpg";
import ListAndImage2 from "../../assets/surfcampFrance/listAndImage/Surfhaus_Surflodge_Frankreich.jpg";
import ListAndImage3 from "../../assets/surfcampFrance/listAndImage/Surfurlaub-Apartments.jpg";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";

//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import img1 from "../../assets/surfcampFrance/g3/Surf-Yoga-Camps-Frankreich.jpg";
import img2 from "../../assets/surfcampFrance/g3/Surf-Pilates-Urlaub-Frankreich.jpg";
import img3 from "../../assets/surfcampFrance/g3/Surf-Pole-Dance-Reisen-Frankreich.jpg";
import img4 from "../../assets/surfcampFrance/g3/Surfcamps-Frankreich-Flexible-Stornierung.jpg";
import img5 from "../../assets/surfcampFrance/g3/Low-Budget-Surfcamps-Frankreich.jpg";
import img6 from "../../assets/surfcampFrance/g3/Surfcamps-Frankreich-Natur.jpg";
//Description
import Description from "../../components/Description/Description";
import Moliets from "../../assets/surfcampFrance/details/Surfcamps-Moliets-Frankreich.jpg";
import Seignosse from "../../assets/surfcampFrance/details/Surfcamps-Seignosse-Frankreich.jpg";
import Mimizan from "../../assets/surfcampFrance/details/Surfcamp-Mimizan-Plage-Frankreich.jpg";
import Vieux from "../../assets/surfcampFrance/details/Surfcamp-Vieux-Boucau-Frankreich.jpg";
import LePinSec from "../../assets/surfcampFrance/details/Surfcamps-Le-Pin-Sec-Frankreich.jpg";
import Ferret from "../../assets/surfcampFrance/details/Surfcamp-Cap-Ferret-Frankreich.jpg";
import Biarritz from "../../assets/surfcampFrance/details/Surfurlaub-Biarritz-Frankreich.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/surfcampFrance/threeCol/Surfcamps-Frankreich-Anfänger.jpg";
import Col32 from "../../assets/surfcampFrance/threeCol/Surfcamps-Frankreich-Intermediates.jpg";
import Col33 from "../../assets/surfcampFrance/threeCol/Surfari-Surf-Guiding-Frankreich.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/images/Besonderheiten.jpg";
//RateCardSection
import RateCardSection from "../../components/RateCardSection/RateCardSection";
import RateImg from "../../assets/images/g1.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";

//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampsFrance = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        image="bg-hero-france"
        title={t("france_header_title")}
        description={t("france_header_subtitle")}
      />
      <ImageGalleryFivePic
        title={t("france_5_linked_image_element_title")}
        description={t("france_5_linked_image_element_subtitle")}
        image1={{ img: image1, title: t("france_5_linked_image_element_tab1") }}
        image2={{ img: image2, title: t("france_5_linked_image_element_tab2") }}
        image3={{ img: image3, title: t("france_5_linked_image_element_tab3") }}
        image4={{ img: image4, title: t("france_5_linked_image_element_tab4") }}
        image5={{ img: image5, title: t("france_5_linked_image_element_tab5") }}
      />
      <ColorDivider
        title={t("france_narrow_divider_element_title")}
        description={t("france_narrow_divider_element_text")}
        buttonTitle={t("france_narrow_divider_element_button")}
        buttonIcon={<RightArrow size={30} />}
      />
      <ListAndImage
        image={ListAndImage1}
        title={t("france_image_and_text_element_title1")}
        description={t("france_image_and_text_element_text1")}
        readMore={t("france_image_and_text_element_more1")}
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage2}
        title={t("france_image_and_text_element_title2")}
        description={t("france_image_and_text_element_text2")}
        readMore={t("france_image_and_text_element_more2")}
      />
      <ListAndImage
        image={ListAndImage3}
        title={t("france_image_and_text_element_title3")}
        description={t("france_image_and_text_element_text3")}
        readMore={t("france_image_and_text_element_more3")}
      />
      <HorizontalHintSection
        bgColor="bg-custom-blue"
        items={[
          {
            icon: <HeartOrange size={56} />,
            description: t("france_4_symbol_element_item1"),
          },
          {
            icon: <LikeOrange size={56} />,
            description: t("france_4_symbol_element_item2"),
          },
          {
            icon: <StarOrange size={56} />,
            description: t("france_4_symbol_element_item3"),
          },
          {
            icon: <HeartOrange size={56} />,
            description: t("france_4_symbol_element_item4"),
          },
        ]}
      />
      <SingleCardSection
        title={t("france_offer_element_4_part_carousel_title")}
        description={t("france_offer_element_4_part_carousel_subtitle")}
        items={[
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
            title: "Eco Surfcamp inmitten einer Eichenfarm",
            location: "Seignosse, Frankreich",
            calender: "03.04. - 29.10.2022",
            rateDesc: "",
            price: "558 €",
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
            title: "Gemütliche Surf Villa mit Jacuzzi am Strand",
            location: "Seignosse, Frankreich",
            calender: "03.04.- 23.09.2022",
            rateDesc: "",
            price: "658 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Ü23 Surfhaus am ewigen Sandstrand",
            location: "Mimizan-Plage, Frankreich",
            calender: "4 Termine im Jahr",
            rateDesc: "",
            price: "465 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfcamp in einer eigenen Welt",
            location: "Cap Ferret, Frankreich",
            calender: "08.05. - 28.08.2022",
            rateDesc: "",
            price: "399 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Gemütliches Yoga- & Surfhaus in Südwestfrankreich",
            location: "Bénesse-Maremne, Frankreich",
            calender: "02.04. - 01.10.2022",
            rateDesc: "",
            price: "538 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Familiäre Surf Lodge mitten im Grünen",
            location: "Azur, Frankreich",
            calender: "14.05. - 15.10.2022",
            rateDesc: "",
            price: "31 €",
            priceTitle: "pro Nacht",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surf & Yoga Lodge für über 23 Jährige",
            location: "Mimzan-Plage, Frankreich",
            calender: "4 Termine im Jahr",
            rateDesc: "",
            price: "515 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfen & Fitness: Ruhe, Gemeinschaft und Action",
            location: "Seignosse, Frankreich",
            calender: "03.04. - 29.10.2022",
            rateDesc: "",
            price: "696 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Umweltbewusster Surf & Yoga Urlaub",
            location: "Seignosse, Frankreich",
            calender: "05.04. - 30.10.2021",
            rateDesc: "",
            price: "648 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <SingleCardSection
        title={t("france_offer_element_3_part_title")}
        description={t("france_offer_element_3_part_subtitle")}
        items={[
          {
            cardImage: cardImage,
            title: "Surfcamp in Moliets: Summer Vibes & gute Laune",
            location: "Moliets, Frankreich",
            calender: "21.05. - 24.09.2022",
            rateDesc: "",
            price: "359 €",
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
            title: "Surfen & gute Laune in den Pinienwäldern Moliets",
            location: "Moliets, Frankreich",
            calender: "21.05. - 17.09.2022",
            rateDesc: "",
            price: "389 €",
            priceTitle: "für 8 Tages",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-3"
      />
      <ColorDivider
        title={t("france_small_divider_title")}
        description={t("france_small_divider_text")}
        buttonTitle={t("france_small_divider_button")}
      />
      <ImageGallery3
        title={t("france_6_part_linked_image_element_title")}
        items={[
          {
            img: img1,
            shadow: "80",
            title: t("france_6_part_linked_image_element_item1"),
          },
          {
            img: img2,
            shadow: "80",
            title: t("france_6_part_linked_image_element_item2"),
          },
          {
            img: img3,
            shadow: "80",
            title: t("france_6_part_linked_image_element_item3"),
          },
          {
            img: img4,
            shadow: "80",
            title: t("france_6_part_linked_image_element_item4"),
          },
          {
            img: img5,
            shadow: "80",
            title: t("france_6_part_linked_image_element_item5"),
          },
          {
            img: img6,
            shadow: "80",
            title: t("france_6_part_linked_image_element_item6"),
          },
        ]}
      />
      <Description
        titel={t("france_big_tab_element_title")}
        tabItems={[
          t("france_big_tab_element_tab1"),
          t("france_big_tab_element_tab2"),
          t("france_big_tab_element_tab3"),
          t("france_big_tab_element_tab4"),
          t("france_big_tab_element_tab5"),
          t("france_big_tab_element_tab6"),
          t("france_big_tab_element_tab7"),
        ]}
        tabCols="lg:grid-cols-7"
        tabContents={[
          {
            detailsImage: Moliets,
            detailsTitle: t("france_big_tab_element_title1"),
            detailsDesc: t("france_big_tab_element_text1"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Moliets",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp in Moliets: Summer Vibes & gute Laune",
                location: "Moliets, Frankreich",
                calender: "21.05. - 24.09.2022",
                rateDesc: "",
                price: "359 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfen & gute Laune in den Pinienwäldern Moliets",
                location: "Moliets, Frankreich",
                calender: "21.05. - 17.09.2022",
                rateDesc: "",
                price: "389 €",
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
                title: "Surf- & Yogacamp am grenzenlosen Sandstrand",
                location: "Moliets, Frankreich",
                calender: "21.05. - 17.09.2022",
                rateDesc: "",
                price: "434 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Seignosse,
            detailsTitle: t("france_big_tab_element_title2"),
            detailsDesc: t("france_big_tab_element_text2"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Seignosse",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Eco Surfcamp inmitten einer Eichenfarm",
                location: "Seignosse, Frankreich",
                calender: "03.04. - 29.10.2022",
                rateDesc: "",
                price: "558 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Umweltbewusster Surf & Yoga Urlaub",
                location: "Seignosse, Frankreich",
                calender: "21.05. - 17.09.2022",
                rateDesc: "",
                price: "648 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Gemütliche Surf Villa mit Jacuzzi am Strand",
                location: "Seignosse, Frankreich",
                calender: "03.04.- 23.09.2022",
                rateDesc: "",
                price: "658 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfen & Fitness: Ruhe, Gemeinschaft und Action",
                location: "Seignosse, Frankreich",
                calender: "03.04. - 29.10.2022",
                rateDesc: "",
                price: "696 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Mimizan,
            detailsTitle: t("france_big_tab_element_title3"),
            detailsDesc: t("france_big_tab_element_text3"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Mimizan Plage",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Ü23 Surfhaus am ewigen Sandstrand",
                location: "Mimizan-Plage, Frankreich",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "465 €",
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
                price: "648 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surf & Yoga Lodge für über 23 Jährige",
                location: "Mimzan-Plage, Frankreich",
                calender: "4 Termine im Jahr",
                rateDesc: "",
                price: "515 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Vieux,
            detailsTitle: t("france_big_tab_element_title4"),
            detailsDesc: t("france_big_tab_element_text4"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamp in Vieux Boucau",
            cardItems: [
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: LePinSec,
            detailsTitle: t("france_big_tab_element_title5"),
            detailsDesc: t("france_big_tab_element_text5"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamp in Le Pin Sec",
            cardItems: [
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
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Ferret,
            detailsTitle: t("france_big_tab_element_title6"),
            detailsDesc: t("france_big_tab_element_text6"),
            detailsReadMore: "",
            cardTitle: "Top-Surfcamp am Cap Ferret",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp in einer eigenen Welt",
                location: "Cap Ferret, Frankreich",
                calender: "08.05. - 28.08.2022",
                rateDesc: "",
                price: "399 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Biarritz,
            detailsTitle: t("france_big_tab_element_title7"),
            detailsDesc: t("france_big_tab_element_text7"),
            detailsReadMore: "Zu den Details",
            cardTitle: "Top-Surfcamp in Biarritz",
            cardItems: [
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
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <SingleColImg
        title={t("france_3_liked_iamges_title")}
        description={t("france_3_liked_iamges_subtitle")}
        items={[
          {
            img: Col31,
            title: t("france_3_liked_iamges_tab1_title"),
            description: t("france_3_liked_iamges_tab1_subtitle"),
          },
          {
            img: Col32,
            title: t("france_3_liked_iamges_tab2_title"),
            description: t("france_3_liked_iamges_tab2_subtitle"),
          },
          {
            img: Col33,
            title: t("france_3_liked_iamges_tab3_title"),
            description: t("france_3_liked_iamges_tab3_subtitle"),
          },
        ]}
        cols="md:grid-cols-3"
      />
      <DividerImg
        image={Besonderheiten}
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <RateCardSection
        title={t("frande_review_element_title")}
        items={[
          {
            rateName: "Emmi",
            rateDesc: t("france_review_element1"),
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote: t("france_review_element_more1"),
          },
          {
            rateName: "J Erb",
            rateDesc: t("france_review_element2"),
            rateImage: RateImg,
            rateCalendar: "02.08.2021",
            rateFootNote: t("france_review_element_more2"),
          },
          {
            rateName: "Marlene",
            ateDesc: t("france_review_element3"),
            rateImage: RateImg,
            rateCalendar: "02.08.2021",
            rateFootNote: t("france_review_element_more3"),
          },
          {
            rateName: "Mara",
            ateDesc: t("france_review_element4"),
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote: t("france_review_element_more4"),
          },
          {
            rateName: "Annik",
            ateDesc: t("france_review_element5"),
            rateImage: RateImg,
            rateCalendar: "28.09.2021",
            rateFootNote: t("france_review_element_more5"),
          },
          {
            rateName: "Jana",
            ateDesc: t("france_review_element6"),
            rateImage: RateImg,
            rateCalendar: "30.07.2021",
            rateFootNote: t("france_review_element_more6"),
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title={t("france_contact_us_title")}
        descritpion={t("france_contact_us_subtitle")}
        formInputs={[
          {
            type: "text",
            placeholder: t("france_contact_us_input_first_name"),
          },
          { type: "text", placeholder: t("france_contact_us_input_email") },
        ]}
        formTextarea={t("france_contact_us_input_write_message")}
        formButton={t("france_contact_us_input_send_message")}
        cardImageSrc={Contact}
        cardTitle={t("france_contact_us_card_title")}
        cardDesc={t("france_contact_us_card_subtitle")}
        cardItems={[
          {
            title: t("france_contact_us_card_phone"),
            address: "+49 (0)228 7638 2040",
            icon: <Phone />,
          },
          {
            title: t("france_contact_us_card_email"),
            address: "team@moverii.de",
            icon: <Email />,
          },
          {
            title: t("france_contact_us_card_whatsapp"),
            address: "+49 (0)163 3122 260",
            icon: <Whatsapp />,
          },
        ]}
      />
      <TagSection
        title={t("france_link_element_title")}
        cols="xl:grid-cols-3"
        items={[
          {
            title: t("france_link_element_col1_title"),
            items: [
              t("france_link_element_col1_item1"),
              t("france_link_element_col1_item2"),
              t("france_link_element_col1_item3"),
              t("france_link_element_col1_item4"),
            ],
          },
          {
            title: t("france_link_element_col2_title"),
            items: [
              t("france_link_element_col2_item1"),
              t("france_link_element_col2_item2"),
              t("france_link_element_col2_item3"),
              t("france_link_element_col2_item4"),
            ],
          },

          {
            title: t("france_link_element_col3_title"),
            items: [
              t("france_link_element_col3_item1"),
              t("france_link_element_col3_item2"),
              t("france_link_element_col3_item3"),
              t("france_link_element_col3_item4"),
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampsFrance;

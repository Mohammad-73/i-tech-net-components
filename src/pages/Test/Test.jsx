import React, { useState } from "react";
//SmallNewsletter
import SmallNewsletter from "../../components/SmallNewsletter/SmallNewsletter";
import SmallNewsletterImg from "../../assets/images/extra1.jpg";
//Newsletter
import Newsletter from "../../components/Newsletter/Newsletter";
import NewsletterImg1 from "../../assets/images/G23.jpg";
import NewsletterImg2 from "../../assets/images/G25.jpg";
import NewsletterImg3 from "../../assets/images/g1.jpg";
//VideoPlayer
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
//ListAndVideo
import ListAndVideo from "../../components/ListAndVideo/ListAndVideo";
//ListAndDesc
import ListAndDesc from "../../components/SlideAndDesc/SlideAndDesc";
import slideImg1 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Bali.jpg";
import slideImg2 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Deutschland.jpg";
import slideImg3 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Frankreich.jpg";
import slideImg4 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Indien.jpg";
import slideImg5 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Italien.jpg";
import slideImg6 from "../../assets/yogaRetreats/Reiseziele/Yoga-Retreat-Kanaren.jpg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");

  const handleLang = (e) => {
    setLang(e.target.value);
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div>
      <form>
        <select value={lang} onChange={handleLang}>
          <option value="en">En</option>
          <option value="du">Du</option>
        </select>
      </form>
      <h1>{t("euro_big_tab_element_text2")}</h1>
      <SmallNewsletter
        image={SmallNewsletterImg}
        title="NewsLetter"
        description="Erhalte Inspiration & exklusive Rabatte für deine Sportreise:"
        inputPlaceholder="Enter Your Email Address"
        buttonTitle="Submit"
      />
      <Newsletter
        image1={NewsletterImg1}
        image2={NewsletterImg2}
        image3={NewsletterImg3}
        title="Moverii Newletter"
        description="Sign up for our Tourlane newsletter and you'll get real insider tips on off-the-beaten-path destinations, cool itineraries, and unique accommodations!"
        inputPlaceholder="Enter Your Email Address"
        buttonTitle="Submit"
      />
      <VideoPlayer title="About Moveriii" />
      <ListAndVideo
        title="title"
        description="description Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!"
      />
      <ListAndDesc
        buttonText="Read More"
        items={[
          {
            image: slideImg1,
            title: "title",
            description:
              "description Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!",
          },
          {
            image: slideImg2,
            title: "title2",
            description:
              "description2 Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!",
          },
          {
            image: slideImg3,
            title: "title3",
            description:
              "description3 Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!",
          },
          {
            image: slideImg4,
            title: "title4",
            description:
              "description4 Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!",
          },
          {
            image: slideImg5,
            title: "title5",
            description:
              "description5 Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!",
          },
          {
            image: slideImg6,
            title: "title6",
            description:
              "description6 Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst garantiert das nächste Level!",
          },
        ]}
      />
    </div>
  );
};

export default Test;

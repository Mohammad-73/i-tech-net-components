import React from "react";
//SmallNewsletter
import SmallNewsletter from "../../components/SmallNewsletter/SmallNewsletter";
import SmallNewsletterImg from "../../assets/images/extra1.jpg";
//Newsletter
import Newsletter from "../../components/Newsletter/Newsletter";
import NewsletterImg1 from "../../assets/images/G23.jpg";
import NewsletterImg2 from "../../assets/images/G25.jpg";
import NewsletterImg3 from "../../assets/images/g1.jpg";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";

const Test = () => {
  return (
    <div>
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
      <HorizontalCard />
    </div>
  );
};

export default Test;

import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import ContactForm from "../ContactForm/ContactForm";

const ContactUsSection = ({
  title,
  descritpion,
  cardImageSrc,
  cardItems,
  cardTitle,
  cardDesc,
  formInputs,
  formTextarea,
  formButton,
}) => {
  return (
    <div className="w-full py-7 ">
      <div className="mx-auto max-w-6xl py-9">
        <div className="flex flex-col-reverse md:flex-row justify-between px-6 lg:px-0">
          <div className="my-7">
            <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
            <p className="text-[0.87rem] text-[#2B2D42]">{descritpion}</p>
            <ContactForm
              formInputs={formInputs}
              formTextarea={formTextarea}
              formButton={formButton}
            />
          </div>
          <div>
            <ContactCard
              imageSrc={cardImageSrc}
              items={cardItems}
              title={cardTitle}
              descritpion={cardDesc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;

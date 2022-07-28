import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import ContactForm from "../ContactForm/ContactForm";

const ContactUsSection = () => {
  return (
    <div className="w-full py-7 ">
      <div className="mx-auto max-w-6xl py-9">
        <div className="flex flex-col-reverse md:flex-row justify-between px-6 lg:px-0">
          <div className="my-7">
            <h1 className="text-[1.56rem] text-[#2B2D42]">
              Beliebte Kategorien für einen Surfurlaub in Europa
            </h1>
            <ContactForm />
          </div>
          <div>
            <ContactCard
              imageSrc={Contact}
              items={[
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;

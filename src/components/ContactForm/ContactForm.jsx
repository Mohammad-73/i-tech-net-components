import React from "react";
import Button from "../Button/Button";

const ContactForm = ({ formInputs, formTextarea, formButton }) => {
  return (
    <form className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
        {formInputs.map((item, index) => (
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[1.25rem] w-full md:w-[90%] my-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type={item.type}
            value=""
            placeholder={item.placeholder}
          />
        ))}
      </div>
      {formTextarea && (
        <textarea
          value=""
          placeholder={formTextarea}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[1.25rem] w-full md:w-[95%] min-h-[150px] mb-6 mt-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        ></textarea>
      )}
      <Button text={formButton} />
    </form>
  );
};

export default ContactForm;

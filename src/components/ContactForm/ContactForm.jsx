import React from "react";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <form className="w-full">
      <div className="flex flex-col justify-between md:flex-row  md:items-center  mt-6">
        <div className="">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[1.25rem] w-full md:w-[90%] my-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value=""
            placeholder="Your name"
          />
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[1.25rem] w-full md:w-[90%] my-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value=""
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[1.25rem] w-full md:w-[90%] my-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Email Address"
            value=""
          />
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[1.25rem] w-full md:w-[90%] my-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value=""
            placeholder="Subject"
          />
        </div>
      </div>
      <textarea
        value=""
        placeholder="Write your message"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-[1.25rem] w-full md:w-[95%] min-h-[150px] mb-6 mt-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      ></textarea>
      <Button text="Send a Message" />
    </form>
  );
};

export default ContactForm;

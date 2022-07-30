import React from "react";

const ContactCard = ({ imageSrc, items, title, descritpion }) => {
  return (
    <div className="w-full md:w-[24rem] h-full bg-white rounded-[1.25rem] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="rounded-t-[1.25rem]">
        <img
          className="rounded-t-[1.25rem] w-full object-cover object-center"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="p-4">
        <h1 className="text-[#2B2D42] text-[1.25rem]">{title}</h1>
        <p className="text-[#2B2D42] text-[0.87rem]">{descritpion}</p>
      </div>
      <div className="p-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="text-[#787B9A] text-[1rem]">{item.title}</p>
            <span className="flex items-center text-[1.12rem]">
              <span className="pr-1">{item.icon}</span>
              <p>{item.address}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;

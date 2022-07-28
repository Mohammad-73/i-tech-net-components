import React from "react";

const ContactCard = ({ imageSrc, items }) => {
  return (
    <div className="w-[24rem] h-[27rem] bg-white rounded-[1.25rem] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="rounded-t-[1.25rem]">
        <img
          className="rounded-t-[1.25rem] w-full object-cover object-center"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="p-4">
        {items.map((item, index) => (
          <div className="flex flex-col">
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

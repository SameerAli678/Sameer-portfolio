import { ContactData } from "@/constant/contact-data";
import { ContactFormData } from "@/constant/contact-from-data";
import React from "react";
import Input from "./input ";
import Button from "./button/button";
import Arrow from "@/../public/icons/Arrow.svg";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-around gap-y-9 items-center p-2 rounded-2xl border border-primary-Normal">
      {/* 1st section */}
      <div className="flex flex-col justify-around items-center gap-y-3 py-6">
        <h1 className="text-primary-Normal text-5xl">Contact Us</h1>
        <p className="text-center">
          Have a question or need assistance? We are here to help <br />
          you every step of the way. Get in touch with us and lets build
          <br />
          something amazing together.
        </p>
      </div>
      {/* 2nd section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center w-full">
        {ContactData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-y-3 justify-center text-center items-center"
          >
            <div className="flex w-14 h-14 bg-white rounded-full justify-center items-center text-black">
              <div className="text-2xl">{item.icon}</div>
            </div>
            <h1 className="text-primary-Normal text-3xl">{item.heading}</h1>
            <p className="text-md">{item.text}</p>
          </div>
        ))}
      </div>

      {/* 3rd section */}

      <div className="grid grid-cols-1 bg-white text-black w-full max-w-3xl sm:p-5 rounded-3xl gap-y-3 p-2 m-0">
        <div className="grid grid-cols-2 gap-y-3">
          {ContactFormData.map((item, i) => (
            <div
              key={i}
              className={`${item.type == "email" ? `md:!col-span-2` : ``}`}
            >
              <Input {...item} className={`flex text-gray-700 w-full`} />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="leading-7 text-md">
            Send us a message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white-darkWhite rounded-lg border border-gray-300 focus:border-primary focus:ring-2 p-2
             focus:ring-indigo-200 h-32 text-base outline-none text-gray-700  resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <div>
          <Button text="Send Massage" icon={Arrow} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

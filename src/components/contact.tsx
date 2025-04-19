import { ContactData } from "@/constant/contact-data";
import ContactFrom from "./contact-from";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-around gap-y-9 items-center p-2 rounded-2xl border-primary-Normal bg-primary py-9"
    >
      {/* 1st section */}
      <div className="flex flex-col justify-around items-center gap-y-3 py-6">
        <h1 className="text-primary-Normal text-5xl" data-aos="zoom-in">
          Contact Us
        </h1>
        <p data-aos="fade-up" className="flex justify-center px-3">
          Have a question or need assistance? We are here to help you every step
          of the way. Get in touch with us and lets build something amazing
          together.
        </p>
      </div>
      {/* 2nd section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center w-full gap-y-8">
        {ContactData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-y-3 justify-center text-center items-center"
          >
            <div className="flex w-14 h-14 bg-white rounded-full justify-center items-center text-black">
              <div data-aos="zoom-in" className="text-2xl">
                {item.icon}
              </div>
            </div>
            <h1
              data-aos="zoom-in-left"
              className="text-primary-Normal text-3xl"
            >
              {item.heading}
            </h1>
            <p data-aos="zoom-in-right" className="text-md">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* 3rd section */}
      <ContactFrom />
    </div>
  );
};

export default ContactUs;

import Arrow from "@/../public/icons/Arrow.svg";
import { ContactFormData } from "@/constant/contact-from-data";
import { ContactSchema } from "@/schema/contactSchema";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "./button/button";
import Input from "./input ";

const initialValues = {
  firstName: "",
  email: "",
  lastName: "",
  message: "",
};
const ContactFrom = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setIsPending(true);
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        await response.json();

        resetForm();

        if (response.ok) toast.success("Email sent successfully!");
        else toast.error("Failed to send email. Please try again.");

        setIsPending(false);
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
        setIsPending(false);
      }
    },
  });

  const { values, errors, handleSubmit, handleChange, touched, resetForm } =
    formik;
  return (
    <div className="grid grid-cols-1 bg-white text-black w-full max-w-5xl sm:px-3 rounded-3xl gap-y-3 px-2 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {ContactFormData.map((item, i) => (
          <div
            key={i}
            className={`${item.type == "email" ? `md:!col-span-2` : ``}`}
            data-aos="fade-down"
            data-aos-delay={i * 500}
          >
            <Input
              {...item}
              value={values[item.name as keyof typeof values]}
              error={errors[item.name as keyof typeof errors]}
              touched={touched[item.name as keyof typeof touched]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div className="mb-4" data-aos="zoom-out-right">
        <label htmlFor="message" className="leading-7 text-md">
          Send us a message
        </label>
        <textarea
          value={values.message}
          onChange={handleChange}
          placeholder="Write a Message"
          id="message"
          name="message"
          className={`w-full bg-white-darkWhite rounded-lg border border-gray-300 focus:border-primary focus:ring-2 p-2
         focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out ${
           errors.message ? "border-red-500" : "border-gray-300"
         }`}
        ></textarea>
      </div>
      <div data-aos="flip-left">
        <Button
          text="Send Message"
          icon={Arrow}
          onClick={handleSubmit}
          loading={isPending}
        />
      </div>
    </div>
  );
};

export default ContactFrom;

import React from "react";
import Button from "../button/button";
import Arrow from "@/../public/icons/Arrow.svg";
import ScrollDown from "@/../public/Images/ScrollDown.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-primary w-full h-full">
      <div className="text-white text-md p-9 gap-y-6 grid">
        <h1 className="text-5xl">
          I Create{" "}
          <span className="italic font-semibold bg-gradient-to-r from-primary-Normal to-pink text-transparent bg-clip-text">
            beautiful
          </span>{" "}
          experiences
        </h1>
        <p>
          I work with people all over the world to create tailor-made Webflow
          experiences
        </p>
        <a href={"/cv/Sameer-ali-cv.pdf"} download>
          <Button text="Sameer Ali CV" icon={Arrow} />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-end pb-10 px-9 gap-y-3">
        <p className="text-white text-2xl italic font-semibold sm:order-1 order-2">
          Front end developer
        </p>
        <div className="flex sm:order-2 order-1">
          <Image src={ScrollDown} alt="ScrollDown" width={200} height={300} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

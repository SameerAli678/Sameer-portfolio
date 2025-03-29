import Image from "next/image";
import React from "react";
import LatsTalk from "@/../public/Images/LatsTalk.png";

const Footer = () => {
  return (
    <div className="grid bg-[#1E0044]">
      <div className="grid justify-center items-center">
        <h1 className="grid text-center items-center text-white  text-5xl">
          Interested in <br />
          working together?
        </h1>
        <Image src={LatsTalk} alt="LatsTalk" width={200} height={100} />
      </div>
    </div>
  );
};

export default Footer;

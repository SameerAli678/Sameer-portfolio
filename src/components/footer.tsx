"use client";
import Image from "next/image";
import React from "react";
import LatsTalk from "@/../public/Images/LatsTalk.png";
import Arrow from "@/../public/icons/Arrow.svg";
import Link from "next/link";
import Button from "./button/button";

const Footer = () => {
  return (
    <div className="grid w-full bg-primary rounded-3xl">
      {/* 1st section */}
      <div className="flex flex-col justify-between gap-6 py-6 text-white sm:flex-row px-9">
        <Link href={"#top"}>
          <div className="text-2xl font-charm" data-aos="fade-down-right">
            Sameer Ali
          </div>
        </Link>
        <Button
          text="Github"
          onClick={() =>
            window.open("https://github.com/SameerAli678", "_blank")
          }
          icon={Arrow}
        />
      </div>
      {/* 2nd section */}
      <div className="grid p-4 gap-9">
        <h1
          data-aos="fade-down"
          className="grid items-center text-5xl text-white sm:text-center"
        >
          Interested in <br />
          working together?
        </h1>
        <div
          data-aos="fade-up"
          className="flex sm:text-center sm:justify-center"
        >
          <Image src={LatsTalk} alt="LatsTalk" width={150} height={100} />
        </div>
      </div>
      {/* 3rd section */}
      <div className="flex flex-col justify-between gap-6 py-6 text-white sm:flex-row px-9">
        <p data-aos="fade-up-right">Front end Developer</p>
        <p data-aos="fade-up-left">©2025 – All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

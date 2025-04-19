"use client";
import Image from "next/image";
import React from "react";
import LatsTalk from "@/../public/Images/LatsTalk.png";
import Arrow from "@/../public/icons/Arrow.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid bg-primary rounded-3xl w-full">
      {/* 1st section */}
      <div className="flex sm:flex-row flex-col justify-between px-9 py-6 gap-6 text-white">
        <Link href={"#top"}>
          <div className="text-2xl font-charm" data-aos="fade-down-right">
            Sameer Ali
          </div>
        </Link>
        <a
          href="https://github.com/SameerAli678"
          className="flex gap-x-2 text-md items-center cursor-pointer"
          target="_blank"
          data-aos="fade-down-left"
        >
          <p>Github</p>
          <Image src={Arrow} alt="Arrow" />
        </a>
      </div>
      {/* 2nd section */}
      <div className="grid gap-9 p-4">
        <h1
          data-aos="fade-down"
          className="grid sm:text-center items-center text-white text-5xl"
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
      <div className="flex sm:flex-row flex-col justify-between px-9 py-6 gap-6 text-white">
        <p data-aos="fade-up-right">Front end Developer</p>
        <p data-aos="fade-up-left">©2025 – All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

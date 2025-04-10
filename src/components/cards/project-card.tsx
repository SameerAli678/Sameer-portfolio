"use client";
import Image from "next/image";
import React from "react";
import blackArrow from "@/../public/icons/blackArrow.svg";
import Arrow from "@/../public/icons/Arrow.svg";
import Button from "../button/button";
import { ProjectCardInterface } from "@/interfaces/project-card-interface";
import SimpleButton from "../button/simple-button";
import Link from "next/link";

const ProjectCard = ({
  text,
  isWhite,
  className,
  icon,
  heading,
  paragraph,
  link,
}: ProjectCardInterface) => {
  return (
    <div
      className={`${
        isWhite ? `flex bg-white text-black` : `flex bg-primary text-white`
      }flex flex-col md:flex-row justify-between p-3 sm:p-6 rounded-3xl sm:m-3 gap-8 
        ${className}`}
    >
      {/* 1st section */}
      <div
        className={`flex flex-col justify-between w-full max-w-lg md:order-1 order-2 gap-y-6 ${
          isWhite ? `text-black` : `text-white`
        }`}
      >
        {/* heading section */}
        <div className="grid gap-y-3">
          <p className="text-xl">{text}</p>
          <h1 className="flex text-3xl font-semibold">{heading}</h1>
          <div className="flex gap-x-4">
            {isWhite ? (
              <SimpleButton text="development" isWhite />
            ) : (
              <SimpleButton text="development" />
            )}
            <button
              className={`flex border p-3 rounded-3xl items-center justify-center w-fit h-9 text-lg border-black ${
                isWhite ? `border-black` : `border-white`
              }`}
            >
              development
            </button>
          </div>
        </div>
        {/* view button */}
        <div className="grid gap-6">
          <p>{paragraph}</p>
          <Link href={link || ""} target="_blank">
            {isWhite ? (
              <Button
                text="see case study"
                isOutline
                icon={blackArrow}
                className=" flex items-center"
              />
            ) : (
              <Button
                text="see case study"
                icon={Arrow}
                className=" flex items-center"
              />
            )}
          </Link>
        </div>
      </div>
      {/* 2nd end image section */}
      <div className="order-1 md:order-2">
        <Image
          src={icon || ""}
          alt="image"
          width={400}
          height={300}
          className="flex w-full h-full max-w-xl max-h-sm"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

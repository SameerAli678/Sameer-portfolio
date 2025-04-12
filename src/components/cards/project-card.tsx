"use client";
import React from "react";
import blackArrow from "@/../public/icons/blackArrow.svg";
import Arrow from "@/../public/icons/Arrow.svg";
import Button from "../button/button";
import { ProjectCardInterface } from "@/interfaces/project-card-interface";
import SimpleButton from "../button/simple-button";
import Link from "next/link";
import { ChipData } from "@/constant/chips-data";

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
        isWhite
          ? `flex bg-[url('/images/card-white.png')] bg-cover text-black`
          : `flex bg-[url('/images/card-primary.png')] bg-cover text-white`
      }flex flex-col md:flex-row justify-between p-3 sm:p-6 rounded-3xl gap-8 lg:h-[500px] bg-cover
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
            {isWhite
              ? ChipData.map((item, i) => {
                  return <SimpleButton text={item.name} key={i} isWhite />;
                })
              : ChipData.map((item, i) => {
                  return <SimpleButton text={item.name} key={i} />;
                })}
          </div>
        </div>
        {/* view button */}
        <div className="grid gap-6">
          <p>{paragraph}</p>
          <Link href={link || ""} target="_blank">
            {isWhite ? (
              <Button
                text="Live review"
                isOutline
                icon={blackArrow}
                className=" flex items-center"
              />
            ) : (
              <Button
                text="Live review"
                icon={Arrow}
                className=" flex items-center"
              />
            )}
          </Link>
        </div>
      </div>
      {/* 2nd end image section */}
      <div className="order-1 md:order-2">
        <Link href={link || ""} target="_blank">
          <iframe
            src={icon || ""}
            className="flex h-full rounded-xl bg-white-darkWhite"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import Arrow from "@/../public/icons/Arrow.svg";
import blackArrow from "@/../public/icons/blackArrow.svg";
import { ProjectCardInterface } from "@/interfaces/project-card-interface";
import Link from "next/link";
import Button from "./button/button";

const ProjectCard = ({
  title,
  isWhite,
  className,
  projectUrl,
  heading,
  paragraph,
  link,
  tags,
}: ProjectCardInterface) => {
  return (
    <div
      className={`${
        isWhite
          ? `bg-[url('/images/card-white.png')] text-black`
          : `bg-[url('/images/card-primary.png')] text-white`
      } flex flex-col md:flex-row justify-between p-3 sm:p-6 rounded-3xl gap-8 lg:h-[500px] bg-cover ${className}`}
    >
      {/* 1st section */}
      <div
        className={`flex flex-col justify-between w-full max-w-lg md:order-1 order-2 gap-y-6 ${
          isWhite ? `text-black` : `text-white`
        }`}
      >
        {/* heading section */}
        <div className="grid gap-y-3">
          <p data-aos="zoom-in-right" className="text-xl">
            {title}
          </p>
          <h1 data-aos="zoom-in-left" className="flex text-3xl font-semibold">
            {heading}
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-fit">
            {tags.map((item, i) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 500}
                  key={i}
                  className={`${
                    isWhite ? "bg-primary text-white" : "bg-white text-black"
                  } rounded-full px-4 py-1 justify-center flex`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        {/* view button */}
        <div className="grid gap-6">
          <p data-aos="fade-left">{paragraph}</p>
          <Link href={link} target="_blank" data-aos="flip-left">
            {isWhite ? (
              <Button
                text="Live review"
                isOutline={isWhite}
                icon={blackArrow}
                className="flex items-center"
              />
            ) : (
              <Button
                text="Live review"
                icon={Arrow}
                className="flex items-center"
              />
            )}
          </Link>
        </div>
      </div>

      {/* 2nd end image section */}
      <div className="order-1 lg:order-2 w-full lg:max-w-[660px]">
        <div className="flex justify-end h-full">
          <iframe
            src={projectUrl}
            className="h-full shadow-lg w-full rounded-xl bg-white-darkWhite min-h-[500px] lg:min-h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

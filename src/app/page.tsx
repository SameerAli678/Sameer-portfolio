"use client";
import About from "@/components/about";
import ProjectCard from "@/components/cards/project-card";
import Hero from "@/components/hero";
import { ProjectCardData } from "@/constant/project-card-data";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      {ProjectCardData.map((item, i) => (
        <ProjectCard
          key={i}
          icon={item.icon}
          paragraph={item.Paragraph}
          heading={item.heading}
          text={item.text}
          isWhite={item.isWhite}
          link={item.link}
        />
      ))}
    </Fragment>
  );
}

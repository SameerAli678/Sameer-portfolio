"use client";
import About from "@/components/about";
import ProjectCard from "@/components/cards/project-card";
import ContactUs from "@/components/contact-us/contact-us";
import { ProjectCardData } from "@/constant/project-card-data";

export default function Home() {
  return (
    <div className="grid bg-background gap-y-6">
      <About />
      <ContactUs />
      <div className="">
        {ProjectCardData.map((item, i) => (
          <ProjectCard
            key={i}
            icon={item.icon}
            paragraph={item.Paragraph}
            heading={item.heading}
            text={item.text}
            isWhite={item.isWhite}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import About from "@/components/about";
import ProjectCard from "@/components/cards/project-card";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import ContactUs from "@/components/contact-us/contact-us";

import { ProjectCardData } from "@/constant/project-card-data";

export default function Home() {
  return (
    <div className="grid bg-background gap-y-6">
      <About />

 <ContactUs /> 
      <div id="projects" className="grid gap-y-6 scroll-my-5">
        {ProjectCardData.map((item, i) => (
          <ProjectCard key={i} {...item} paragraph={item.Paragraph} />
        ))}
      </div>

      <Skills />
    </div>
  );
}

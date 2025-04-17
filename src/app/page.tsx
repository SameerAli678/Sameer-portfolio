"use client";
import About from "@/components/about";
import ProjectCard from "@/components/project-card";
import ContactUs from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Skills from "@/components/skills";

import { ProjectCardData } from "@/constant/project-card-data";

export default function Home() {
  return (
    <div className="flex flex-col bg-background gap-y-3">
      {/* hero section */}
      <HeroSection />

      {/* About */}
      <About />

      {/* ProjectCard */}
      <div id="projects" className="gap-y-6">
        {ProjectCardData.map((item, i) => (
          <ProjectCard key={i} {...item} paragraph={item.Paragraph} />
        ))}
      </div>

      {/* ContactUs */}
      <ContactUs />

      {/* Skills */}
      <Skills />
    </div>
  );
}

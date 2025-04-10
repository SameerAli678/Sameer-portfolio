"use client";
import ProjectCard from "@/components/cards/project-card";
import Footer from "@/components/footer/footer";
import { ProjectCardData } from "@/constant/project-card-data";

export default function Home() {
  return (
    <div className="grid bg-background">
      <Footer />
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
    </div>
  );
}

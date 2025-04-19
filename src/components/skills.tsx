import { categorizedData } from "@/constant/skills-categorized";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-primary flex flex-col gap-y-9 rounded-[20px] p-10 max-w-fit overflow-x-hidden items-center"
    >
      <h2 className="text-4xl font-medium">My Skills</h2>

      <Marquee gradient gradientWidth={200} autoFill gradientColor="#1E0044">
        <div className="flex gap-20 items-center pl-20">
          {categorizedData.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <Image
                src={item.img}
                alt={item.name}
                className="w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300"
                width={48}
                height={48}
              />
              <h3 className="font-medium text-silver-contrast text-sm text-center mt-2">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;

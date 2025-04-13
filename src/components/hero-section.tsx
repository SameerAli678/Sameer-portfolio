import Image from "next/image";
import Link from "next/link";
import TextAnimation from "./text-animation";

const HeroSection = () => {
  return (
    <div className="bg-primary flex flex-col justify-between rounded-b-[20px] p-10 min-h-[600px]">
      <div />
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-medium">
          I craft{" "}
          <span className="italic pr-2 sm:min-w-[300px] lg:min-w-[500px] xl:min-w-fit bg-text-gradient pb-1 inline-block text-transparent bg-clip-text">
            {/* Memorable */}
            <TextAnimation
              text={[
                "memorable",
                2000,
                "beautiful",
                2000,
                "seamless",
                2000,
                "engaging",
                2000,
                "interactive",
                2000,
              ]}
            />
          </span>
          experiences.
        </h1>
        <p className="max-w-[550px] text-sm sm:text-xl lg:text-2xl">
          I’m a front-end developer and designer who builds clean, modern, and
          user-focused web experiences.
        </p>
      </div>
      <div className="flex gap-4 justify-between items-end">
        <p>Available for work</p>
        <Link href="#about">
          <Image
            alt=""
            src="/icons/scroll-down.svg"
            width={106}
            height={106}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

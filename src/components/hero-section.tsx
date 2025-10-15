import Image from "next/image";
import Link from "next/link";
import TextAnimation from "./text-animation";

const HeroSection = () => {
  return (
    <div className="bg-primary flex flex-col justify-between rounded-b-[20px] p-7 md:p-10 min-h-[600px]">
      <div />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium text-white md:text-6xl lg:text-8xl">
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
        <p className="text-sm sm:text-xl lg:text-2xl">
          As a front-end developer, I focus on creating digital experiences that
          are both visually engaging and technically sound. From intuitive
          layouts to optimized code, every project I build aims to combine
          design precision with robust performance to make the web more
          efficient and enjoyable.
        </p>
      </div>
      <div className="flex items-end justify-between gap-4">
        <p data-aos="zoom-in-right">Available for work</p>
        <Link href="#about" data-aos="flip-right">
          <Image
            alt=""
            src="/icons/scroll-down.svg"
            width={106}
            height={106}
            className="transition-all duration-300 cursor-pointer hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

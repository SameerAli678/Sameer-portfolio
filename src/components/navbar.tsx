"use client";
import { navItems } from "@/constant/nav-items";
import Link from "next/link";
import Arrow from "@/../public/icons/Arrow.svg";
import Button from "./button/button";

const Navbar = () => {
  return (
    <nav
      id="top"
      className="text-white bg-primary rounded-t-[20px] p-5 flex flex-col sm:flex-row justify-start sm:justify-between
       sm:items-center gap-y-5"
    >
      <Link href={"#top"} className="text-2xl font-charm" data-aos="zoom-in">
        Sameer Ali
      </Link>
      <div className="hidden md:flex items-center gap-x-5">
        {navItems.map((item, index) => (
          <p
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={index * 500}
            className="relative font-medium text-sm group"
          >
            <Link href={item.href}>{item.title}</Link>
            <span
              className={
                "absolute left-0 bottom-[-0px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"
              }
            />
          </p>
        ))}
      </div>
      <a href="/cv/Sameer-ali-cv.pdf" download data-aos="flip-left">
        <Button text="Sameer Ali CV" icon={Arrow} />
      </a>
    </nav>
  );
};

export default Navbar;

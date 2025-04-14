"use client";
import { navItems } from "@/constant/nav-items";
import Link from "next/link";
// import Arrow from "@/../public/icons/Arrow.svg";

const Navbar = () => {
  return (
    <nav
      id="top"
      className="text-white bg-primary rounded-t-[20px] p-5 flex justify-between items-center"
    >
      <Link href={"#top"} className="text-2xl font-charm">
        Sameer Ali
      </Link>
      <div className="hidden md:flex items-center gap-x-5">
        {navItems.map((item) => (
          <p key={item.title} className="relative font-medium text-sm group">
            <Link href={item.href}>{item.title}</Link>
            <span
              className={
                "absolute left-0 bottom-[-0px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"
              }
            />
          </p>
        ))}
      </div>
      {/* icon={Arrow} */}
      {/* <Button text="cv" /> */}
      <p>Let&#39;s Talk</p>
    </nav>
  );
};

export default Navbar;

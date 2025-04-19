"use client";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AnimationLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className=" overflow-hidden">
      {children}
    </div>
  );
};

export default AnimationLayout;

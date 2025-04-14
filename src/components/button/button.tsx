// src/components/buttons/button.tsx
// Interfaces Import
import { ButtonInterface } from "@/interfaces/button-interface";

// Next & React Imports
import Image from "next/image";
import React from "react";

const Button = ({
  type,
  isOutline,
  onClick,
  className,
  icon,
  text,
  loading,
}: ButtonInterface) => {
  return (
    // button
    <button
      disabled={loading}
      type={type}
      onClick={onClick}
      className={`${
        isOutline
          ? "text-black bg-white font-semibold"
          : "bg-primary text-white"
      } ${className} flex p-3 rounded-3xl items-center justify-center w-fit h-9 text-lg border border-pink shadow-md shadow-pink gap-x-2`}
    >
      {text}
      {icon && (
        // Image
        <Image src={icon} alt="icon" height={10} width={15} />
      )}
    </button>
  );
};

export default Button;

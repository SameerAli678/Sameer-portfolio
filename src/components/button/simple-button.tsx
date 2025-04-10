// src/components/buttons/button.tsx
// Interfaces Import
import { SimpleButtonInterface } from "@/interfaces/simple-button-interface";

// Next & React Imports
import Image from "next/image";
import React from "react";

const SimpleButton = ({
  type,
  isWhite,
  onClick,
  className,
  icon,
  text,
}: SimpleButtonInterface) => {
  return (
    // button
    <button
      type={type}
      onClick={onClick}
      className={`${
        isWhite
          ? "text-black border border-black bg-white"
          : "text-white border border-white"
      } ${className} flex p-3 rounded-3xl items-center justify-center w-fit h-9 text-lg gap-x-2`}
    >
      {text}
      {icon && (
        // Image
        <Image src={icon} alt="icon" height={10} width={15} />
      )}
    </button>
  );
};

export default SimpleButton;

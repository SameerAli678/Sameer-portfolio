// src/Components/inputs/input.tsx
"use client";

// Lib import
import { cn } from "@/lib/cn-utils";

// React import
import React from "react";

// Use interface InputProps
interface InputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const Input = ({
  label,
  type,
  error,
  touched,
  required,
  className,
  ...res
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  // is Error
  const isError = error && touched;

  return (
    // Label
    <label htmlFor="input" className="space-y-1">
      {label && (
        <p className="text-secondary-700 text-sm font-normal capitalize line-clamp-1">
          {label}
          {required && <span className="text-red">*</span>}
        </p>
      )}
      {/* Cn  */}
      <div
        className={cn(
          "w-full h-11",
          "bg-white",
          "border !border-border",
          "rounded-md shadow-box-shadow",
          "flex justify-between items-center",
          className,
          isError && "!border-red-400"
        )}
      >
        {/* Input  */}
        <input
          type={type}
          id="input"
          className="w-full h-full px-3 py-2 outline-none  rounded-md"
          {...res}
        />
      </div>
      {/* Error  */}
      {isError && <p className="text-red-600 text-xs">{error}</p>}
    </label>
  );
};

export default Input;

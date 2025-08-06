import React from "react";

const Button = ({className, size, onClick, disabled, children}) => {
  return (
    <button
      className={`disabled:opacity-[0.6] bg-gray-200 text-black cursor-pointer ${
        size === "sm"
          ? "text-medium py-2 px-5 rounded-md"
          : size === "md"
          ? "text-xl py-3 px-10 rounded-md"
          : size === "lg"
          ? "text-2xl py-5 px-12 rounded-xl"
          : size === "xl"
          ? "text-3xl py-7 px-16 rounded-xl"
          : ""
      } font-bold flex justify-center text-center items-center ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

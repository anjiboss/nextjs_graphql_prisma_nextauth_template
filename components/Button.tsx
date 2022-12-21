import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button type={type} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " + className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;

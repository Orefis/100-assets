import React, { ReactNode } from 'react';

import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "cancel" | "submit" | "warning";
  icon?: ReactNode; // Optional props
  isLoading?: boolean; // Optional props
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant, icon, isLoading = false }) => {
  // Base className
  let baseClasses = "inline-flex items-center justify-center gap-2 px-4 py-2 font-bold text-lg text-white rounded-xl shadow hover:shadow-md focus:outline-none focus:shadow-outline transform transition active:scale-[.98] hover:scale-[1.01] ease-in-out active:duration-75 transition-all";

  // Button variants
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-teal-400 hover:bg-teal-600";
      break;
    case "cancel":
      variantClasses = "bg-rose-500 hover:bg-rose-700";
      break;
    case "submit":
      variantClasses = "bg-cyan-500 hover:bg-cyan-700";
      break;
    case "warning":
      variantClasses = "bg-orange-500 hover:bg-orange-600"; 
      break;
    default:
      variantClasses = "bg-gray-500 hover:bg-gray-700"; // Domyślny styl, jeśli wariant nie jest rozpoznany
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${variantClasses}`} disabled={isLoading}>
      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin h-7 w-7 " />
      ) : icon ? (
        <span>{icon}</span>
      ) : null}
      {!isLoading && children}
    </button>
  );
};

export default Button;

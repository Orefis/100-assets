import React from "react";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl shadow-xl bg-opacity-80 backdrop-blur-3xl">
      {children}
    </div>
  );
}

export default Card;

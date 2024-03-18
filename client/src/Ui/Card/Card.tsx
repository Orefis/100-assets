import React from "react";

interface CardProps {
  children: React.ReactNode;
}
// TODO poprawic ten component zeby dalo sie propsy przekazac
function Card({ children }: CardProps) {
  return (
    <div className="bg-black w-full h-full p-10 rounded-3xl shadow-2xl bg-opacity-50 backdrop-blur-3xl">
      {children}
    </div>
  );
}

export default Card;

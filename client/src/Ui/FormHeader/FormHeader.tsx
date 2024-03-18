import React from "react";

interface FormHeaderProps {
  title: string;
  subtitle: string;
}

function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <>
      <h1 className="text-4xl font-bold text-teal-300">{title}</h1>
      <p className="font-medium text-lg text-gray-300 mt-4">{subtitle}</p>
    </>
  );
}

export default FormHeader;

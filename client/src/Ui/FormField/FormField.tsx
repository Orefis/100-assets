import React from "react";

interface FormHeaderProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}


function FormField({ label, type, placeholder, id }: FormHeaderProps) {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="text-lg font-medium text-gray-700">{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="border-2 border-gray-300 rounded-xl p-3 w-full mt-1 focus:border-emerald-300 outline-none"
        />
      </div>
    );
  }

  export default FormField
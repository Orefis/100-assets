import React, { ReactElement, useState } from "react"; // Import React and ReactElement

interface FormHeaderProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  icon?: ReactElement;
}

function FormField({ label, type, placeholder, id, icon }: FormHeaderProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const iconClass = `absolute right-5 top-1/2 -translate-y-1/2 ${
    isFocused ? "text-teal-400" : "text-gray-300"
  }`;

  return (
    <div className="mb-4 relative">
      <label htmlFor={id} className="text-lg font-medium text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="border-2 border-gray-300 rounded-xl p-3 pr-11 w-full mt-1 focus:border-teal-400 outline-none caret-teal-600"
        />
        {icon &&
          React.cloneElement(icon, {
            className: iconClass,
            style: { fontSize: "1.25rem" },
          })}
      </div>
    </div>
  );
}

export default FormField;

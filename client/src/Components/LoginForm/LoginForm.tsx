import React from "react";
import Form from "./form";

function LoginForm() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <Form />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-emerald-500 to-lime-500 rounded-full animate-bounce"></div>
        <div className="w-1/2 h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}

export default LoginForm;

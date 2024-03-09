import * as React from "react";
import googleLogo from "../Assets/logo/google_logo.svg";

function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-emerald-500 bg-opacity-25 bg-blur-xl">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please eneter your details.
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="border-2 border-gray-100 rounded-xl p-3 w-full mt-1 focus:border-emerald-500 outline-none"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="border-2 border-gray-100 rounded-xl p-3 w-full focus:border-emerald-500 outline-none"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember-me" />
            <label className="ml-2 font-medium text-base" htmlFor="remember-me">
              Remember for 30 days
            </label>
          </div>
          <button className="font-medium text-base text-emerald-500">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 rounded-xl bg-emerald-500 text-white text-lg font-bold">
            Sign in
          </button>
          <button className="flex border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] hover:scale-[1.01] ease-in-out active:duration-75 transition-all py-3 rounded-xl text-lg">
            <img className="h-6 w-6" src={googleLogo} alt="Google Logo" />
            Sign in with Google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button className="text-emerald-500 text-base font-medium ml-2">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

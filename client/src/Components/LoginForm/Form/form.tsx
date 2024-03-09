import * as React from "react";
import googleLogo from "../../Assets/logo/google_logo.svg";

function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl shadow-xl bg-opacity-90 bg-blur">
  <h1 className="text-4xl font-semibold text-gray-800">Welcome Back</h1>
  <p className="font-medium text-lg text-gray-500 mt-4">
    Welcome back! Please enter your details.
  </p>
  <div className="mt-8">
    <div className="mb-4">
      <label className="text-lg font-medium text-gray-700">Email</label>
      <input
        className="border-2 border-gray-300 rounded-xl p-3 w-full mt-1 focus:border-emerald-300 outline-none"
        type="email"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-4">
      <label className="text-lg font-medium text-gray-700">Password</label>
      <input
        className="border-2 border-gray-300 rounded-xl p-3 w-full focus:border-emerald-300 outline-none"
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <div className="mt-8 flex justify-between items-center">
      <div>
        <input type="checkbox" id="remember-me" />
        <label className="ml-2 font-medium text-gray-700" htmlFor="remember-me">
          Remember for 30 days
        </label>
      </div>
      <button className="font-medium text-emerald-500">
        Forgot password?
      </button>
    </div>
    <div className="mt-8 flex flex-col gap-y-4">
      <button className="py-3 rounded-xl bg-emerald-500 text-white text-lg font-bold active:scale-[.98] hover:scale-[1.01] ease-in-out active:duration-75 transition-all">
        Sign in
      </button>
      <button className="flex border-2 border-gray-300 items-center justify-center gap-2 py-3 rounded-xl text-lg font-medium text-gray-700 hover:bg-gray-100 active:scale-[.98] hover:scale-[1.01] ease-in-out active:duration-75 transition-all">
        <img className="h-6 w-6" src={googleLogo} alt="Google Logo" />
        Sign in with Google
      </button>
    </div>
    <div className="mt-8 flex justify-center items-center">
      <p className="font-medium text-gray-700">Don't have an account?</p>
      <button className="text-emerald-500 text-lg font-medium ml-2">
        Sign up
      </button>
    </div>
  </div>
</div>

  );
}

export default Form;

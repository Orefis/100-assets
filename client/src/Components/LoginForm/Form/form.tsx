import googleLogo from "../../Assets/logo/google_logo.svg";
import FormHeader from "../../../Ui/FormHeader/FormHeader";
import FormField from "../../../Ui/FormField/FormField";
import { MdLock, MdPerson } from "react-icons/md";

function Form() {
  return (
    // TODO - przeniesienie tej klasy Carda do reuzywalnego componentu.
    <div className="bg-white px-10 py-20 rounded-3xl shadow-xl bg-opacity-80 backdrop-blur-3xl">
      <FormHeader title="Login" subtitle="Welcome back! Please enter your details." />
      <div className="mt-8">
        <FormField label="Email" type="email" placeholder="Enter your email" id="email" icon={<MdPerson  />} />
        <FormField label="Password" type="password" placeholder="Enter your password" id="password" icon={<MdLock />} />
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember-me" />
            <label
              className="ml-2 font-medium text-gray-700"
              htmlFor="remember-me"
            >
              Remember for 30 days
            </label>
          </div>
          <button className="font-medium text-emerald-500">
            Forgot password?
          </button>
        </div>
        {/* TODO przenieść buttony jako w pełni edytowalne komponenty do ofolderu UI w celu uzyskania reuzywalnych przycisków */}
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

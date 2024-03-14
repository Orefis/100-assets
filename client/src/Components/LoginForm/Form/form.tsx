import { useState } from "react";
import FormHeader from "../../../Ui/FormHeader/FormHeader";
import FormField from "../../../Ui/FormField/FormField";
import Card from "../../../Ui/Card/Card";
import Button from "../../../Ui/Button/Button";

import { MdLock, MdPerson } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";

function Form() {
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [isLoadingSignInWithGoogle, setIsLoadingSignInWithGoogle] =
    useState(false);

  const handleSignInClick = async () => {
    setIsLoadingSignIn(true);
    //TODO: Tutaj wykonaj operację logowania
    setTimeout(() => {
      setIsLoadingSignIn(false);
      alert("Zalogowano!");
    }, 1000); // Symulacja żądania sieciowego
  };

  const handleSignInWithGoogleClick = async () => {
    setIsLoadingSignInWithGoogle(true);
    //TODO: Tutaj wykonaj operację logowania przez Google
    setTimeout(() => {
      setIsLoadingSignInWithGoogle(false);
      alert("Zalogowano przez Google!");
    }, 1000); // Symulacja żądania sieciowego
  };

  return (
    <div className="w-3/5">
      <Card>
        <FormHeader
          title="Login"
          subtitle="Welcome back! Please enter your details."
        />
        <div className="mt-8">
          <FormField
            label="Email"
            type="email"
            placeholder="Enter your email"
            id="email"
            icon={<MdPerson />}
          />
          <FormField
            label="Password"
            type="password"
            placeholder="Enter your password"
            id="password"
            icon={<MdLock />}
          />
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
          <div className="mt-8 flex flex-col gap-y-4">
            <Button
              variant="primary"
              onClick={handleSignInClick}
              isLoading={isLoadingSignIn}
            >
              Sign in
            </Button>
            <Button
              variant="cancel"
              icon={<FaGoogle />}
              onClick={handleSignInWithGoogleClick}
              isLoading={isLoadingSignInWithGoogle}
            >
              Sign in with Google
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-gray-700">Don't have an account?</p>
            <button className="text-emerald-500 text-lg font-medium ml-2">
              Sign up
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Form;

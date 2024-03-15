import { useState } from "react";
import FormHeader from "../../../Ui/FormHeader/FormHeader";
import FormField from "../../../Ui/FormField/FormField";
import Card from "../../../Ui/Card/Card";
import Button from "../../../Ui/Button/Button";

import { MdPerson, MdMail, MdLock } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";

function RegisterForm() {
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
          title="Register"
          subtitle="Welcome! Please enter your details."
        />
        <div className="mt-8">
          <div className="flex justify-between items-center space-x-6">
            <FormField
              label="Name"
              type="text"
              placeholder="Enter your Name"
              id="name"
              icon={<MdPerson />}
            />
            <FormField
              label="Last Name"
              type="text"
              placeholder="Enter your Last Name"
              id="eastName"
              icon={<MdPerson />}
            />
          </div>
          <FormField
            label="Email"
            type="email"
            placeholder="Enter your email"
            id="email"
            icon={<MdMail />}
          />
          <div className="flex items-center space-x-6">
            <FormField
              label="Password"
              type="password"
              placeholder="Enter your Password"
              id="password"
              icon={<MdLock />}
            />
            <FormField
              label=" Repeat Password"
              type="password"
              placeholder="Repeat your Password"
              id="repeatPassword"
              icon={<MdLock />}
            />
          </div>
          <div>
            <input type="checkbox" id="remember-me" />
            <label
              className="ml-2 font-medium text-gray-700"
              htmlFor="remember-me"
            >
              I'm read and agree to the{" "}
              <button className="text-emerald-500 text-lg font-medium">
                privacy policy
              </button>
            </label>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <Button
              variant="primary"
              onClick={handleSignInClick}
              isLoading={isLoadingSignIn}
            >
              Sign up
            </Button>
            <Button
              variant="submit"
              icon={<FaGoogle />}
              onClick={handleSignInWithGoogleClick}
              isLoading={isLoadingSignInWithGoogle}
            >
              Sign up with Google
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-gray-700">Already have account?</p>
            <button className="text-emerald-500 text-lg font-medium ml-2">
              Sign in
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RegisterForm;

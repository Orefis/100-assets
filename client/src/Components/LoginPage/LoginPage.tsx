import "./LoginPage.css";
import LoginForm from "./LoginForm/LoginForm";

import bgImage from "../Assets/background/bg_2.jpg";
import assetsLogo from "../Assets/logo/100-assets-logo.png";

function LoginPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <img src={bgImage} className="absolute object-center object-cover w-full h-full" alt="background" />
      <div className="flex h-5/6 w-4/6 bg-black p-10 shadow-2xl bg-opacity-10 backdrop-blur-md rounded-3xl">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center ">
          <LoginForm />
        </div>
        <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
          <div>
            <div className="w-full flex relative">
              <img src={assetsLogo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

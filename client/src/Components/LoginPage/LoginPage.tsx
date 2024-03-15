import "./LoginPage.css";
import LoginForm from "./LoginForm/LoginForm";

import assetsLogo from "../Assets/logo/100-assets-logo.png";

function LoginPage() {
  return (
    <div className="flex w-full h-screen bg-gradient-to-br from-emerald-400 via-emerald-300 to-teal-300">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center ">
        <LoginForm />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <div>
          <div className="w-5/6">
            <img src={assetsLogo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

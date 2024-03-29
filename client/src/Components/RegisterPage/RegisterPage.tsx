import "./RegisterPage.css";
import RegisterForm from "./RegisterForm/RegisterForm";

import assetsLogo from "../../Assets/logo/100-assets-logo.png";

function RegisterPage() {
  return (
    <div className="flex w-full h-screen bg-gradient-to-br from-emerald-400 via-emerald-300 to-teal-300">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center ">
        <RegisterForm />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <div>
          <div className="w-5/6">
            <img src={assetsLogo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
    // TODO: Zrobic tak samo jak i login
  );
}

export default RegisterPage;

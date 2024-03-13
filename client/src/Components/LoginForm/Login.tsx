import "./Login.css";
import Card from "../../Ui/Card/Card";
import Form from "./Form/Form";

import assetsLogo from "../Assets/logo/100-assets-logo.png";

function Login() {
  return (
    <div className="flex w-full h-screen bg-gradient-to-br from-emerald-500 via-lime-300 to-green-500">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center ">
        <Form />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <div>
          <div className="w-5/6">
            <img src={assetsLogo} alt="Logo"/>
          </div>
          {/* <div>
            <blockquote className=" floating italic font-medium text-lg text-gray-700 quoteHighlight bg-white px-10 py-20 rounded-3xl shadow-xl bg-opacity-80">
              <p>
                "A single dream is more powerful than a thousand realities."
              </p>
              <cite className="block mt-4 text-right text-emerald-500">
                - J.R.R. Tolkien
              </cite>
            </blockquote>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;

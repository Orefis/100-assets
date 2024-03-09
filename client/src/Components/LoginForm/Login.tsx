import Form from "./Form/form";
import "./Login.css";

function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-emerald-500 via-lime-300 to-green-500">
        <Form />
      </div>
      <div
        className="hidden lg:flex h-full w-1/2 items-center justify-center dynamicBg"
      >
        <div className="p-12 floating">
          <blockquote className="text-center italic font-medium text-lg text-gray-700 quoteHighlight">
            <p>"A single dream is more powerful than a thousand realities."</p>
            <cite className="block mt-4 text-right text-emerald-500">
              - J.R.R. Tolkien
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Login;

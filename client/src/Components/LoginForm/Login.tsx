import Form from "./Form/form";
import "./Login.css";
import Card from "../../Ui/Card/Card";

function Login() {
  return (
    <div className="flex w-full h-screen bg-gradient-to-br from-emerald-500 via-lime-300 to-green-500">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center ">
        <Form />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <div className="p-12 text-center">
          <div className="mb-96">
            <Card >
              {/* //TODOL: pobawic sie jeszce stylami dla logo */}
              <h2 className="text-7xl slashed-zero font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-lime-500 to-green-600">100 ASSETS</h2>
            </Card>
          </div>
          <div>
            <blockquote className=" floating italic font-medium text-lg text-gray-700 quoteHighlight bg-white px-10 py-20 rounded-3xl shadow-xl bg-opacity-80">
              <p>
                "A single dream is more powerful than a thousand realities."
              </p>
              <cite className="block mt-4 text-right text-emerald-500">
                - J.R.R. Tolkien
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

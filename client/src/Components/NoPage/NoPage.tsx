import bgImage from "../Assets/background/bg_1.jpg";

function NoPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <img src={bgImage} className="absolute object-cover w-full h-full"/>
      <div className="flex flex-col items-center backdrop-blur-10 px-36 py-48 rounded-xl bg-black bg-opacity-50 backdrop-blur drop-shadow-2xl shadow-2xl">
        <h1 className="text-2xl font-bold text-white">ERROR 404</h1>
        <h2 className="text-9xl mb-6 font-bold text-white">OOOPS!</h2>
        <h3 className="text-lg font-bold text-white">
          The page you're looking for doesn't exist or have changed.
        </h3>
      </div>
    </div>
  );
}

export default NoPage;

import Sidebar from "../SideMenu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-row flex-wrap">
      <Sidebar />
      <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

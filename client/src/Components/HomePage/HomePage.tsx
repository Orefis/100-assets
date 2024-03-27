import Sidebar from "../SideMenu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-row flex-wrap">
      <Sidebar />
      <div className="bg-gray-100 flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

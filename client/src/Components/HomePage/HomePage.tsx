import Sidebar from "../SideMenu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

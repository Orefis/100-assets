import React, { useState } from 'react';
import Sidebar from "../SideMenu/SideMenu"; // Załóżmy, że SideMenu znajduje się w tym samym katalogu
import { Outlet } from "react-router-dom";

function HomePage() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-row flex-wrap">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
      <div className={`${isCollapsed ? 'ml-14' : 'ml-64'} w-full bg-gray-300 min-h-screen transition-all duration-300 ease-in-out`}>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;

import React from 'react';
import { NavLink } from "react-router-dom";
import MenuItems, { MenuItem } from "../../Data/MenuItems"; // Załóżmy, że ścieżki są poprawne
import * as Icons from "react-icons/ri";
import Logo from "../../Assets/logo/100-assets-logo.png"; // Załóżmy, że ścieżka jest poprawna

interface SideMenuProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isCollapsed, toggleSidebar }) => {
  const IconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <div className={`fixed h-full ${isCollapsed ? 'w-16 -translate-x-1 ' : 'w-64 translate-x-0'} bg-gray-900 p-4 z-50 transition-width duration-300 ease-in-out`}>
      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
        {isCollapsed ? (
          <button onClick={toggleSidebar} className="text-gray-400 hover:text-white w-full flex justify-center">
            <Icons.RiMenuUnfoldLine className="w-6 h-6" />
          </button>
        ) : (
          <>
            <span className="text-gray-200 text-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-100' : 'opacity-0 left-0'}">100 ASSETS</span>
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white ">
              <Icons.RiMenuFoldLine className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
      <div className="mt-2 flex flex-col items-center">
        {MenuItems.map((item: MenuItem) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-center my-2 px-4 text-emerald-400 hover:bg-gray-700 hover:text-emerald-100 rounded-md bg-gray-800 text-white w-full"
                : "flex items-center justify-center my-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-emerald-100 rounded-md text-white w-full"
            }
          >
            <div className={`flex items-center w-full ${isCollapsed ? 'h-9 justify-center' : 'h-9'}`}>
              <div className={`text-lg ${isCollapsed ? 'mx-auto' : ''}`}>
                {IconComponent(item.icon)}
              </div>
              {!isCollapsed && <span className="text-sm font-medium ml-3">{item.name}</span>}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;

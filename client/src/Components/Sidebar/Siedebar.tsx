import { NavLink } from "react-router-dom";
import MenuItems, { MenuItem } from '../../Data/MenuItems';
import * as Icons from 'react-icons/ai';
import { AiOutlineLogout, AiFillGold } from 'react-icons/ai';

function SideMenu() {
  const IconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <div className="flex flex-col items-center w-52 h-screen overflow-hidden text-gray-400 bg-gray-900 rounded-r-lg">
      <NavLink
        to="/home"
        className={({ isActive }) => isActive ? "flex items-center justify-center w-full h-16 bg-gray-800 hover:bg-gray-700 hover:text-gray-300 border-b-2 border-gray-700 bg-gray-700" : "flex items-center justify-center w-full h-16 bg-gray-800 hover:bg-gray-700 hover:text-gray-300 border-b-2 border-gray-700"}
      >
        {/* TODO: przemyśleć sprawe z NAVLINK nt. headera w sidebarze */}
        <AiFillGold className="w-6 h-6" />
        <span className="ml-2 text-lg font-medium">100 ASSETS</span>
      </NavLink>
      <div className="w-full px-3">
        {MenuItems.map((item: MenuItem) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) => isActive ? "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 bg-gray-700 text-gray-300" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"}
          >
            <div className="flex items-center w-full h-12">
              <div style={{ fontSize: '18px' }}>{IconComponent(item.icon)}</div>
              <span className="ml-2 text-sm font-medium">{item.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink
        to="/logout"
        className={({ isActive }) => isActive ? "flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300 bg-gray-700" : "flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"}
      >
        <AiOutlineLogout className="w-6 h-6" />
        <span className="ml-2 text-sm font-medium">Logout</span>
      </NavLink>
    </div>
  );
}

export default SideMenu;

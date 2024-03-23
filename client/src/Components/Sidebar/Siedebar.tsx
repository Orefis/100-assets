import { Link } from "react-router-dom";
import MenuItems, { MenuItem } from '../../Data/MenuItems';
import * as Icons from 'react-icons/ai';
import { AiOutlineLogout, AiFillGold } from 'react-icons/ai';


function SideMenu() {
  const IconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <div className="flex flex-col items-center w-64 h-screen overflow-hidden text-gray-400 bg-gray-900 rounded-r-xl">
      <Link
        to="/"
        className="flex items-center justify-center w-full h-16 bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
      >
         <AiFillGold className="w-8 h-8" />
        <span className="ml-2 text-lg font-medium">100 ASSETS</span>
      </Link>
      <div className="w-full px-3">
        {MenuItems.map((item: MenuItem) => (
          <Link
            to={item.path}
            key={item.name}
            className="flex flex-col items-center w-full mt-3 border-gray-700"
          >
            <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
              <div style={{ fontSize: '24px' }}>{IconComponent(item.icon)}</div>
              <span className="ml-2 text-base font-medium">{item.name}</span>
            </div>
          </Link>
          // TODO: poprawic wielkosc ikon
        ))}
      </div>
      <Link
        to="/"
        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
      >
         <AiOutlineLogout className="w-6 h-6" />
        <span className="ml-2 text-sm font-medium">Logout</span>
      </Link>
    </div>
  );
}

export default SideMenu;

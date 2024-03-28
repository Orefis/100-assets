import { NavLink } from "react-router-dom";
import MenuItems, { MenuItem } from "../../Data/MenuItems";
import * as Icons from "react-icons/ri";
import Logo from "../../Assets/logo/100-assets-logo.png";

function SideMenu() {
  const IconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <div className="fixed h-full w-64 md:w-64 bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
      <div className="flex justify-center items-center pb-4 border-b border-b-gray-80">
        <img src={Logo} alt="logo" className="w-12 h-12 rounded filter invert" />
      </div>
      <div className="w-full mt-4">
        <div className="mb-1">
          <div className="">
            {MenuItems.map((item: MenuItem) => (
              <NavLink
                to={item.path}
                key={item.name}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center my-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md bg-gray-800 text-white"
                    : "flex items-center my-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md text-gray-100"
                }
              >
                <div className="flex items-center w-full h-12">
                  <div className="mr-3 text-lg">
                    {IconComponent(item.icon)}
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

import NotificationMenu from "../../Ui/NotificationMenu/NotificationMenu";
import ProfileMenu from "../../Ui/ProfileMenu/ProfileMenu";
import SearchMenu from "../../Ui/SearchMenu/SearchMenu";

function NaviBar({children}:any) {
  return (
    <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
    <ul className="flex items-center text-sm ml-4">
      <li className="mr-2">
        <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">
          {children}
        </a>
      </li>
    </ul>
    <ul className="ml-auto flex items-center">
      <SearchMenu />
      <NotificationMenu />
      <ProfileMenu/>
    </ul>
  </div>
  );
}

export default NaviBar;

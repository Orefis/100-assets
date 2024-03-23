export interface MenuItem {
  name: string;
  path: string;
  icon: string;
}

const MenuItems: MenuItem[] = [
  { name: "Dashboard", path: "/home", icon: "AiFillHome" },
  { name: "Guides", path: "/guides", icon: "AiFillBook" },
  { name: "Inventory", path: "/inventory", icon: "AiFillDatabase" },
];

export default MenuItems;

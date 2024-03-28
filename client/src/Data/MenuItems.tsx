export interface MenuItem {
  name: string;
  path: string;
  icon: string;
}

const MenuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: "RiHome3Line" },
  { name: "Guides", path: "/guides", icon: "RiBook2Line" },
  { name: "Inventory", path: "/inventory", icon: "RiDatabase2Line" },
  { name: "Settings", path: "/settings", icon: "RiSettings3Line" },
];

export default MenuItems;

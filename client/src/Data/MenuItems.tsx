interface MenuItem {
    name: string;
    path: string;
    icon: string;
  }
  
  const menuItems: MenuItem[] = [
    { name: "Dashboard", path: "/home", icon: "dashboard-icon-path" },
    { name: "Guides", path: "/guides", icon: "guides-icon-path" },
    { name: "Inventory", path: "/inventory", icon: "inventory-icon-path" },

  ];
  
  export default menuItems;
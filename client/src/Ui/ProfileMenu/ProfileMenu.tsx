import { useState, useEffect, useRef } from "react";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  //TODO: pozmieniac tylko style kolorystyczne


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <li className="dropdown ml-3" ref={menuRef}>
      <button
        type="button"
        className="dropdown-toggle flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="https://placehold.co/32x32"
          alt=""
          className="w-8 h-8 rounded block object-cover align-middle "
        />
      </button>
      <div
        className={`${
          isOpen ? "absolute right-4 top-12" : "hidden"
        } dropdown-menu shadow-md shadow-black/5 z-30 max-w-xs w-full bg-white rounded-md border border-gray-100 max-w-[120px]`}
      >
        <ul className="">
          <li>
            <a
              href="#"
              className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default ProfileMenu;

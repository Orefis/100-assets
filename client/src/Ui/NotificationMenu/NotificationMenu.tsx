import { useState, useEffect, useRef } from "react";
import { RiNotification3Line } from "react-icons/ri";

function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("notifications");
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
    <li className="dropdown" ref={menuRef}>
      <button
        type="button"
        className="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiNotification3Line />
      </button>
      <div
        className={`${
          isOpen ? "absolute right-16 top-12" : "hidden"
        } dropdown-menu shadow-md shadow-black/5 z-30 max-w-xs w-full bg-white rounded-md border border-gray-100`}
      >
        <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
          <button
            type="button"
            className={`text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 mr-4 pb-1 ${
              activeTab === "notifications"
                ? "border-b-blue-500"
                : "border-b-transparent"
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
          <button
            type="button"
            className={`text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 mr-4 pb-1 ${
              activeTab === "messages"
                ? "border-b-blue-500"
                : "border-b-transparent"
            }`}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </button>
        </div>
        <div className="my-2">
          {/* Warunkowo renderuj listy na podstawie aktywnego stanu zakładki */}
          {activeTab === "notifications" && (
            <ul className="max-h-64 overflow-y-auto">
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      New order
                    </div>
                    <div className="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      New order
                    </div>
                    <div className="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      New order
                    </div>
                    <div className="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      New order
                    </div>
                    <div className="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      New order
                    </div>
                    <div className="text-[11px] text-gray-400">from a user</div>
                  </div>
                </a>
              </li>
            </ul>
          )}
          {activeTab === "messages" && (
            <ul className="max-h-64 overflow-y-auto">
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      John Doe
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Hello there!
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      John Doe
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Hello there!
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      John Doe
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Hello there!
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      John Doe
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Hello there!
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded block object-cover align-middle"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      John Doe
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Hello there!
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export default NotificationMenu;

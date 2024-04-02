import {RiSearchLine, RiNotification3Line  } from "react-icons/ri";

function DashboardContent() {
  return (
    // TODO: zmienic na reusable component
    <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <ul className="flex items-center text-sm ml-4">
        <li className="mr-2">
          <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">
            Dashboard
          </a>
        </li>
      </ul>
      <ul className="ml-auto flex items-center">
        <li className="mr-1 dropdown">
          <button
            type="button"
            className="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
          >
            <RiSearchLine />
          </button>
          <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
            <form action="" className="p-4 border-b border-b-gray-100">
              <div className="relative w-full">
                <input
                  type="text"
                  className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                  placeholder="Search..."
                />
                <i className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
              </div>
            </form>
            <div className="mt-3 mb-2">
              <div className="text-[13px] font-medium text-gray-400 ml-4 mb-2">
                Recently
              </div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
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
                        Create landing page
                      </div>
                      <div className="text-[11px] text-gray-400">$345</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="dropdown">
          <button
            type="button"
            className="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
          >
            <RiNotification3Line />
          </button>
          <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
            <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
              <button
                type="button"
                data-tab="notification"
                data-tab-page="notifications"
                className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active"
              >
                Notifications
              </button>
              <button
                type="button"
                data-tab="notification"
                data-tab-page="messages"
                className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1"
              >
                Messages
              </button>
            </div>
            <div className="my-2">
              <ul
                className="max-h-64 overflow-y-auto"
                data-tab-for="notification"
                data-page="notifications"
              >
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
                      <div className="text-[11px] text-gray-400">
                        from a user
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
                        New order
                      </div>
                      <div className="text-[11px] text-gray-400">
                        from a user
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
                        New order
                      </div>
                      <div className="text-[11px] text-gray-400">
                        from a user
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
                        New order
                      </div>
                      <div className="text-[11px] text-gray-400">
                        from a user
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
                        New order
                      </div>
                      <div className="text-[11px] text-gray-400">
                        from a user
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <ul
                className="max-h-64 overflow-y-auto hidden"
                data-tab-for="notification"
                data-page="messages"
              >
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
            </div>
          </div>
        </li>
        <li className="dropdown ml-3">
          <button type="button" className="dropdown-toggle flex items-center">
            <img
              src="https://placehold.co/32x32"
              alt=""
              className="w-8 h-8 rounded block object-cover align-middle"
            />
          </button>
          <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
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
        </li>
      </ul>
    </div>
  );
}

export default DashboardContent;

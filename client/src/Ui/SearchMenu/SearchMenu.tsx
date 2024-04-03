import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

function SearchMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: w momencie klikniecia na tło powinno zamknac sie okienko

  return (
    <li className="mr-1 dropdown">
      <button
        type="button"
        className="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiSearchLine />
      </button>
      <div
        className={`${
          isOpen ? "absolute right-24 top-12" : "hidden "
        } dropdown-menu shadow-md shadow-black/5 z-30 max-w-xs w-full bg-white rounded-md border border-gray-100`}
      >
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
  );
}

export default SearchMenu;

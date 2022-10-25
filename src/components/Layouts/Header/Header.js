import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7133/7133597.png"
              className="mr-3 h-6 sm:h-9"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Digital Educations
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="/"
              className="border-2 border-red-400 p-2 rounded-lg mx-2 text-base  font-medium text-blue-600 dark:text-blue-500 hover:bg-red-500 hover:text-white"
            >
              Login
            </a>
            <a
              href="/"
              className="border-2 border-red-400 p-2 rounded-lg mx-2 text-base font-medium text-blue-600 dark:text-blue-500 hover:bg-red-500 hover:text-white"
            >
              Registration
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-lg font-medium">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  (Toggle Theme Button)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

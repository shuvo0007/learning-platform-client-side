import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7133/7133597.png"
              className="mr-3 h-6 sm:h-9"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Digital Educations
            </span>
          </a>

          {/* log in checking if logged in then show name and photo otherwise show login and register button  */}
          <div className="flex items-center">
            {user?.uid ? (
              <div className="flex items-center">
                <p className="m-5 text-xl">{user?.displayName}</p>
                {user.photoURL ? (
                  <>
                    <img
                      className="rounded-full w-16"
                      src={user.photoURL}
                      alt=""
                    />
                  </>
                ) : (
                  <FaRegUser className=""></FaRegUser>
                )}
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="mx-5 text-lg text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <>
                <Link to={"/login"}>
                  <Button className="border-2 border-red-400 p-2 rounded-lg mx-2 text-base  font-medium text-white dark:text-blue-500 hover:bg-red-500 hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to={"/registration"}>
                  <Button className="border-2 border-red-400 p-2 rounded-lg mx-2 text-base font-medium text-white dark:text-blue-500 hover:bg-red-500 hover:text-white">
                    Registration
                  </Button>
                </Link>
              </>
            )}
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
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Courses
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    FAQ
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Blog
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    (Toggle Theme Button)
                  </span>
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

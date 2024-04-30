import { useContext, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip } from "react-tooltip";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.error(error));
  };

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const navlinks = (
    <>
      <li className="border-b p-2 lg:border-b-0 lg:p-0 dark:border-[#4c4c4c]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 font-medium text-[#4793AF]"
                : "font-normal dark:text-white"
            } hover:text-[#4793AF] dark:hover:text-[#4793AF] border-[#4793AF] hover:border-b-2 font-medium transition-all duration-75`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="border-b p-2 lg:border-b-0 lg:p-0 dark:border-[#4c4c4c]">
        <NavLink
          to="/allItems"
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 font-medium text-[#4793AF]"
                : "font-normal dark:text-white"
            } hover:text-[#4793AF] dark:hover:text-[#4793AF] border-[#4793AF] hover:border-b-2 font-medium transition-all duration-75`
          }
        >
          All Arts & Crafts Items
        </NavLink>
      </li>
      {user && (
        <>
          <li className="border-b p-2 lg:border-b-0 lg:p-0 dark:border-[#4c4c4c]">
            <NavLink
              to="/addItem"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 font-medium text-[#4793AF]"
                    : "font-normal dark:text-white"
                } hover:text-[#4793AF] dark:hover:text-[#4793AF] border-[#4793AF] hover:border-b-2 font-medium transition-all duration-75`
              }
            >
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myList"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 font-medium text-[#4793AF]"
                    : "font-normal dark:text-white"
                } hover:text-[#4793AF] dark:hover:text-[#4793AF] border-[#4793AF] hover:border-b-2 font-medium transition-all duration-75`
              }
            >
              My Arts & Crafts List
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-white dark:bg-[#1b1b1b] drop-shadow-lg fixed top-0 z-50 px-3 md:px-8 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoIosMenu className="text-2xl dark:text-white" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content space-y-2 lg:space-y-0 mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52 dark:bg-[#1f1f1f]"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold dark:text-white">
          ArtNest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4">{navlinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <div className="flex gap-3 items-center">
            <div
              className="size-12 rounded-full overflow-hidden"
              id="clickable"
            >
              <img
                className="size-full object-cover object-center"
                src={user.photoURL}
                alt=""
              />
            </div>
            <Tooltip
              anchorSelect="#clickable"
              clickable
              style={{
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p className="font-medium text-lg">{user.displayName}</p>
              <button
                onClick={handleLogOut}
                className="btn mb-2 bg-[#4793AF] text-white border-none text-base hover:bg-[#32697c]"
              >
                Sign out
              </button>
            </Tooltip>
          </div>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `btn text-base border-none shadow-md hover:bg-[#215a6e] text-white ${
                  isActive ? "bg-[#215a6e]" : "bg-[#4793AF]"
                }`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn text-base border-none shadow-md hover:bg-[#215a6e] text-white ${
                  isActive ? "bg-[#215a6e]" : "bg-[#4793AF]"
                }`
              }
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}

        <button onClick={darkModeHandler} className="text-2xl dark:text-white">
          {dark ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

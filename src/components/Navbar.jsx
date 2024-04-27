import { useContext, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

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
      <li className="border-b-2 p-2 lg:border-b-0 lg:p-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:underline underline-offset-2 ${
              isActive
                ? "font-semibold text-blue-500"
                : "font-normal dark:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allItems"
          className={({ isActive }) =>
            `hover:underline underline-offset-2 ${
              isActive
                ? "font-semibold text-blue-500"
                : "font-normal dark:text-white"
            }`
          }
        >
          All Items
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addItem"
              className={({ isActive }) =>
                `hover:underline underline-offset-2 ${
                  isActive
                    ? "font-semibold text-blue-500"
                    : "font-normal dark:text-white"
                }`
              }
            >
              Add Craft Item
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-gray-200 dark:bg-black fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content space-y-2 lg:space-y-0 mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold dark:text-white">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4">{navlinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <div className="flex gap-3 items-center">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="size-12 rounded-full overflow-hidden border border-[#989898]">
                <img
                  className="size-full object-cover object-center"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            </div>
            <button onClick={handleLogOut} className="btn bg-blue-400">
              Sign out
            </button>
          </div>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `btn ${isActive ? "bg-blue-400" : "bg-white"}`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn ${isActive ? "bg-blue-400" : "bg-white"}`
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

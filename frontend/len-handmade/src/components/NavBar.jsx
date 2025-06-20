import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/react.svg";

const NavBar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <div className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={Logo} alt="logo" className="w-full" />
      </Link>

      <div
        className={
          "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-gray-100 py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
          (searchBoxVisibility ? "show" : "hidden")
        }
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto bg-gray-200 px-4 py-2 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-gray-500 md:pl-14"
        />
        <i className="fi fi-rr-search absolute right-[8%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-gray-500"></i>
      </div>

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          className="md:hidden bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
        >
          <i className="fi fi-rr-search text-xl"></i>
        </button>

        <Link
          to="/register"
          className="whitespace-nowrap bg-black text-white rounded-full py-2 px-4 text-xl hover:opacity-80"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="whitespace-nowrap bg-gray-200 text-black rounded-full py-2 px-4 text-xl hover:opacity-80 hidden md:block"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

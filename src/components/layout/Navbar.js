import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-garnet-500">
      <div className="flex items-center justify-between flex-wrap py-8">
        <div className="flex items-center flex-shrink-0 text-white">
          <span className="font-semibold text-xl tracking-tight">
            Florida State Football
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-4 py-2 border rounded text-white-200 border-white hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden w-full lg:block lg:flex lg:items-center lg:w-auto ">
          <Link
            to="about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            About
          </Link>
          <Link
            to="/schedule"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Schedule
          </Link>
          <Link
            to="/roster"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Roster
          </Link>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Did We win?
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

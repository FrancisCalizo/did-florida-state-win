import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-garnet-500 p-8">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
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
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >
          About
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >
          Schedule
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >
          Roster
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
        >
          Did We win?
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav
      className="fixed w-full top-0 z-30 bg-garnet-500 border-b-4 border-gold-500"
      style={{ boxShadow: '0 0 0 10px rgba(0, 0, 0, 0.8)' }}
    >
      <div className="max-w-container flex items-center justify-between flex-wrap py-4 px-5 mx-auto">
        <div className="flex items-center flex-shrink-0 text-white">
          <img className="w-20 mr-5" src={logo} alt="fsu-logo" />
          <span className="font-semibold text-xl tracking-tight md:text-3xl xl:text-4xl">
            Florida State Football
          </span>
        </div>
        <div className="block md:hidden">
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
        <div className="hidden w-full md:block md:flex md:items-center md:w-auto ">
          <Link
            to="/about"
            className="block md:text-base lg:text-xl md: mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white mr-2 nav-link hover:text-gray-200"
          >
            About
          </Link>
          <Link
            to="/schedule"
            className="block md:text-base lg:text-xl md: mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white mr-2 nav-link hover:text-gray-200"
          >
            Schedule
          </Link>
          <Link
            to="/roster"
            className="block md:text-base lg:text-xl md: mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white mr-2 nav-link hover:text-gray-200"
          >
            Roster
          </Link>
          <Link
            to="/"
            className="block md:text-base lg:text-xl md:mx-3 lg:ml-4 lg:inline-block lg:mt-0 text-white bg-gold-500 font-semibold px-4 py-3 rounded nav-link-special border-gold-900 border hover:text-dark-700"
          >
            Did We Win?
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

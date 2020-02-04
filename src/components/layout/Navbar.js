import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav
      className="bg-garnet-500 border-b-4 border-gold-500 mb-2"
      style={{ boxShadow: '0 0 0 10px rgba(0, 0, 0, 0.8)' }}
    >
      <div className="max-w-container flex items-center justify-between flex-wrap py-4 px-5 mx-auto">
        <div className="flex items-center flex-shrink-0 text-white">
          <img className="w-20 mr-5" src={logo} alt="fsu-logo" />
          <span className="font-semibold text-xl tracking-tight">
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
            to="about"
            className="block lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            About
          </Link>
          <Link
            to="/schedule"
            className="block lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Schedule
          </Link>
          <Link
            to="/roster"
            className="block lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Roster
          </Link>
          <Link
            to="/"
            className="block lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Did We win?
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

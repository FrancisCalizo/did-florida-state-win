import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleChange = e => {
    e.target.checked ? setHamburgerOpen(true) : setHamburgerOpen(false);
  };

  const closeBurger = e => {
    setHamburgerOpen(false);
  };

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
          <label className="flex items-center px-4 py-2 border rounded text-white-200 border-white hover:text-white hover:border-white hover:cursor-pointer">
            <input type="checkbox" className="hidden" onChange={handleChange} />
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
        </div>
        <div
          id="menu"
          className={`w-full md:flex md:items-center md:w-auto ${
            hamburgerOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="border-t border-garnet-700 md:border-none -mx-5 md:mx-0 ">
            <Link
              to="/about"
              className="block md:text-base lg:text-xl md:mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white md:mr-2 nav-link hover:text-gray-200 text-center my-0 py-4 md:my-0 hover:bg-garnet-300 md:hover:bg-garnet-500"
              onClick={closeBurger}
            >
              About
            </Link>
          </div>
          <div className="border-t border-garnet-700 md:border-none -mx-5 md:mx-0">
            <Link
              to="/schedule"
              className="block md:text-base lg:text-xl md:mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white md:mr-2 nav-link hover:text-gray-200 text-center my-0 py-4  md:my-0 hover:bg-garnet-300 md:hover:bg-garnet-500"
              onClick={closeBurger}
            >
              Schedule
            </Link>
          </div>
          <div className="border-t border-garnet-700 md:border-none -mx-5 md:mx-0">
            <Link
              to="/roster"
              className="block md:text-base lg:text-xl md:mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white md:mr-2 nav-link hover:text-gray-200 text-center my-0 py-4  md:my-0 hover:bg-garnet-300 md:hover:bg-garnet-500"
              onClick={closeBurger}
            >
              Roster
            </Link>
          </div>
          <div className="border-t border-b border-garnet-700 md:border-none -mx-5 md:mx-0">
            <Link
              to="/"
              className="block md:text-base lg:text-xl md:mx-2 lg:ml-4 lg:inline-block lg:mt-0 text-white md:bg-gold-500 font-semibold md:px-4 md:py-3 md:rounded nav-link-special md:border-gold-900 md:border md:hover:text-dark-700 text-center my-0 py-4  md:my-0 hover:bg-garnet-300 md:hover:bg-garnet-500"
              onClick={closeBurger}
            >
              Did We Win?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

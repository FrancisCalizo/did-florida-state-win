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
      <div>
        <a
          href="https://github.com/FrancisCalizo/did-florida-state-win"
          className="github-corner"
          aria-label="View source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width={80}
            height={80}
            viewBox="0 0 250 250"
            style={{
              fill: '#CEB888',
              color: '#fff',
              position: 'absolute',
              top: 0,
              border: 0,
              right: 0
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: '130px 106px' }}
              className="octo-arm"
            />
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            />
          </svg>
        </a>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}'
          }}
        />
      </div>

      <div className="max-w-container flex items-center justify-between flex-wrap py-4 px-5 mx-auto">
        <div className="flex items-center flex-shrink-0 text-white">
          <img className="w-20 mr-5" src={logo} alt="fsu-logo" />
          <Link to="/">
            <span className="font-semibold text-xl tracking-tight md:text-3xl xl:text-4xl">
              Florida State Football
            </span>
          </Link>
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
              className="block md:text-base lg:text-xl md:mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white md:mr-2 nav-link hover:text-gray-200 text-center my-0 py-4 md:my-0 md:py-1 hover:bg-garnet-300 md:hover:bg-garnet-500"
              onClick={closeBurger}
            >
              About
            </Link>
          </div>
          <div className="border-t border-garnet-700 md:border-none -mx-5 md:mx-0">
            <Link
              to="/schedule"
              className="block md:text-base lg:text-xl md:mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white md:mr-2 nav-link hover:text-gray-200 text-center my-0 py-4 md:my-0 md:py-1 hover:bg-garnet-300 md:hover:bg-garnet-500"
              onClick={closeBurger}
            >
              Schedule
            </Link>
          </div>
          <div className="border-t border-garnet-700 md:border-none -mx-5 md:mx-0">
            <Link
              to="/roster"
              className="block md:text-base lg:text-xl md:mx-3 lg:mx-5 lg:inline-block lg:mt-0 text-white md:mr-2 nav-link hover:text-gray-200 text-center my-0 py-4 md:my-0 md:py-1 hover:bg-garnet-300 md:hover:bg-garnet-500"
              onClick={closeBurger}
            >
              Roster
            </Link>
          </div>
          <div className="border-t border-b border-garnet-700 md:border-none -mx-5 md:mx-0">
            <Link
              to="/"
              className="block md:text-base lg:text-xl md:mx-2 lg:ml-4 lg:inline-block lg:mt-0 text-white md:bg-gold-500 font-semibold md:px-4 md:py-3 md:rounded nav-link-special md:border-gold-900 md:border md:hover:text-dark-700 text-center my-0 py-4  md:my-0 hover:bg-garnet-300 md:hover:bg-gold-400"
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

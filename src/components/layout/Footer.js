import React from 'react';

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-dark-800 mt-16 pt-10 pb-4 border-t-8 border-gold-600">
      <img
        className="mx-auto w-24 md:w-32"
        src={require('../../images/spear.png')}
        alt="Spear"
      />
      <h1 className="text-white text-center text-xs sm:text-sm lg:text-base my-4">
        Designed & Built By{' '}
        <a
          href="https://www.franciscalizo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Francis Calizo
        </a>
      </h1>
    </div>
  );
};

export default Footer;

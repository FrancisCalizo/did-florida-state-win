import React from 'react';

const Footer = () => {
  return (
    <div className="bg-dark-800 mt-16 pt-8 pb-4">
      <img
        className="mx-auto w-24 md:w-32"
        src={require('../../images/spear.png')}
        alt="Spear"
      />
      <h1 className="text-white text-center text-xs sm:text-sm lg:text-base my-4">
        Designed & Built By Francis Calizo
      </h1>
    </div>
  );
};

export default Footer;

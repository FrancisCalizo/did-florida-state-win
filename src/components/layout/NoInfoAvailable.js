import React from 'react';
import { Link } from 'react-router-dom';

const NoInfoAvailable = () => {
  return (
    <div className="flex flex-wrap flex-col-reverse justify-end md:flex-row max-w-container mx-16 xl:mx-auto height-minus-header md:pt-20">
      <div className="w-full md:w-1/2 text-center flex justify-center pt-4">
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold">Welp.</h1>
          <p className="md:text-sm lg:text-base">
            It looks like we couldn't fetch information for this particular
            game.
          </p>
          <Link
            to="/schedule"
            className="inline-block mt-10 md:mt-4 lg:mt-12 xl:mt-20 md:text-base lg:text-xl text-white bg-gold-500 font-semibold px-4 py-3 rounded border hover:text-dark-700"
          >
            Back to Schedule
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center">
        <img
          className="inline-block w-128 md:w-80 lg:w-112 xl:w-128"
          src={require('../../images/snooze-coder.gif')}
          alt="snooze-coder"
        />
      </div>
    </div>
  );
};

export default NoInfoAvailable;

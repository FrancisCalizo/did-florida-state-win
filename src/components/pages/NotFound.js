import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row justify-center pt-20 md:pt-32 lg:pt-20">
      <div className="w-1/4 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold">404!</h1>
          <h2 className="lg:text-2xl xl:text-3xl">
            We can't seem to find the page you're looking for.
          </h2>
          <Link to={`/`}>
            <button className="inline-block lg:text-xl xl:text-2xl bg-gold-600 border rounded py-1 px-6 mt-6 text-white cursor-pointer hover:bg-gold-500 active:bg-gold-700">
              Back Home
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/3 xl:w-1/4">
        <img
          className="block mx-auto"
          src={require('../../images/seminole.png')}
          alt="seminole-404"
        />
      </div>
    </div>
  );
};

export default NotFound;

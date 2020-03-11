import React from 'react';

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <div className="text-center">
          <h1 className="text-8xl font-bold">404</h1>
        </div>
      </div>
      <div className="w-1/3">
        <img
          className="w-96"
          src={require('../../images/seminole.png')}
          alt="seminole-404"
        />
      </div>
    </div>
  );
};

export default NotFound;

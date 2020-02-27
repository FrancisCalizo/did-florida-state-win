import React from 'react';

const Loading = () => {
  return (
    <div className="mx-auto py-12 w-full text-center">
      <div className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 mx-2 md:mx-4 lg:mx-8 rounded-full inline-block bg-garnet-500 bounce spinner-dot-1"></div>
      <div className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 mx-2 md:mx-4 lg:mx-8 rounded-full inline-block bg-gold-500 bounce spinner-dot-2"></div>
      <div className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 mx-2 md:mx-4 lg:mx-8 rounded-full inline-block bg-garnet-500 bounce spinner-dot-3"></div>
      <div className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 mx-2 md:mx-4 lg:mx-8 rounded-full inline-block bg-gold-500 bounce spinner-dot-4"></div>
      <div className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 mx-2 md:mx-4 lg:mx-8 rounded-full inline-block bg-garnet-500 bounce"></div>
    </div>
  );
};

export default Loading;

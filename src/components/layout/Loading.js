import React from 'react';

const Loading = () => {
  return (
    <div className="mx-auto py-12 w-1/2 text-center">
      <div className="w-16 h-16 mx-8 rounded-full inline-block bg-garnet-500 bounce spinner-dot-1"></div>
      <div className="w-16 h-16 mx-8 rounded-full inline-block bg-gold-500 bounce spinner-dot-2"></div>
      <div className="w-16 h-16 mx-8 rounded-full inline-block bg-garnet-500 bounce spinner-dot-3"></div>
      <div className="w-16 h-16 mx-8 rounded-full inline-block bg-gold-500 bounce spinner-dot-4"></div>
      <div className="w-16 h-16 mx-8 rounded-full inline-block bg-garnet-500 bounce"></div>
    </div>
  );
};

export default Loading;

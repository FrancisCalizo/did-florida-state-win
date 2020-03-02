import React from 'react';
import { Link } from 'react-router-dom';

const DidWeWin = () => {
  return (
    <div>
      <h1>
        This page should show the past game, current game, and/or next game
      </h1>
      <h2>You still need to find an API for this big dawg</h2>
      <h3>
        {/* Change 2020 to dynamic date */}
        Check out past games <Link to="/Schedule">Here</Link>
      </h3>
    </div>
  );
};

export default DidWeWin;

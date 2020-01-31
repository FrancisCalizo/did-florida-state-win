import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="bg-garnet-500">
        This page should show the past game, current game, and/or next game
      </h1>
      <h2 className="bg-gold-500">
        You still need to find an API for this big dawg
      </h2>
      <h3>
        {/* Change 2020 to dynamic date */}
        Check out past games <Link to="/Schedule/2020">Here</Link>
      </h3>
    </div>
  );
};

export default Home;

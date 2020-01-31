import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const GameItem = ({ games }) => {
  return (
    <Fragment>
      {games.map(game => {
        return (
          <div key={game.id} className="w-1/3">
            <div className="mx-3 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <h2 className="font-bold">
                  {game.away_team} vs. {game.home_team}
                </h2>
              </div>
              <div className="px-6 py-4">
                <button className="inline-block bg-gold-500 rounded py-1 px-4 text-white">
                  <Link to="/schedule">Game Details</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default GameItem;

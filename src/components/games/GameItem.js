import React from 'react';
import { Link } from 'react-router-dom';

const GameItem = ({ games }) => {
  return (
    <div>
      {games.map(game => {
        return (
          <div key={game.id} style={{ margin: '1rem', fontSize: '1.3rem' }}>
            {game.away_team} vs. {game.home_team}
            <button>
              <Link to="/schedule">Game Details</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GameItem;

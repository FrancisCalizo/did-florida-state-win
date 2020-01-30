import React from 'react';

const GameItem = ({ games }) => {
  return (
    <div>
      {games.map(game => {
        return (
          <div
            key={game.id}
            style={{ border: '1px solid black', width: '500px' }}
          >
            {game.away_team} vs. {game.home_team}
          </div>
        );
      })}
    </div>
  );
};

export default GameItem;

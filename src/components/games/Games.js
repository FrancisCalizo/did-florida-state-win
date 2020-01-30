import React, { useContext } from 'react';
import GamesContext from '../../context/games/gamesContext';
import GameItem from './GameItem';

const Games = () => {
  const gamesContext = useContext(GamesContext);
  const { games, loading } = gamesContext;

  // Loading Gif Here

  return (
    <div>
      <GameItem games={games} />
    </div>
  );
};

export default Games;

import React, { useContext, useEffect } from 'react';
import GamesContext from '../../context/games/gamesContext';
import GameItem from './GameItem';

const Games = () => {
  const gamesContext = useContext(GamesContext);
  const { games, teamInfo, loading } = gamesContext;

  // Loading Gif Here

  return (
    <div className="flex flex-wrap px-16 sm:px-0">
      <GameItem games={games} teamInfo={teamInfo} />
    </div>
  );
};

export default Games;

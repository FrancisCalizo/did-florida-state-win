import React, { useContext, useEffect } from 'react';
import GamesContext from '../../context/games/gamesContext';
import GameItem from './GameItem';

const Games = () => {
  const gamesContext = useContext(GamesContext);
  const { games, teamInfo, loading } = gamesContext;

  useEffect(() => {
    // Load Team Logos
  });

  // Loading Gif Here

  return (
    <div className="flex flex-wrap">
      <GameItem games={games} teamInfo={teamInfo} />
    </div>
  );
};

export default Games;

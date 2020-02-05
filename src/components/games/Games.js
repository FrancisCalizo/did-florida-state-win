import React, { useContext, useEffect } from 'react';
import GamesContext from '../../context/games/gamesContext';
import GameItem from './GameItem';

const Games = () => {
  const gamesContext = useContext(GamesContext);
  const {
    games,
    teamInfo,
    addOverallWin,
    addOverallLoss,
    loading
  } = gamesContext;

  // Loading Gif Here

  return (
    <div className="flex flex-wrap justify-center px-16 sm:px-0">
      <GameItem
        games={games}
        teamInfo={teamInfo}
        addOverallWin={addOverallWin}
        addOverallLoss={addOverallLoss}
      />
    </div>
  );
};

export default Games;

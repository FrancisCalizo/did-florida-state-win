import React, { useContext } from 'react';
import GamesContext from '../../context/games/gamesContext';

const SeasonStats = () => {
  const gamesContext = useContext(GamesContext);
  const { seasonWins, seasonLosses } = gamesContext;
  return (
    <div>
      <h2>Season Stats</h2>
      {seasonWins} - {seasonLosses}
    </div>
  );
};

export default SeasonStats;

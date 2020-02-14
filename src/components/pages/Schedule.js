import React, { useEffect, useContext } from 'react';
import Games from '../games/Games';
import SeasonStats from '../team-stats/SeasonStats';
import SeasonDropdown from '../layout/SeasonDropdown';
import GamesContext from '../../context/games/gamesContext';

const Schedule = () => {
  const gamesContext = useContext(GamesContext);
  const { fetchGames, year } = gamesContext;

  useEffect(() => {
    fetchGames(year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  return (
    <div className="container">
      <SeasonDropdown />
      <SeasonStats />
      <Games />
    </div>
  );
};

export default Schedule;

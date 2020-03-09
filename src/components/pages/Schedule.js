import React, { useEffect, useContext, useState } from 'react';
import Games from '../games/Games';
import SeasonStats from '../team-stats/SeasonStats';
import SeasonDropdown from '../layout/SeasonDropdown';
import Loading from '../layout/Loading';

import GamesContext from '../../context/games/gamesContext';

const Schedule = () => {
  const gamesContext = useContext(GamesContext);
  const { fetchGames, year } = gamesContext;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchGames(year);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container mb-16">
        <SeasonDropdown />
        <SeasonStats />
        <Games />
      </div>
    );
  }
};

export default Schedule;

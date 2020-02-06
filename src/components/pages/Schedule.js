import React from 'react';
import Games from '../games/Games';
import SeasonStats from '../team-stats/SeasonStats';
import SeasonDropdown from '../layout/SeasonDropdown';
const Schedule = () => {
  return (
    <div className="container">
      <SeasonDropdown />
      <SeasonStats />
      <Games />
    </div>
  );
};

export default Schedule;

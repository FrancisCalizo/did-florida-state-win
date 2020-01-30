import React from 'react';
import Games from '../games/Games';
import SeasonStats from '../team-stats/SeasonStats';
const Schedule = () => {
  return (
    <div>
      <h1>Schedule for the (dynamically insert year) here</h1>
      <SeasonStats />
      <Games />
    </div>
  );
};

export default Schedule;

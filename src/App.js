import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule(2018);
  }, []);

  const fetchSchedule = async year => {
    let res = await axios.get(
      `https://api.collegefootballdata.com/games?year=${year}&team=Florida%20State`
    );

    setSchedule(res.data);
  };

  return (
    <div>
      {schedule.map(game => (
        <ul>
          <li>{game.week}</li>
          <li>
            {game.away_team} at {game.home_team}
          </li>
          <li>
            {game.away_points} to {game.home_points}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;

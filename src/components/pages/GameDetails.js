import React, { useContext, useEffect, useState } from 'react';
import GameDetailsContext from '../../context/game-details/gameDetailsContext';

const GameDetails = ({ match }) => {
  const gameDetailsContext = useContext(GameDetailsContext);
  const { fetchGameInformation, changeTab } = gameDetailsContext;

  const [currentTab, setCurrentTab] = useState('boxScore');

  useEffect(() => {
    fetchGameInformation(
      match.params.season,
      match.params.week,
      match.params.id
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = tab => {
    setCurrentTab(tab);
  };

  return (
    <div className="mt-10">
      <ul className="flex border-b justify-center">
        <li className="-mb-px mr-1">
          <button
            className="uppercase bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-black"
            onClick={() => handleClick('boxScore')}
          >
            Box Score
          </button>
        </li>
        <li className="mr-1">
          <button
            className="uppercase bg-white inline-block py-2 px-4 text-black"
            onClick={() => handleClick('team')}
          >
            Team
          </button>
        </li>
        <li className="mr-1">
          <button
            className="uppercase bg-white inline-block py-2 px-4 text-black"
            onClick={() => handleClick('playByPlay')}
          >
            Play-By-Play
          </button>
        </li>
      </ul>
    </div>
  );
};

export default GameDetails;

import React, { useContext, useEffect } from 'react';
import GameDetailsContext from '../../context/game-details/gameDetailsContext';

const GameDetails = ({ match }) => {
  const gameDetailsContext = useContext(GameDetailsContext);
  const { fetchGameInformation } = gameDetailsContext;

  useEffect(() => {
    fetchGameInformation(
      match.params.season,
      match.params.week,
      match.params.id
    );
  }, []);

  return (
    <div>
      <h1>Game Details Page</h1>
    </div>
  );
};

export default GameDetails;

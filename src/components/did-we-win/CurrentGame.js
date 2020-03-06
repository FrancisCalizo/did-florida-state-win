import React, { useContext } from 'react';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import Loading from '../layout/Loading';

const CurrentGame = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const {
    loading,
    fsuInfo,
    currentGame,
    currentGameOpponent
  } = didWeWinContext;

  if (loading || !currentGame || !currentGameOpponent) {
    return null;
  } else {
    return (
      <div>
        <h1>Current Game</h1>
        <h2>
          {currentGame.away_team} vs. {currentGame.home_team}
        </h2>
      </div>
    );
  }
};

export default CurrentGame;

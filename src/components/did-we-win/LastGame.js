import React, { useContext } from 'react';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import Loading from '../layout/Loading';

const LastGame = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const { loading, fsuInfo, lastGame, lastGameOpponent } = didWeWinContext;

  const renderWinLoss = game => {
    switch (true) {
      case game.home_team === 'Florida State' &&
        game.home_points > game.away_points:
        return 'Win';
      case game.home_team === 'Florida State' &&
        game.home_points < game.away_points:
        return 'Loss';
      case game.away_team === 'Florida State' &&
        game.home_points > game.away_points:
        return 'Loss';
      case game.away_team === 'Florida State' &&
        game.home_points < game.away_points:
        return 'Win';
      default:
        return null;
    }
  };

  if (loading || !lastGame || !lastGameOpponent) {
    return null;
  } else {
    return (
      <div>
        <h1 className="text-4xl">Last Game</h1>
        <h2>
          {lastGame.away_team} vs. {lastGame.home_team}
        </h2>
        <h3>{renderWinLoss(lastGame)}</h3>
      </div>
    );
  }
};

export default LastGame;

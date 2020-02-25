import React, { useContext, useEffect, useState } from 'react';
import TeamStats from '../team-stats/TeamStats';
import BoxScore from '../games/BoxScore';
import PlayByPlay from '../games/PlayByPlay';

import GameDetailsContext from '../../context/game-details/gameDetailsContext';
import FsuTeamContext from '../../context/fsu-team/fsuTeamContext';

const GameDetails = ({ match }) => {
  const gameDetailsContext = useContext(GameDetailsContext);
  const {
    fetchGameInfo,
    gameInfo,
    gameStatsHome,
    gameStatsAway,
    gamePlays,
    opposingTeamInfo,
    isFsuHomeTeam,
    clearGameInfo
  } = gameDetailsContext;

  const fsuTeamContext = useContext(FsuTeamContext);
  const { fsuTeamInfo, fetchFsuTeamInfo } = fsuTeamContext;

  const [currentTab, setCurrentTab] = useState('teamStats');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchGameInfo(match.params.season, match.params.week, match.params.id);

    fetchFsuTeamInfo(setLoading);

    return () => {
      clearGameInfo();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTab = () => {
    switch (true) {
      case currentTab === 'boxScore':
        return (
          <BoxScore
            fsuTeamInfo={fsuTeamInfo}
            gameInfo={gameInfo}
            gameStatsHome={gameStatsHome}
            gameStatsAway={gameStatsAway}
            gamePlays={gamePlays}
            opposingTeamInfo={opposingTeamInfo}
            isFsuHomeTeam={isFsuHomeTeam}
            loading={loading}
          />
        );
      case currentTab === 'teamStats':
        return (
          <TeamStats
            gameStatsHome={gameStatsHome}
            gameStatsAway={gameStatsAway}
            loading={loading}
          />
        );
      case currentTab === 'playByPlay':
        return <PlayByPlay gamePlays={gamePlays} loading={loading} />;
      default:
        return <BoxScore />;
    }
  };

  const handleClick = tab => {
    setCurrentTab(tab);
  };
  return (
    <div className="mt-10 mx-12">
      <ul className="flex border-b justify-center">
        <li className="-mb-px mr-1 text-lg">
          <button
            className={`font-semibold uppercase bg-white inline-block py-2 px-4 text-black focus:outline-none hover:bg-gold-500 hover:text-white ${currentTab ===
              'boxScore' && 'active-tab'}`}
            onClick={() => handleClick('boxScore')}
          >
            Box Score
          </button>
        </li>
        <li className="-mb-px mr-1 text-lg">
          <button
            className={`font-semibold uppercase bg-white inline-block py-2 px-4 text-black focus:outline-none hover:bg-gold-500 hover:text-white ${currentTab ===
              'teamStats' && 'active-tab'}`}
            onClick={() => handleClick('teamStats')}
          >
            Team
          </button>
        </li>
        <li className="-mb-px mr-1 text-lg">
          <button
            className={`font-semibold uppercase bg-white inline-block py-2 px-4 text-black focus:outline-none hover:bg-gold-500 hover:text-white ${currentTab ===
              'playByPlay' && 'active-tab'}`}
            onClick={() => handleClick('playByPlay')}
          >
            Play-By-Play
          </button>
        </li>
      </ul>
      <div>{renderTab()}</div>
    </div>
  );
};

export default GameDetails;

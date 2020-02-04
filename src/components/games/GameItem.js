import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const GameItem = ({ games, teamInfo }) => {
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
        return 'Tie';
    }
  };

  return (
    <Fragment>
      {games.map(game => {
        return (
          <div key={game.id} className="w-1/3">
            <div className="mx-10 my-16 rounded border text-center border-2 border-black">
              {teamInfo.map(team =>
                team.school === game.away_team ||
                team.school === game.home_team ? (
                  <img
                    key={team.id}
                    className={`w-48 rounded-full p-3 mx-auto z-10 -mb-20 bg-gray-300`}
                    src={team.logos[0]}
                    alt={`${team.school}-logo`}
                    style={{
                      border: `4px solid ${team.alt_color}`,
                      boxShadow: `0 0 0 4px ${team.color}`,
                      transform: `translateY(-40%)`
                    }}
                  />
                ) : null
              )}
              <div className="px-6 py-4">
                <div>{new Date(game.start_date).toDateString()}</div>
                <span className="inline-block rounded-full border border-black py-1 px-2">
                  {game.home_team === 'Florida State' ? 'vs' : 'at'}
                </span>
                <h2 className="font-bold text-2xl">
                  {game.home_team === 'Florida State'
                    ? game.away_team
                    : game.home_team}
                </h2>
                <div
                  className="bg-dark-900 w-48 mx-auto py-2"
                  style={{ transform: 'skew(-10deg)' }}
                >
                  <div>
                    <h2
                      className="text-3xl text-white"
                      style={{ transform: 'skew(10deg)' }}
                    >
                      {renderWinLoss(game)}
                    </h2>
                  </div>
                  <h2
                    className="text-3xl text-white"
                    style={{ transform: 'skew(10deg)' }}
                  >
                    {game.home_team === 'Florida State'
                      ? `${game.home_points} - ${game.away_points}`
                      : `${game.away_points} - ${game.home_points}`}
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="inline-block bg-gold-500 rounded py-1 px-4 text-white cursor-pointer">
                  <Link to="/schedule">Game Details</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default GameItem;

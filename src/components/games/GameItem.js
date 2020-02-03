import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const GameItem = ({ games, teamInfo }) => {
  return (
    <Fragment>
      {games.map(game => {
        return (
          <div key={game.id} className="w-1/3">
            <div className="mx-10 my-16 rounded border text-center border-2 border-gray-400">
              {teamInfo.map(team =>
                team.school === game.away_team ||
                team.school === game.home_team ? (
                  <img
                    key={team.id}
                    className={`w-48 rounded-full p-3 mx-auto z-10 -mb-20 bg-white`}
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
                <div>
                  {new Date(game.start_date)
                    .toDateString()
                    .split(' ')
                    .slice(1)
                    .join(' ')}
                </div>
                <span className="inline-block border-2 border-black py-1 px-2 my-2">
                  {game.home_team === 'Florida State' ? 'vs' : 'at'}
                </span>
                <h2 className="font-bold text-2xl">
                  {game.home_team === 'Florida State'
                    ? game.away_team
                    : game.home_team}
                </h2>
                <div>
                  <h2 className="text-3xl">
                    {game.home_team === 'Florida State'
                      ? `${game.home_points} - ${game.away_points}`
                      : `${game.away_points} - ${game.home_points}`}
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="inline-block bg-gold-500 rounded py-1 px-4 text-white">
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

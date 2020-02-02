import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const GameItem = ({ games, teamInfo }) => {
  return (
    <Fragment>
      {games.map(game => {
        return (
          <div key={game.id} className="w-1/3">
            <div className="mx-3 my-20 rounded shadow-lg text-center">
              {teamInfo.map(team =>
                team.school === game.away_team ||
                team.school === game.home_team ? (
                  <img
                    key={team.id}
                    className={`w-48 rounded-full p-6 mx-auto z-10 -mb-20 bg-white`}
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
                <h2 className="font-bold">
                  {game.away_team} vs. {game.home_team}
                </h2>
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

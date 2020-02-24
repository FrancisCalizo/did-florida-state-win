import React from 'react';
import PropTypes from 'prop-types';

const BoxScore = ({
  fsuTeamInfo,
  gameInfo,
  gameStatsHome,
  gameStatsAway,
  gamePlays,
  opposingTeamInfo,
  isFsuHomeTeam,
  loading
}) => {
  if (loading || !opposingTeamInfo.logos || !fsuTeamInfo.logos) {
    return <h1 className="text-3xl">Loading...</h1>;
  } else {
    return (
      <div>
        <div className="flex flex-wrap justify-center my-4 max-w-container mx-auto">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-1/3">
              <div>
                <img
                  className="w-32 mx-auto"
                  src={
                    isFsuHomeTeam
                      ? opposingTeamInfo.logos[0]
                      : fsuTeamInfo.logos[0]
                  }
                  alt={fsuTeamInfo.school}
                />
                <span className="block text-center text-5xl text-gray-700">
                  {isFsuHomeTeam ? gameInfo.away_points : gameInfo.home_points}
                </span>
              </div>
            </div>
            <div className="w-30 text-center my-auto">
              <div>
                <span className="text-2xl border-2 px-3 py-2 rounded-full bg-white border-black">
                  vs
                </span>
              </div>
            </div>
            <div className="w-1/3">
              <div>
                <img
                  className="w-32 mx-auto"
                  src={
                    isFsuHomeTeam
                      ? fsuTeamInfo.logos[0]
                      : opposingTeamInfo.logos[0]
                  }
                  alt={fsuTeamInfo.school}
                />
                <span className="block text-center text-5xl text-gray-700">
                  {isFsuHomeTeam ? gameInfo.home_points : gameInfo.away_points}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-bold text-center text-3xl">
              {gameInfo.away_team} - vs - {gameInfo.home_team}
            </h2>
            <table className="table-auto my-4 mx-auto ">
              <thead>
                <tr>
                  <th className="w-1/3 px-4 py-2"></th>
                  <th className="px-4 py-2">1st</th>
                  <th className="px-4 py-2">2nd</th>
                  <th className="px-4 py-2">3rd</th>
                  <th className="px-4 py-2">4th</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 border px-4 py-2">
                    {gameInfo.away_team}
                  </td>
                  {gameInfo.away_line_scores.map((score, idx) => {
                    return (
                      <td key={idx} className="border px-4 py-2 text-center">
                        {score}
                      </td>
                    );
                  })}
                  <td className="bg-gray-400 border px-4 py-2 text-center">
                    {gameInfo.away_line_scores.reduce((a, b) => a + b, 0)}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 border px-4 py-2">
                    {gameInfo.home_team}
                  </td>
                  {gameInfo.home_line_scores.map((score, idx) => {
                    return (
                      <td key={idx} className="border px-4 py-2 text-center">
                        {score}
                      </td>
                    );
                  })}
                  <td className="bg-gray-400 border px-4 py-2 text-center">
                    {gameInfo.home_line_scores.reduce((a, b) => a + b, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="border-t border-b border-gray-500 text-center py-4">
          <dl>
            <dt className="inline-block mr-1 ml-3 font-bold">Date: </dt>
            <dd className="inline-block">
              {' '}
              {new Date(gameInfo.start_date).toLocaleDateString('en-US')}
            </dd>
            <dt className="inline-block mr-1 ml-3 font-bold">Week:</dt>
            <dd className="inline-block">{gameInfo.week}</dd>
            <dt className="inline-block mr-1 ml-3 font-bold">Stadium:</dt>
            <dd className="inline-block">{gameInfo.venue}</dd>
            <dt className="inline-block mr-1 ml-3 font-bold">Attendance:</dt>
            <dd className="inline-block">
              {gameInfo.attendance ? gameInfo.attendance : 'Unavailable'}
            </dd>
            <dt className="inline-block mr-1 ml-3 font-bold">
              Conference Game:
            </dt>
            <dd className="inline-block">
              {gameInfo.conference_game ? 'Yes' : 'No'}
            </dd>
          </dl>
        </div>
        <div className="my-4 mx-auto">
          <h2 className="text-3xl font-bold border-b-4 border-gray-700 py-4">
            Scoring summary
          </h2>
        </div>
      </div>
    );
  }
};

BoxScore.propTypes = {
  fsuTeamInfo: PropTypes.object.isRequired,
  gameInfo: PropTypes.object.isRequired,
  gameStatsHome: PropTypes.object.isRequired,
  gameStatsAway: PropTypes.object.isRequired,
  isFsuHomeTeam: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default BoxScore;

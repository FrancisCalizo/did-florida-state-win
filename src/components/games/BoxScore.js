import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from '../layout/Loading';

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
  const getQuarter = quarter => {
    switch (true) {
      case quarter === 1:
        return '1st';
      case quarter === 2:
        return '2nd';
      case quarter === 3:
        return '3rd';
      case quarter === 4:
        return '4th';
      default:
        return 'N/A';
    }
  };

  if (loading || !opposingTeamInfo.logos || !fsuTeamInfo.logos) {
    return <Loading />;
  } else {
    return (
      <div className="mx-10 pb-16">
        <div className="flex flex-wrap justify-center py-4 max-w-container mx-auto">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-1/3 my-auto">
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
                  {gameInfo.away_points}
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
            <div className="w-1/3 my-auto">
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
                  {gameInfo.home_points}
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
                  <td className="bg-gray-200 border px-4 py-2 text-center">
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
                  <td className="bg-gray-200 border px-4 py-2 text-center">
                    {gameInfo.home_line_scores.reduce((a, b) => a + b, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="max-w-container border-t border-b border-gray-500 text-center py-4 mx-auto">
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
        <div className="my-4 mx-auto max-w-container">
          <h2 className="text-3xl font-bold border-b-4 border-gray-700 py-4">
            Scoring summary
          </h2>
          <table className="hidden sm:table table-fixed mt-4 mb-2 mx-auto w-full">
            <thead>
              <tr>
                <th className="w-1/12 pl-2 text-xs md:text-sm text-center">
                  Quarter
                </th>
                <th className="w-1/12 pl-2 text-xs md:text-sm text-center">
                  Time
                </th>
                <th className="w-auto pl-2 text-xs md:text-sm text-left">
                  Description
                </th>
                <th className="w-1/12 pl-2 text-xs md:text-sm text-center">
                  {gameInfo.away_team}
                </th>
                <th className="w-1/12 pl-2 text-sm text-center">
                  {gameInfo.home_team}
                </th>
              </tr>
            </thead>
            <tbody>
              {gamePlays
                .filter(gamePlay => {
                  return (
                    gamePlay.play_type.includes('Touchdown') ||
                    gamePlay.play_type.includes('Safety') ||
                    gamePlay.play_type.includes('Good')
                  );
                })
                .map(gamePlay => {
                  return (
                    <tr key={gamePlay.id}>
                      <td className="border pl-2 md:py-2 text-left md:text-center">
                        {getQuarter(gamePlay.period)}
                      </td>
                      <td className="border pl-2 md:py-2 text-left md:text-center">
                        {`${gamePlay.clock.minutes}:${
                          gamePlay.clock.seconds < 10
                            ? '0' + gamePlay.clock.seconds
                            : gamePlay.clock.seconds
                        }`}
                      </td>
                      <td className="border pl-2 py-2 text-left">
                        {gamePlay.play_text}
                      </td>
                      <td className="border pl-2 py-2 text-center">
                        {gamePlay.offense === gamePlay.away
                          ? gamePlay.offense_score
                          : gamePlay.defense_score}
                      </td>
                      <td className="border pl-2 py-2 text-center">
                        {gamePlay.offense === gamePlay.home
                          ? gamePlay.offense_score
                          : gamePlay.defense_score}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {/* Table Visible at XS Screen Size */}
          <table className="sm:hidden table-auto mt-4 mb-2 mx-auto w-full">
            <tbody>
              {gamePlays
                .filter(gamePlay => {
                  return (
                    gamePlay.play_type.includes('Touchdown') ||
                    gamePlay.play_type.includes('Safety') ||
                    gamePlay.play_type.includes('Good')
                  );
                })
                .map(gamePlay => {
                  return (
                    <Fragment key={gamePlay.id}>
                      <tr>
                        <td className="border w-20">
                          {gamePlay.period}Q at{' '}
                          {`${gamePlay.clock.minutes}:${
                            gamePlay.clock.seconds < 10
                              ? '0' + gamePlay.clock.seconds
                              : gamePlay.clock.seconds
                          }`}
                        </td>
                        <td className="border">{gamePlay.play_text}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="border py-2 text-left">
                          {gameInfo.away_team} -
                          {gamePlay.offense === gamePlay.away
                            ? gamePlay.offense_score
                            : gamePlay.defense_score}
                          {gameInfo.home_team} -
                          {gamePlay.offense === gamePlay.home
                            ? gamePlay.offense_score
                            : gamePlay.defense_score}
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
            </tbody>
          </table>
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

import React from 'react';
import PropTypes from 'prop-types';

const BoxScore = ({
  fsuTeamInfo,
  gameInfo,
  gameStats,
  opposingTeamInfo,
  isFsuHomeTeam,
  loading
}) => {
  if (loading || !opposingTeamInfo.logos || !fsuTeamInfo.logos) {
    return <h1 className="text-3xl">Loading...</h1>;
  } else {
    return (
      <div className="flex justify-center">
        <div className="w-1/2 flex justify-center">
          <div className="w-1/3">
            <div>
              <img
                className="w-40 mx-auto"
                src={
                  isFsuHomeTeam
                    ? opposingTeamInfo.logos[0]
                    : fsuTeamInfo.logos[0]
                }
                alt={fsuTeamInfo.school}
              />
              <span className="inline-block">
                {isFsuHomeTeam ? gameInfo.away_points : gameInfo.home_points}
              </span>
            </div>
          </div>
          <div className="w-30 text-center my-auto">
            <div>
              <span className="text-2xl border-2 px-3 py-2 rounded-full bg-white">
                vs
              </span>
            </div>
          </div>
          <div className="w-1/3">
            <div>
              <img
                className="w-40 mx-auto"
                src={
                  isFsuHomeTeam
                    ? fsuTeamInfo.logos[0]
                    : opposingTeamInfo.logos[0]
                }
                alt={fsuTeamInfo.school}
              />
              <span className="inline-block">
                {isFsuHomeTeam ? gameInfo.home_points : gameInfo.away_points}
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2>Right Information Here</h2>
        </div>
      </div>
    );
  }
};

BoxScore.propTypes = {
  fsuTeamInfo: PropTypes.object.isRequired,
  gameInfo: PropTypes.array.isRequired,
  gameStats: PropTypes.array.isRequired,
  isFsuHomeTeam: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default BoxScore;

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
  if (loading) {
    return <h1 className="text-3xl">Loading...</h1>;
  } else {
    return (
      <div className="flex justify-center">
        <div className="w-1/2 flex">
          <div className="w-1/3">
            <div>
              <img
                src={
                  isFsuHomeTeam
                    ? opposingTeamInfo.logos[0]
                    : fsuTeamInfo.logos[0]
                }
                alt={fsuTeamInfo.school}
              />
            </div>
          </div>
          <div className="w-1/3 text-center my-auto">
            <div>
              <span className="text-5xl">Vs.</span>
            </div>
          </div>
          <div className="w-1/3">
            <div>
              <img
                src={
                  isFsuHomeTeam
                    ? fsuTeamInfo.logos[0]
                    : opposingTeamInfo.logos[0]
                }
                alt={fsuTeamInfo.school}
              />
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

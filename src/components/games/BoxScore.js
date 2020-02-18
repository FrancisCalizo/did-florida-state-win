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
    return <h1>Loading...</h1>;
  } else {
    console.log(opposingTeamInfo);
    return (
      <div className="flex justify-center">
        <div className="w-1/2 flex">
          <div className="w-1/3">
            {!isFsuHomeTeam && (
              <div>
                {Object.entries(fsuTeamInfo).length !== 0 ||
                fsuTeamInfo.constructor !== Object ? (
                  <img src={fsuTeamInfo.logos[0]} alt={fsuTeamInfo.school} />
                ) : null}
              </div>
            )}
            {isFsuHomeTeam && (
              <div>
                {Object.entries(opposingTeamInfo).length !== 0 ||
                opposingTeamInfo.constructor !== Object ? (
                  <img
                    src={opposingTeamInfo.logos[0]}
                    alt={opposingTeamInfo.school}
                  />
                ) : null}
              </div>
            )}
          </div>
          <div className="w-1/3">Vs.</div>
          <div className="w-1/3">
            {isFsuHomeTeam && (
              <div>
                {Object.entries(fsuTeamInfo).length !== 0 ||
                fsuTeamInfo.constructor !== Object ? (
                  <img src={fsuTeamInfo.logos[0]} alt={fsuTeamInfo.school} />
                ) : null}
              </div>
            )}
            {!isFsuHomeTeam && (
              <div>
                {Object.entries(opposingTeamInfo).length !== 0 ||
                opposingTeamInfo.constructor !== Object ? (
                  <img
                    src={opposingTeamInfo.logos[0]}
                    alt={opposingTeamInfo.school}
                  />
                ) : null}
              </div>
            )}
            {/* {!isFsuHomeTeam && (
              <div>
                {(Object.entries(opposingTeamInfo).length !== 0 ||
                  opposingTeamInfo.constructor !== Object) &&
                opposingTeamInfo.logos ? (
                  <img
                    src={opposingTeamInfo.logos[0]}
                    alt={opposingTeamInfo.school}
                  />
                ) : null}
              </div>
            )} */}
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

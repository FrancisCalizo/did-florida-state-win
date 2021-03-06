import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';

const RosterItem = ({ roster }) => {
  const getClass = year => {
    switch (year) {
      case 1:
        return 'Freshman';
      case 2:
        return 'Sophomore';
      case 3:
        return 'Junior';
      case 4:
        return 'Senior';
      case 5:
        return 'Super-Senior';
      case 6:
        return 'Senior Citizen';
      default:
        return 'Unavailable';
    }
  };

  return (
    <div className="flex flex-wrap my-8 mx-8">
      {roster.map((player, idx) => {
        return (
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 90 * idx, duration: 300 }}
            key={player.id}
          >
            {props => (
              <div key={player.id} className="w-full lg:w-1/2" style={props}>
                <div className="my-1 lg:mx-1 py-4 border border-dark-200 rounded bg-white">
                  <div className="flex">
                    <img
                      className="w-32 h-32 inline-block mx-4"
                      src={require('../../images/avatar.png')}
                      alt="avatar"
                    />
                    <div className="flex items-center mx-2">
                      <div>
                        {player.position === null ||
                        player.height === null ||
                        player.weight === null ? (
                          <h2>Information Unavailable</h2>
                        ) : (
                          <h2>
                            {player.position} /{' '}
                            {`${parseInt(player.height / 12)}'${parseInt(
                              player.height % 12
                            )}"`}
                            -{player.weight}lbs |{' '}
                            <span className="underline font-bold">
                              {getClass(player.year)}
                            </span>
                          </h2>
                        )}
                        <h1 className="text-2xl my-2">
                          <span className="border-2 px-2 bg-dark-800 text-white">
                            #{player.jersey}
                          </span>
                          {'  '}
                          {`${player.first_name} ${player.last_name}`}
                        </h1>
                        {player.home_city === null ? (
                          <h2 className="text-sm">Hometown Unavailable</h2>
                        ) : (
                          <h2 className="text-sm">{`${player.home_city}, ${player.home_state}`}</h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Spring>
        );
      })}
    </div>
  );
};

RosterItem.propTypes = {
  roster: PropTypes.array.isRequired
};

export default RosterItem;

import React from 'react';
import PropTypes from 'prop-types';

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
      {roster.map(player => {
        return (
          <div
            key={player.id}
            className="w-full lg:w-1/2 my-1 py-2 border border-dark-200 rounded"
          >
            <div className="flex">
              <img
                className="w-32 inline-block mx-4"
                src={require('../../images/avatar.png')}
                alt="avatar"
              />
              <div className="flex items-center mx-2">
                <div>
                  <h2>
                    {player.position} /{' '}
                    {`${parseInt(player.height / 12)}'${parseInt(
                      player.height % 12
                    )}"`}
                    -{player.weight} |{' '}
                    <span className="underline font-bold">
                      {getClass(player.year)}
                    </span>
                  </h2>
                  <h1 className="text-2xl my-2">
                    <span className="border-2 px-2 bg-dark-800 text-white">
                      #{player.jersey}
                    </span>
                    {'  '}
                    {`${player.first_name} ${player.last_name}`}
                  </h1>
                  <h2 className="text-sm">{`${player.home_city}, ${player.home_state}`}</h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

RosterItem.propTypes = {
  roster: PropTypes.array.isRequired
};

export default RosterItem;

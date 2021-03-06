import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
        return null;
    }
  };

  const checkTBAGame = game => {
    if (game.home_points === null || game.away_points === null) {
      return <span className="font-bold">TBD</span>;
    } else {
      return game.home_team === 'Florida State'
        ? `${game.home_points} - ${game.away_points}`
        : `${game.away_points} - ${game.home_points}`;
    }
  };

  return (
    <Fragment>
      {games.map((game, idx) => {
        return (
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 150 * idx, duration: 700 }}
            key={game.id}
          >
            {props => (
              <div
                key={game.id}
                className="w-80 sm:w-1/2 lg:w-1/3"
                style={props}
              >
                <div className="sm:mx-2 md:mx-6 lg:mx-4 xl:mx-10 my-16 text-center rounded border border-dark-200 shadow-2xl bg-white">
                  <div
                    className="rounded font-bold py-1 text-md bg-black text-white w-32 shadow-2xl relative z-20"
                    style={cardDateDiagonal}
                  >
                    {new Date(game.start_date)
                      .toDateString()
                      .split(' ')
                      .slice(1)
                      .join(' ')}
                  </div>
                  {teamInfo.map(team =>
                    team.school === game.away_team ||
                    team.school === game.home_team ? (
                      <LazyLoadImage
                        key={team.id}
                        className={`w-48 rounded-full p-3 mx-auto z-10 -mb-20 bg-gray-300`}
                        src={
                          team.logos !== null
                            ? team.logos[0].includes('http') &&
                              team.logos[0].replace('http:', 'https:')
                            : require('../../images/avatar.png')
                        }
                        alt={`${team.school}-logo`}
                        style={profileImgBorder(team)}
                      />
                    ) : null
                  )}
                  <div className="px-6 -mt-24">
                    <span
                      className="inline-block rounded-full border border-black py-1 px-2 bg-white z-20
                  "
                      style={translate('5%')}
                    >
                      {game.home_team === 'Florida State' ? 'vs' : 'at'}
                    </span>
                    <h2 className="font-bold text-2xl xl:text-3xl">
                      {game.home_team === 'Florida State'
                        ? game.away_team
                        : game.home_team}
                    </h2>
                    <div
                      className="bg-black w-48 mx-auto py-2 my-2"
                      style={skew('-10deg')}
                    >
                      <div>
                        <h2
                          className="text-4xl text-white font-bold"
                          style={skew('10deg')}
                        >
                          {renderWinLoss(game)}
                        </h2>
                      </div>
                      <h2 className="text-4xl text-white" style={skew('10deg')}>
                        {checkTBAGame(game)}
                      </h2>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <Link
                      to={`/gamedetails/${game.season}/${game.week}/${game.id}`}
                    >
                      <button className="inline-block bg-gold-600 border rounded py-1 px-4 text-white cursor-pointer hover:bg-gold-500 active:bg-gold-700">
                        Game Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Spring>
        );
      })}
    </Fragment>
  );
};

// Inline Styles
const profileImgBorder = e => {
  return {
    border: `4px solid ${e.alt_color}`,
    boxShadow: `0 0 0 4px ${e.color}`,
    transform: `translateY(-40%)`
  };
};

const cardDateDiagonal = {
  transform: 'translateX(-35%) rotate(-45deg) '
};

const skew = amount => {
  return { transform: `skew(${amount})` };
};

const translate = amount => {
  return { transform: `translate(${amount})` };
};

export default GameItem;

import React, { useContext } from 'react';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LastGame = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const { loading, fsuInfo, lastGame, lastGameOpponent } = didWeWinContext;

  const renderWinLoss = game => {
    switch (true) {
      case game.home_team === 'Florida State' &&
        game.home_points > game.away_points:
        return 'WE WON!';
      case game.home_team === 'Florida State' &&
        game.home_points < game.away_points:
        return (
          <div className="font-bold text-4xl sm:text-6xl lg:text-8xl my-4 uppercase">
            <h1
              className="inline-block"
              style={{ transform: 'translateY(30px)' }}
            >
              They
            </h1>{' '}
            <img
              src={require('../../images/sad-corgi.gif')}
              alt="sad-corgi"
              className="w-24 md:w-32 inline"
            />{' '}
            <h1
              className="inline-block"
              style={{ transform: 'translateY(30px)' }}
            >
              Lost
            </h1>
          </div>
        );
      case game.away_team === 'Florida State' &&
        game.home_points > game.away_points:
        return (
          <div className="font-bold text-4xl sm:text-6xl lg:text-8xl my-4 uppercase">
            <h1
              className="inline-block"
              style={{ transform: 'translateY(30px)' }}
            >
              They
            </h1>{' '}
            <img
              src={require('../../images/sad-corgi.gif')}
              alt="sad-corgi"
              className="w-24 md:w-32 inline"
            />{' '}
            <h1
              className="inline-block"
              style={{ transform: 'translateY(30px)' }}
            >
              Lost
            </h1>
          </div>
        );
      case game.away_team === 'Florida State' &&
        game.home_points < game.away_points:
        return 'WE WON!';
      default:
        return "We played! But our scores haven't been updated yet";
    }
  };

  if (loading || !lastGame || !lastGameOpponent) {
    return null;
  } else {
    return (
      <div className="sm:mb-32">
        {/* Outcomes*/}
        <div className="flex justify-center">{renderWinLoss(lastGame)}</div>
        {/* Date */}
        <div className="flex justify-center">
          <div className="inline-block bg-gold-500 text-white border-2 border-gold-600 rounded text-center py-2 mt-6 text-xl px-2 md:px-4 md:text-2xl md:px-6 lg:text-3xl lg:px-8 ">
            {moment(lastGame.start_date).format('LL')}
          </div>
        </div>
        {/* Teams */}
        <div className="flex justify-center mt-4 mb-10">
          <div className="text-center">
            {lastGame.away_team === 'Florida State' ? (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={fsuInfo.logos[0]}
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(fsuInfo)}
              />
            ) : (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={lastGameOpponent.logos[0]}
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(lastGameOpponent)}
              />
            )}
            {lastGame.away_points && (
              <div className="mb-4">
                <h2 className="inline-block border-2 border-dark-700 font-bold bg-white text-4xl px-3">
                  {lastGame.away_points}
                </h2>
              </div>
            )}
            <div
              className="bg-black text-white font-bold sm:text-xl md:text-2xl lg:text-3xl py-1 lg:py-2 px-2"
              style={skew('-10deg')}
            >
              <h2 style={skew('10deg')}>{lastGame.away_team}</h2>
              <h2 style={skew('10deg')}>
                {lastGame.away_team === 'Florida State'
                  ? fsuInfo.mascot
                  : lastGameOpponent.mascot}
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="uppercase text-center font-bold bg-white rounded-full border-2 border-black text-xl sm:text-2xl lg:text-4xl px-3 py-1 mx-4 sm:mx-8 lg:mx-12">
              vs
            </div>
          </div>
          <div className="text-center">
            {' '}
            {lastGame.home_team === 'Florida State' ? (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={fsuInfo.logos[0]}
                alt="home-team-logo"
                effect="blur"
                style={profileImgBorder(fsuInfo)}
              />
            ) : (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={lastGameOpponent.logos[0]}
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(lastGameOpponent)}
              />
            )}
            {lastGame.home_points && (
              <div className="mb-4">
                <h2 className="inline-block border-2 border-dark-700 font-bold bg-white text-4xl px-3">
                  {lastGame.home_points}
                </h2>
              </div>
            )}
            <div
              className="bg-black text-white font-bold sm:text-xl md:text-2xl
              lg:text-3xl py-1 lg:py-2 px-2"
              style={skew('-10deg')}
            >
              <h2 style={skew('10deg')}>{lastGame.home_team}</h2>
              <h2 style={skew('10deg')}>
                {lastGame.home_team === 'Florida State'
                  ? fsuInfo.mascot
                  : lastGameOpponent.mascot}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const profileImgBorder = e => {
  return {
    border: `4px solid ${e.alt_color}`,
    boxShadow: `0 0 0 4px ${e.color}`
  };
};

const skew = amount => {
  return { transform: `skew(${amount})` };
};

export default LastGame;

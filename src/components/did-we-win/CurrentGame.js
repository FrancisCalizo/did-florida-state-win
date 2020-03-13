import React, { useContext } from 'react';
import moment from 'moment';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CurrentGame = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const {
    loading,
    fsuInfo,
    currentGame,
    currentGameOpponent
  } = didWeWinContext;

  if (loading || !currentGame || !currentGameOpponent) {
    return null;
  } else {
    return (
      <div>
        {/* Teams */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center uppercase font-bold glitch mt-8 max-w-95 mx-auto">
            <span className="gc gc-garnet">Wake Up, It's Gameday!</span>
            <span className="gc gc-gold">Wake Up, It's Gameday!</span>
            <span className="gc gc-black">Wake Up, It's Gameday!</span>
            <span className="glitch__main">Wake Up, It's Gameday!</span>
            <span className="gl gl-first"></span>
            <span className="gl gl-second"></span>
          </h1>
        </div>
        {/* Date */}
        <div className="flex justify-center">
          <div className="inline-block bg-gold-500 text-white border-2 border-gold-600 rounded text-center py-2 mt-6 text-xl px-2 md:px-4 md:text-2xl md:px-6 lg:text-3xl lg:px-8 ">
            {moment(currentGame.start_date).format('LL')}
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-10">
          <div className="text-center">
            {currentGame.away_team === 'Florida State' ? (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={
                  fsuInfo.logos[0].includes('http') &&
                  fsuInfo.logos[0].replace('http:', 'https:')
                }
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(fsuInfo)}
              />
            ) : (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={
                  currentGameOpponent.logos[0].includes('http') &&
                  currentGameOpponent.logos[0].replace('http:', 'https:')
                }
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(currentGameOpponent)}
              />
            )}
            <div
              className="bg-black text-white font-bold sm:text-xl md:text-2xl lg:text-3xl py-1 lg:py-2 px-2"
              style={skew('-10deg')}
            >
              <h2 style={skew('10deg')}>{currentGame.away_team}</h2>
              <h2 style={skew('10deg')}>
                {currentGame.away_team === 'Florida State'
                  ? fsuInfo.mascot
                  : currentGameOpponent.mascot}
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
            {currentGame.home_team === 'Florida State' ? (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={
                  fsuInfo.logos[0].includes('http') &&
                  fsuInfo.logos[0].replace('http:', 'https:')
                }
                alt="home-team-logo"
                effect="blur"
                style={profileImgBorder(fsuInfo)}
              />
            ) : (
              <LazyLoadImage
                className="w-24 sm:w-40 lg:w-48 rounded-full my-4"
                src={
                  currentGameOpponent.logos[0].includes('http') &&
                  currentGameOpponent.logos[0].replace('http:', 'https:')
                }
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(currentGameOpponent)}
              />
            )}
            <div
              className="bg-black text-white font-bold sm:text-xl md:text-2xl lg:text-3xl py-1 lg:py-2 px-2"
              style={skew('-10deg')}
            >
              <h2 style={skew('10deg')}>{currentGame.home_team}</h2>
              <h2 style={skew('10deg')}>
                {currentGame.home_team === 'Florida State'
                  ? fsuInfo.mascot
                  : currentGameOpponent.mascot}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Inline Styles
const profileImgBorder = e => {
  return {
    border: `4px solid ${e.alt_color}`,
    boxShadow: `0 0 0 4px ${e.color}`
  };
};

const skew = amount => {
  return { transform: `skew(${amount})` };
};

export default CurrentGame;

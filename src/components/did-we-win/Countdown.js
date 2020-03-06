import React, { useContext } from 'react';
import moment from 'moment';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Countdown = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const {
    countdown,
    loading,
    fsuInfo,
    nextGame,
    nextGameOpponent,
    lastGame,
    lastGameOpponent
  } = didWeWinContext;

  if (loading || !nextGame || !nextGameOpponent) {
    return null;
  } else {
    return (
      <div>
        {/* Teams */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center uppercase font-bold glitch mt-4">
            <span className="gc gc-garnet">Gameday is upon us</span>
            <span className="gc gc-gold">Gameday is upon us</span>
            <span className="gc gc-black">Gameday is upon us</span>
            <span className="glitch__main">Gameday is upon us</span>
            <span className="gl gl-first"></span>
            <span className="gl gl-second"></span>
          </h1>
        </div>
        {/* Date */}
        <div className="flex justify-center">
          <div className="inline-block bg-gold-500 text-white border-2 border-gold-600 rounded text-center py-2 mt-6 text-xl px-2 md:px-4 md:text-2xl md:px-6 lg:text-3xl lg:px-8 ">
            {moment(nextGame.start_date).format('LL')}
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-10">
          <div className="text-center">
            {nextGame.away_team === 'Florida State' ? (
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
                src={nextGameOpponent.logos[0]}
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(nextGameOpponent)}
              />
            )}
            <div
              className="bg-black text-white font-bold sm:text-xl md:text-2xl lg:text-3xl py-1 lg:py-2 px-2"
              style={skew('-10deg')}
            >
              <h2 style={skew('10deg')}>{nextGame.away_team}</h2>
              <h2 style={skew('10deg')}>
                {nextGame.awayTeam === 'Florida State'
                  ? fsuInfo.mascot
                  : nextGameOpponent.mascot}
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
            {nextGame.home_team === 'Florida State' ? (
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
                src={nextGameOpponent.logos[0]}
                alt="away-team-logo"
                effect="blur"
                style={profileImgBorder(nextGameOpponent)}
              />
            )}
            <div
              className="bg-black text-white font-bold sm:text-xl md:text-2xl lg:text-3xl py-1 lg:py-2 px-2"
              style={skew('-10deg')}
            >
              <h2 style={skew('10deg')}>{nextGame.home_team}</h2>
              <h2 style={skew('10deg')}>
                {nextGame.home_team === 'Florida State'
                  ? fsuInfo.mascot
                  : nextGameOpponent.mascot}
              </h2>
            </div>
          </div>
        </div>
        {/* Counter */}
        <div className="flex justify-center mt-4">
          <div
            className="inline-block border-8 border-gold-500 bg-white mb-12"
            style={{ boxShadow: `0 0 0 4px black` }}
          >
            <div className="flex justify-center text-center px-8 sm:pb-2 lg:pb-4">
              <div>
                <div className="font-semibold text-4xl sm:text-5xl lg:text-7xl px-2 sm:px-3 lg:px-4 h-12 sm:h-16 lg:h-24">
                  {parseInt(countdown.asDays())}
                </div>
                <div>Days</div>
              </div>
              <div>
                <div className="font-semibold text-4xl sm:text-5xl lg:text-7xl px-2 sm:px-3 lg:px-4 h-12 sm:h-16 lg:h-24">
                  :
                </div>
              </div>
              <div>
                <div className="font-semibold text-4xl sm:text-5xl lg:text-7xl px-2 sm:px-3 lg:px-4 h-12 sm:h-16 lg:h-24">
                  {countdown._data.hours}
                </div>
                <div>Hours</div>
              </div>
              <div>
                <div className="font-semibold text-4xl sm:text-5xl lg:text-7xl px-2 sm:px-3 lg:px-4 h-12 sm:h-16 lg:h-24">
                  :
                </div>
              </div>
              <div>
                <div className="font-semibold text-4xl sm:text-5xl lg:text-7xl px-2 sm:px-3 lg:px-4 h-12 sm:h-16 lg:h-24">
                  {countdown._data.minutes}
                </div>
                <div>Minutes</div>
              </div>
              <div>
                <div className="font-semibold text-4xl sm:text-5xl lg:text-7xl px-2 sm:px-3 lg:px-4 h-12 sm:h-16 lg:h-24">
                  :
                </div>
              </div>
              <div>
                <div className="font-semibold text-4xl sm:text-5xl lg:text-7xl px-2 sm:px-3 lg:px-4 h-12 sm:h-16 lg:h-24">
                  {countdown._data.seconds}
                </div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>
        {lastGame !== null && lastGame !== undefined && (
          <h1>PAST GAME: {lastGameOpponent.school}</h1>
        )}
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

export default Countdown;

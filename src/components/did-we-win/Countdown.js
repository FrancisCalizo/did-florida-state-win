import React, { useContext } from 'react';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import Loading from '../layout/Loading';
const Countdown = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const {
    countdown,
    loading,
    fsuInfo,
    nextGame,
    nextGameOpponent
  } = didWeWinContext;

  if (loading || !nextGame || !nextGameOpponent) {
    return <Loading />;
  } else {
    return (
      <div>
        {/* Teams */}
        <div className="flex justify-center">
          <div>
            {nextGame.away_team === 'Florida State' ? (
              <img
                className="w-12"
                src={fsuInfo.logos[0]}
                alt="away-team-logo"
              />
            ) : (
              <img
                className="w-12"
                src={nextGameOpponent.logos[0]}
                alt="away-team-logo"
              />
            )}
            {nextGame.away_team}
          </div>
          <div>vs.</div>
          <div>
            {nextGame.home_team === 'Florida State' ? (
              <img
                className="w-12"
                src={fsuInfo.logos[0]}
                alt="home-team-logo"
              />
            ) : (
              <img
                className="w-12"
                src={nextGameOpponent.logos[0]}
                alt="away-team-logo"
              />
            )}
            {nextGame.home_team}
          </div>
        </div>
        {/* Counter */}
        <div className="flex justify-center">
          <div className="inline-block border-2 border-dark-500 bg-white">
            <div className="flex justify-center text-center px-3 pb-4">
              <div>
                <div className="lg:text-6xl lg:px-4 lg:h-20">
                  {parseInt(countdown.asDays())}
                </div>
                <div>Days</div>
              </div>
              <div>
                <div className="lg:text-6xl lg:px-4 lg:h-20">:</div>
              </div>
              <div>
                <div className="lg:text-6xl lg:px-4 lg:h-20">
                  {countdown._data.hours}
                </div>
                <div>Hours</div>
              </div>
              <div>
                <div className="lg:text-6xl lg:px-4 lg:h-20">:</div>
              </div>
              <div>
                <div className="lg:text-6xl lg:px-4 lg:h-20">
                  {countdown._data.minutes}
                </div>
                <div>Minutes</div>
              </div>
              <div>
                <div className="lg:text-6xl lg:px-4 lg:h-20">:</div>
              </div>
              <div>
                <div className="lg:text-6xl lg:px-4 lg:h-20">
                  {countdown._data.seconds}
                </div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Countdown;

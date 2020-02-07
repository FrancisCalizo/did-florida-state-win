import React, { useContext } from 'react';
import { Spring } from 'react-spring/renderprops';
import GamesContext from '../../context/games/gamesContext';

const SeasonStats = () => {
  const gamesContext = useContext(GamesContext);
  const {
    seasonWins,
    seasonLosses,
    homeWins,
    homeLosses,
    awayWins,
    awayLosses,
    conferenceWins,
    conferenceLosses
  } = gamesContext;
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 100, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div className="flex justify-center text-center mb-16 px-8 text-black">
            <div className="border text-5xl pb-2 w-1/4 bg-white box-border">
              <h2 className="text-black bg-gold-500 text-base py-1 border">
                Overall
              </h2>
              <h2 className="font-bold my-3">
                {seasonWins}-{seasonLosses}
              </h2>
            </div>
            <div className="border text-5xl pb-2 w-1/4 bg-white box-border">
              <h2 className="text-black bg-gold-500 text-base py-1 border">
                Conference
              </h2>
              <h2 className="font-bold my-3">
                {conferenceWins}-{conferenceLosses}
              </h2>
            </div>
            <div className="border text-5xl pb-2 w-1/4 bg-white box-border">
              <h2 className="text-black bg-gold-500 text-base py-1 border">
                Home
              </h2>
              <h2 className="font-bold my-3">
                {homeWins}-{homeLosses}
              </h2>
            </div>
            <div className="border text-5xl pb-2 w-1/4 bg-white box-border">
              <h2 className="text-black bg-gold-500 text-base py-1 border">
                Away
              </h2>
              <h2 className="font-bold my-3">
                {awayWins}-{awayLosses}
              </h2>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default SeasonStats;

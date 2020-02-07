import React, { useContext } from 'react';
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
    <div className="flex justify-center text-center mb-16 px-8 text-white">
      <div className="border text-4xl py-2 w-1/4 bg-black">
        <h2 className="text-gold-500 text-base">Overall</h2>
        <h2 className="font-bold">
          {seasonWins}-{seasonLosses}
        </h2>
      </div>
      <div className="border text-4xl py-2 w-1/4 bg-black">
        <h2 className="text-gold-500 text-base">Conference</h2>
        <h2 className="font-bold">
          {conferenceWins}-{conferenceLosses}
        </h2>
      </div>
      <div className="border text-4xl py-2 w-1/4 bg-black">
        <h2 className="text-gold-500 text-base">Home</h2>
        <h2 className="font-bold">
          {homeWins}-{homeLosses}
        </h2>
      </div>
      <div className="border text-4xl py-2 w-1/4 bg-black">
        <h2 className="text-gold-500 text-base">Away</h2>
        <h2 className="font-bold">
          {awayWins}-{awayLosses}
        </h2>
      </div>
    </div>
  );
};

export default SeasonStats;

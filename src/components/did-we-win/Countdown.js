import React, { useContext, useState } from 'react';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import Loading from '../layout/Loading';
const Countdown = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const { countdown, loading } = didWeWinContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <h1>{`${parseInt(countdown.asDays())} Days ${
          countdown._data.hours
        } Hours ${countdown._data.minutes} Mins ${
          countdown._data.seconds
        } Sec`}</h1>
      </div>
    );
  }
};

export default Countdown;

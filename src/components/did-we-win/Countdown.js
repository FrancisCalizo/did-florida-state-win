import React, { useContext } from 'react';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';

const Countdown = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const { currentDate } = didWeWinContext;

  return (
    <div>
      <h1>{currentDate}</h1>
    </div>
  );
};

export default Countdown;

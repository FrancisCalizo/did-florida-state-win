import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import Countdown from '../did-we-win/Countdown';
import LastGame from '../did-we-win/LastGame';

import DidWeWinContext from '../../context/did-we-win/didWeWinContext';

const DidWeWin = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const { fetchCurrentSchedule } = didWeWinContext;

  useEffect(() => {
    fetchCurrentSchedule(moment().format('YYYY'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <Countdown /> */}
      <LastGame />
    </div>
  );
};

export default DidWeWin;

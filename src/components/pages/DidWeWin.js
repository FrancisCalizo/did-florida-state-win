import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import Countdown from '../did-we-win/Countdown';
import LastGame from '../did-we-win/LastGame';
import Loading from '../layout/Loading';

import DidWeWinContext from '../../context/did-we-win/didWeWinContext';

const DidWeWin = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const { fetchCurrentSchedule, loading } = didWeWinContext;

  useEffect(() => {
    // fetchCurrentSchedule(moment().format('YYYY'));
    fetchCurrentSchedule(2019); // DELETE LATER
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Countdown />
        <LastGame />
      </div>
    );
  }
};

export default DidWeWin;

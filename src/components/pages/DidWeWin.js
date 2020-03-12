import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import Countdown from '../did-we-win/Countdown';
import LastGame from '../did-we-win/LastGame';
import CurrentGame from '../did-we-win/CurrentGame';
import Loading from '../layout/Loading';

import DidWeWinContext from '../../context/did-we-win/didWeWinContext';

const DidWeWin = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const {
    fetchCurrentSchedule,
    currentGame,
    currentSchedule,
    lastGame,
    nextGame,
    loading,
    now
  } = didWeWinContext;

  useEffect(() => {
    // fetchCurrentSchedule(moment().format('YYYY'));
    fetchCurrentSchedule(2020); // DELETE LATER
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderComponents = () => {
    // REPLACE 'NOW' STATE WITH MOMENT();
    switch (true) {
      case currentGame !== null && currentGame !== undefined:
        return <CurrentGame />;
      case lastGame !== null && lastGame !== undefined:
        if (
          parseInt(
            moment.duration(now.diff(moment(lastGame.start_date))).as('days')
          ) <= 2
        ) {
          return <LastGame />;
        }
        if (
          parseInt(
            moment.duration(now.diff(moment(lastGame.start_date))).as('days')
          ) >= 3 &&
          currentGame === null
        ) {
          return <Countdown />;
        }
        break;
      case nextGame !== null && nextGame !== undefined:
        return <Countdown />;
      default:
        return 'PAST GAME OR CHECK BACK LATER PAGE HERE???';
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return <div>{renderComponents()}</div>;
  }
};

export default DidWeWin;

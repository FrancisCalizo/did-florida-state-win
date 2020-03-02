import React, { useReducer, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import DidWeWinContext from './didWeWinContext';
import DidWeWinReducer from './didWeWinReducer';
import { SET_CURRENT_DATE, FETCH_CURRENT_SCHEDULE } from '../types';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const DidWeWinState = props => {
  const initialState = {
    currentDate: 0,
    currentSchedule: null
  };

  const [state, dispatch] = useReducer(DidWeWinReducer, initialState);

  const fetchCurrentSchedule = async year => {
    try {
      let res = await axios.get(
        `https://api.collegefootballdata.com/games?year=${year}&team=Florida%20State`
      );

      let currentSchedule = res.data;

      dispatch({
        type: FETCH_CURRENT_SCHEDULE,
        payload: currentSchedule
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DidWeWinContext.Provider
      value={{
        currentDate: state.currentDate,
        currentSchedule: state.currentSchedule,
        fetchCurrentSchedule: fetchCurrentSchedule
      }}
    >
      {props.children}
    </DidWeWinContext.Provider>
  );
};

// currentDate: moment().format('MMMM Do YYYY, h:mm:ss a')

// useInterval(() => {
//   console.log('happening');
//   dispatch({
//     action: SET_CURRENT_DATE
//     // payload: moment().format('MMMM Do YYYY, h:mm:ss a')
//   });
// }, 1000);

export default DidWeWinState;

import React, { useReducer, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import DidWeWinContext from './didWeWinContext';
import DidWeWinReducer from './didWeWinReducer';
import {
  SET_CURRENT_DATE,
  FETCH_CURRENT_SCHEDULE,
  FETCH_CURRENT_GAME,
  FETCH_NEXT_GAME,
  FETCH_LAST_GAME,
  FETCH_TIME_UNTIL_NEXT_GAME
} from '../types';

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
    currentDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
    currentGame: null,
    nextGame: null,
    lastGame: null,
    currentSchedule: null
  };

  const [state, dispatch] = useReducer(DidWeWinReducer, initialState);

  useInterval(() => {
    dispatch({
      type: SET_CURRENT_DATE,
      payload: moment().format('MMMM Do YYYY, h:mm:ss a')
    });
  }, 1000);

  const fetchCurrentSchedule = async year => {
    const SECONDS_IN_A_DAY = 86400;

    try {
      let res = await axios.get(
        `https://api.collegefootballdata.com/games?year=${year}&team=Florida%20State`
      );

      // Get Future Games of Season
      let futureGames = res.data
        .filter(game => {
          return moment(game.start_date) - moment() > SECONDS_IN_A_DAY;
        })
        .sort((a, b) => {
          return (
            moment(a.start_date) - moment() - (moment(b.start_date) - moment())
          );
        });

      // Get Past Games of Season
      let pastGames = res.data
        .filter(game => {
          return moment(game.start_date) - moment() < -SECONDS_IN_A_DAY;
        })
        .sort((a, b) => {
          return (
            moment(a.start_date) - moment() - (moment(b.start_date) - moment())
          );
        });

      // Get Game Currently Being Played
      let currentGame = res.data.filter(game => {
        return (
          moment(game.start_date) - moment() > -SECONDS_IN_A_DAY &&
          moment(game.start_date) - moment() < SECONDS_IN_A_DAY
        );
      });

      // Dispatch for Current Schedule, next game, last game
      dispatch({
        type: FETCH_CURRENT_SCHEDULE,
        payload: res.data
      });
      if (currentGame.length > 0) {
        dispatch({
          type: FETCH_CURRENT_GAME,
          payload: currentGame[0]
        });
      }
      if (futureGames.length > 0) {
        dispatch({
          type: FETCH_NEXT_GAME,
          payload: futureGames[0]
        });
      }
      if (pastGames.length > 0) {
        dispatch({
          type: FETCH_LAST_GAME,
          payload: pastGames[pastGames.length - 1]
        });
      }
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

export default DidWeWinState;

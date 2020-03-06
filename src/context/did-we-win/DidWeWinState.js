import React, { useReducer, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import DidWeWinContext from './didWeWinContext';
import DidWeWinReducer from './didWeWinReducer';
import {
  FETCH_CURRENT_SCHEDULE,
  FETCH_FSU_INFO,
  FETCH_CURRENT_GAME,
  FETCH_CURRENT_GAME_OPPONENT,
  FETCH_NEXT_GAME,
  FETCH_NEXT_GAME_OPPONENT,
  FETCH_LAST_GAME,
  FETCH_LAST_GAME_OPPONENT,
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
    now: moment('2019-08-30 17:00:23', 'YYYY-MM-DD HH:mm:ss'), //Convert state.now back to moment () and DELETE THIS LINE LATER
    currentGame: null,
    currentGameOpponent: null,
    fsuInfo: null,
    nextGame: null,
    nextGameOpponent: null,
    lastGame: null,
    lastGameOpponent: null,
    countdown: null,
    currentSchedule: null,
    loading: true
  };

  const [state, dispatch] = useReducer(DidWeWinReducer, initialState);

  useInterval(() => {
    // Get Time until next game (Countdown)
    if (state.nextGame !== null) {
      let now = state.now;
      let next = moment(state.nextGame.start_date);
      let diff = moment.duration(next.diff(now));
      dispatch({
        type: FETCH_TIME_UNTIL_NEXT_GAME,
        payload: diff
      });
    }
  }, 1000);

  const fetchCurrentSchedule = year => {
    // FSU Current Schedule
    let res = axios.get(
      `https://api.collegefootballdata.com/games?year=${year}&team=Florida%20State`
    );

    // Get Team Information
    let res2 = axios.get(`https://api.collegefootballdata.com/teams`);

    Promise.all([res, res2])
      .then(data => {
        const [res, res2] = data;

        // Get FSU Info
        let fsuInfo = res2.data.filter(team => team.school === 'Florida State');

        // Get Future Games of Season
        let futureGames = res.data
          .filter(game => {
            return moment.duration(moment(game.start_date).diff(state.now)) > 0;
          })
          .sort((a, b) => {
            return (
              moment(a.start_date) -
              state.now -
              (moment(b.start_date) - state.now)
            );
          });

        // Get Future Game Opponent
        let futureOpponent;
        if (futureGames.length > 0) {
          futureOpponent = res2.data.filter(team => {
            return futureGames[0].home_team !== 'Florida State'
              ? team.school === futureGames[0].home_team
              : team.school === futureGames[0].away_team;
          });
        }

        // Get Past Games of Season
        let pastGames = res.data
          .filter(game => {
            return moment.duration(moment(game.start_date).diff(state.now)) < 0;
          })
          .sort((a, b) => {
            return (
              moment(a.start_date) -
              state.now -
              (moment(b.start_date) - state.now)
            );
          });

        // Get Last Game Opponent
        let lastOpponent;
        if (pastGames.length > 0) {
          lastOpponent = res2.data.filter(team => {
            return pastGames[0].home_team !== 'Florida State'
              ? team.school === pastGames[0].home_team
              : team.school === pastGames[0].away_team;
          });
        }

        let currentGame = res.data.filter(game => {
          return moment(game.start_date).isSame(state.now, 'day');
        });

        // Get Last Game Opponent
        let currentOpponent;
        if (currentGame.length > 0) {
          currentOpponent = res2.data.filter(team => {
            return currentGame[0].home_team !== 'Florida State'
              ? team.school === currentGame[0].home_team
              : team.school === currentGame[0].away_team;
          });
        }

        // Dispatch All
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

        if (currentGame.length > 0) {
          dispatch({
            type: FETCH_CURRENT_GAME_OPPONENT,
            payload: currentOpponent[0]
          });
        }

        if (futureGames.length > 0) {
          dispatch({
            type: FETCH_NEXT_GAME,
            payload: futureGames[0]
          });
        }

        if (futureGames.length > 0) {
          dispatch({
            type: FETCH_NEXT_GAME_OPPONENT,
            payload: futureOpponent[0]
          });
        }

        if (pastGames.length > 0) {
          dispatch({
            type: FETCH_LAST_GAME,
            payload: pastGames[pastGames.length - 1]
          });
        }

        if (pastGames.length > 0) {
          dispatch({
            type: FETCH_LAST_GAME_OPPONENT,
            payload: lastOpponent[0]
          });
        }

        if (fsuInfo.length > 0) {
          dispatch({
            type: FETCH_FSU_INFO,
            payload: fsuInfo[0]
          });
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <DidWeWinContext.Provider
      value={{
        now: state.now, // DELETE LATER
        currentSchedule: state.currentSchedule,
        fsuInfo: state.fsuInfo,
        countdown: state.countdown,
        loading: state.loading,
        lastGame: state.lastGame,
        lastGameOpponent: state.lastGameOpponent,
        currentGame: state.currentGame,
        currentGameOpponent: state.currentGameOpponent,
        nextGame: state.nextGame,
        nextGameOpponent: state.nextGameOpponent,
        fetchCurrentSchedule: fetchCurrentSchedule
      }}
    >
      {props.children}
    </DidWeWinContext.Provider>
  );
};

export default DidWeWinState;

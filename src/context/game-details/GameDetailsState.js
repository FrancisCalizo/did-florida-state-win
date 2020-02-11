import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GameDetailsContext from './gameDetailsContext';
import GameDetailsReducer from './gameDetailsReducer';
import { GET_GAME_INFORMATION } from '../types';

const GameDetailsState = props => {
  const initialState = {
    gameInfo: [],
    gameStats: [],
    gamePlays: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GameDetailsReducer, initialState);

  const fetchGameInformation = async (season, week, id) => {
    try {
      let gameInfo = axios.get(
        `https://api.collegefootballdata.com/games?year=${season}&seasonType=regular&team=Florida%20State&id=${id}`
      );

      let gameStats = axios.get(
        `https://api.collegefootballdata.com/games/teams?year=${season}&seasonType=regular&team=Florida%20State&gameId=${id}`
      );

      let gamePlays = axios.get(
        `https://api.collegefootballdata.com/plays?year=${season}&week=${week}&team=Florida%20State`
      );

      Promise.all([gameInfo, gameStats, gamePlays]).then(res => {
        const [gameInfo, gameStats, gamePlays] = res;

        const gameInformation = {
          gameInfo: gameInfo['data'],
          gameStats: gameStats['data'],
          gamePlays: gamePlays['data']
        };

        dispatch({
          type: GET_GAME_INFORMATION,
          payload: gameInformation
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GameDetailsContext.Provider
      value={{
        gameInformation: state.gameInformation,
        fetchGameInformation: fetchGameInformation,
        loading: state.loading
      }}
    >
      {props.children}
    </GameDetailsContext.Provider>
  );
};

export default GameDetailsState;

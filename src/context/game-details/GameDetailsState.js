import React, { useReducer } from 'react';
import axios from 'axios';
import GameDetailsContext from './gameDetailsContext';
import GameDetailsReducer from './gameDetailsReducer';
import { GET_GAME_INFO } from '../types';

const GameDetailsState = props => {
  const initialState = {
    gameInfo: [],
    gameStats: [],
    gamePlays: [],
    loading: false,
    opposingTeamInfo: []
  };

  const [state, dispatch] = useReducer(GameDetailsReducer, initialState);

  const fetchGameInfo = async (season, week, id) => {
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

        const gameData = {
          gameInfo: gameInfo['data'],
          gameStats: gameStats['data'],
          gamePlays: gamePlays['data']
        };

        dispatch({
          type: GET_GAME_INFO,
          payload: gameData
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GameDetailsContext.Provider
      value={{
        gameInfo: state.gameInfo,
        gameStats: state.gameStats,
        gamePlays: state.gamePlays,
        currentTab: state.currentTab,
        fetchGameInfo: fetchGameInfo,
        loading: state.loading
      }}
    >
      {props.children}
    </GameDetailsContext.Provider>
  );
};

export default GameDetailsState;

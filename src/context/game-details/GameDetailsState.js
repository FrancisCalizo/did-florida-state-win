import React, { useReducer } from 'react';
import axios from 'axios';
import GameDetailsContext from './gameDetailsContext';
import GameDetailsReducer from './gameDetailsReducer';
import { GET_GAME_INFO, SET_LOADING } from '../types';

const GameDetailsState = props => {
  const initialState = {
    gameInfo: [],
    gameStats: [],
    gamePlays: [],
    opposingTeamInfo: [],
    isFsuHomeTeam: false,
    loading: true
  };

  const [state, dispatch] = useReducer(GameDetailsReducer, initialState);

  const fetchGameInfo = async (season, week, id) => {
    setLoading();

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

      let teamInfo = axios.get(`https://api.collegefootballdata.com/teams`);

      Promise.all([gameInfo, gameStats, gamePlays, teamInfo]).then(res => {
        const [gameInfo, gameStats, gamePlays, teamInfo] = res;

        const gameData = {
          gameInfo: gameInfo['data'],
          gameStats: gameStats['data'],
          gamePlays: gamePlays['data']
        };

        // Get Opposing Team Info && Find Out Home Team
        let opposingTeamName;
        if (gameData.gameInfo[0].home_team === 'Florida State') {
          opposingTeamName = gameData.gameInfo[0].away_team;
          gameData.isFsuHomeTeam = true;
        } else {
          opposingTeamName = gameData.gameInfo[0].home_team;
          gameData.isFsuHomeTeam = false;
        }

        gameData.opposingTeam = teamInfo.data.filter(
          team => team.school === opposingTeamName
        )[0];

        dispatch({
          type: GET_GAME_INFO,
          payload: gameData
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GameDetailsContext.Provider
      value={{
        gameInfo: state.gameInfo,
        gameStats: state.gameStats,
        gamePlays: state.gamePlays,
        opposingTeamInfo: state.opposingTeamInfo,
        isFsuHomeTeam: state.isFsuHomeTeam,
        fetchGameInfo: fetchGameInfo,
        loading: state.loading
      }}
    >
      {props.children}
    </GameDetailsContext.Provider>
  );
};

export default GameDetailsState;

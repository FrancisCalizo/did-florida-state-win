import React, { useReducer } from 'react';
import axios from 'axios';
import GameDetailsContext from './gameDetailsContext';
import GameDetailsReducer from './gameDetailsReducer';
import { GET_GAME_INFO, CLEAR_GAME_INFO, NO_INFO_AVAILABLE } from '../types';

const GameDetailsState = props => {
  const initialState = {
    gameInfo: {},
    gameStatsHome: {},
    gameStatsAway: {},
    gamePlays: [],
    opposingTeamInfo: [],
    isFsuHomeTeam: false,
    noInfoAvailable: false
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

      let teamInfo = axios.get(`https://api.collegefootballdata.com/teams`);

      Promise.all([gameInfo, gameStats, gamePlays, teamInfo]).then(res => {
        const [gameInfo, gameStats, gamePlays, teamInfo] = res;

        if (
          gameInfo['data'] === undefined ||
          gameInfo['data'].length === 0 ||
          gameStats['data'] === undefined ||
          gameStats['data'].length === 0 ||
          gamePlays['data'] === undefined ||
          gamePlays['data'].length === 0
        ) {
          dispatch({
            type: NO_INFO_AVAILABLE
          });
        } else {
          const gameData = {
            gameInfo: gameInfo['data'][0],
            gameStatsHome: gameStats['data'][0].teams.filter(
              team => team.homeAway === 'home'
            )[0],
            gameStatsAway: gameStats['data'][0].teams.filter(
              team => team.homeAway === 'away'
            )[0],
            gamePlays: gamePlays['data'].sort((a, b) => {
              return (
                a.period - b.period ||
                b.clock.minutes * 60 +
                  b.clock.seconds -
                  (a.clock.minutes * 60 + a.clock.seconds)
              );
            })
          };

          // Get Opposing Team Info && Find Out Home Team
          let opposingTeamName;
          if (gameData.gameInfo.home_team === 'Florida State') {
            opposingTeamName = gameData.gameInfo.away_team;
            gameData.isFsuHomeTeam = true;
          } else {
            opposingTeamName = gameData.gameInfo.home_team;
            gameData.isFsuHomeTeam = false;
          }

          gameData.opposingTeam = teamInfo.data.filter(
            team => team.school === opposingTeamName
          )[0];

          dispatch({
            type: GET_GAME_INFO,
            payload: gameData
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const clearGameInfo = () => {
    dispatch({
      type: CLEAR_GAME_INFO
    });
  };

  return (
    <GameDetailsContext.Provider
      value={{
        gameInfo: state.gameInfo,
        gameStatsHome: state.gameStatsHome,
        gameStatsAway: state.gameStatsAway,
        gamePlays: state.gamePlays,
        opposingTeamInfo: state.opposingTeamInfo,
        isFsuHomeTeam: state.isFsuHomeTeam,
        fetchGameInfo: fetchGameInfo,
        clearGameInfo: clearGameInfo
      }}
    >
      {props.children}
    </GameDetailsContext.Provider>
  );
};

export default GameDetailsState;

import { GET_GAME_INFO, CLEAR_GAME_INFO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GAME_INFO:
      return {
        ...state,
        gameInfo: action.payload.gameInfo,
        gameStats: action.payload.gameStats,
        gamePlays: action.payload.gamePlays,
        opposingTeamInfo: action.payload.opposingTeam,
        isFsuHomeTeam: action.payload.isFsuHomeTeam
      };
    case CLEAR_GAME_INFO:
      return {
        ...state,
        gameInfo: [],
        gameStats: [],
        gamePlays: [],
        opposingTeamInfo: [],
        isFsuHomeTeam: false
      };
    default:
      return state;
  }
};

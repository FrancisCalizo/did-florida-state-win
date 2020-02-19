import { GET_GAME_INFO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GAME_INFO:
      return {
        ...state,
        gameInfo: action.payload.gameInfo,
        gameStats: action.payload.gameStats,
        gamePlays: action.payload.gamePlays,
        opposingTeamInfo: action.payload.opposingTeam,
        isFsuHomeTeam: action.payload.isFsuHomeTeam,
        loading: false
      };
    default:
      return state;
  }
};

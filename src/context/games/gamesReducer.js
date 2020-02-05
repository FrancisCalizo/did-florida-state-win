import {
  GET_GAMES,
  GET_TEAMINFO,
  SET_LOADING,
  SET_OVERALLWINS,
  SET_OVERALLLOSSES
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload
      };
    case GET_TEAMINFO:
      return {
        ...state,
        teamInfo: action.payload,
        loading: false
      };
    case SET_OVERALLWINS:
      return {
        ...state,
        overallWins: action.payload
      };
    case SET_OVERALLLOSSES:
      return {
        ...state,
        overallLosses: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

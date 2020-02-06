import {
  GET_GAMES,
  GET_TEAMINFO,
  SET_SEASONWINS,
  SET_SEASONLOSSES,
  SET_LOADING
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
    case SET_SEASONWINS:
      return {
        ...state,
        seasonWins: action.payload,
        loading: false
      };
    case SET_SEASONLOSSES:
      return {
        ...state,
        seasonLosses: action.payload,
        loading: false
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

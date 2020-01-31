import { GET_GAMES, GET_LOGOS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload
      };
    case GET_LOGOS:
      return {
        ...state,
        logos: action.payload,
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

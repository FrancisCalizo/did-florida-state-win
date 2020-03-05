import {
  FETCH_CURRENT_SCHEDULE,
  FETCH_FSU_INFO,
  FETCH_TIME_UNTIL_NEXT_GAME,
  FETCH_CURRENT_GAME,
  FETCH_CURRENT_GAME_OPPONENT,
  FETCH_NEXT_GAME,
  FETCH_NEXT_GAME_OPPONENT,
  FETCH_LAST_GAME,
  FETCH_LAST_GAME_OPPONENT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_CURRENT_SCHEDULE:
      return {
        ...state,
        currentSchedule: action.payload
      };
    case FETCH_FSU_INFO:
      return {
        ...state,
        fsuInfo: action.payload
      };
    case FETCH_CURRENT_GAME:
      return {
        ...state,
        currentGame: action.payload
      };
    case FETCH_CURRENT_GAME_OPPONENT:
      return {
        ...state,
        currentGameOpponent: action.payload
      };
    case FETCH_NEXT_GAME:
      return {
        ...state,
        nextGame: action.payload
      };
    case FETCH_NEXT_GAME_OPPONENT:
      return {
        ...state,
        nextGameOpponent: action.payload
      };
    case FETCH_LAST_GAME:
      return {
        ...state,
        lastGame: action.payload
      };
    case FETCH_LAST_GAME_OPPONENT:
      return {
        ...state,
        lastGameOpponent: action.payload
      };
    case FETCH_TIME_UNTIL_NEXT_GAME:
      return {
        ...state,
        countdown: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

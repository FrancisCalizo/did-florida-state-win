import {
  SET_CURRENT_DATE,
  FETCH_CURRENT_SCHEDULE,
  FETCH_TIME_UNTIL_NEXT_GAME,
  FETCH_CURRENT_GAME,
  FETCH_NEXT_GAME,
  FETCH_LAST_GAME
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return {
        ...state,
        currentDate: action.payload
      };
    case FETCH_CURRENT_SCHEDULE:
      return {
        ...state,
        currentSchedule: action.payload
      };
    case FETCH_CURRENT_GAME:
      return {
        ...state,
        currentGame: action.payload
      };
    case FETCH_NEXT_GAME:
      return {
        ...state,
        nextGame: action.payload
      };
    case FETCH_LAST_GAME:
      return {
        ...state,
        lastGame: action.payload
      };
    case FETCH_TIME_UNTIL_NEXT_GAME:
      return {
        ...state
      };
    default:
      return state;
  }
};

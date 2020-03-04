import {
  SET_CURRENT_DATE,
  FETCH_CURRENT_SCHEDULE,
  FETCH_TIME_UNTIL_NEXT_GAME
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
        currentSchedule: action.payload.currentSchedule,
        lastGame: action.payload.lastGame,
        nextGame: action.payload.nextGame
      };
    case FETCH_TIME_UNTIL_NEXT_GAME:
      return {
        ...state
      };
    default:
      return state;
  }
};

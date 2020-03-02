import { SET_CURRENT_DATE, FETCH_CURRENT_SCHEDULE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return {
        ...state,
        currentDate: action.payload
      };
    case FETCH_CURRENT_SCHEDULE:
      // return {
      //   ...state,
      //   currentSchedule: action.payload
      // };
      return alert('blah');
    default:
      return state;
  }
};

import { GET_ROSTER_INFO, NO_ROSTER_INFO_AVAILABLE, SET_YEAR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_YEAR:
      return {
        ...state,
        year: action.payload
      };
    case GET_ROSTER_INFO:
      return {
        ...state,
        roster: action.payload,
        noRosterInfoAvailable: false
      };
    case NO_ROSTER_INFO_AVAILABLE:
      return {
        ...state,
        roster: [],
        noRosterInfoAvailable: true
      };
    default:
      return state;
  }
};

import {
  GET_ROSTER_INFO,
  CLEAR_ROSTER_INFO,
  NO_ROSTER_INFO_AVAILABLE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ROSTER_INFO:
      return {
        ...state,
        roster: action.payload,
        noRosterInfoAvailable: false
      };
    case CLEAR_ROSTER_INFO:
      return {
        ...state
      };
    case NO_ROSTER_INFO_AVAILABLE:
      return {
        ...state,
        noRosterInfoAvailable: true
      };
    default:
      return state;
  }
};

import { GET_SCHEDULE, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
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

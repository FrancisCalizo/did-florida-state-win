import { GET_FSU_TEAM_INFO, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FSU_TEAM_INFO:
      return {
        ...state,
        fsuTeamInfo: action.payload,
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

import { GET_FSU_TEAM_INFO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FSU_TEAM_INFO:
      return {
        ...state,
        fsuTeamInfo: action.payload
      };
    default:
      return state;
  }
};

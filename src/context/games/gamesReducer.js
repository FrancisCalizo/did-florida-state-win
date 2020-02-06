import {
  GET_GAMES,
  GET_TEAM_INFO,
  SET_SEASON_WINS,
  SET_SEASON_LOSSES,
  SET_HOME_WINS,
  SET_HOME_LOSSES,
  SET_AWAY_WINS,
  SET_AWAY_LOSSES,
  SET_CONFERENCE_WINS,
  SET_CONFERENCE_LOSSES,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload
      };
    case GET_TEAM_INFO:
      return {
        ...state,
        teamInfo: action.payload,
        loading: false
      };
    case SET_SEASON_WINS:
      return {
        ...state,
        seasonWins: action.payload,
        loading: false
      };
    case SET_SEASON_LOSSES:
      return {
        ...state,
        seasonLosses: action.payload,
        loading: false
      };
    case SET_HOME_WINS:
      return {
        ...state,
        homeWins: action.payload,
        loading: false
      };
    case SET_HOME_LOSSES:
      return {
        ...state,
        homeLosses: action.payload,
        loading: false
      };
    case SET_AWAY_WINS:
      return {
        ...state,
        awayWins: action.payload,
        loading: false
      };
    case SET_AWAY_LOSSES:
      return {
        ...state,
        awayLosses: action.payload,
        loading: false
      };
    case SET_CONFERENCE_WINS:
      return {
        ...state,
        conferenceWins: action.payload,
        loading: false
      };
    case SET_CONFERENCE_LOSSES:
      return {
        ...state,
        conferenceLosses: action.payload,
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

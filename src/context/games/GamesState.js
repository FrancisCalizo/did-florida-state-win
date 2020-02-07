import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GamesContext from './gamesContext';
import GamesReducer from './gamesReducer';
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
  SET_LOADING,
  SET_YEAR
} from '../types';

const GamesState = props => {
  const initialState = {
    games: [],
    teamInfo: [],
    seasonWins: 0,
    seasonLosses: 0,
    homeWins: 0,
    homeLosses: 0,
    awayWins: 0,
    awayLosses: 0,
    conferenceWins: 0,
    conferenceLosses: 0,
    year: 2019,
    loading: false
  };

  const [state, dispatch] = useReducer(GamesReducer, initialState);

  useEffect(() => {
    (async function getData() {
      await fetchGames(state.year);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.year]);

  const fetchGames = year => {
    setLoading();

    // Regular Season
    let regularSeason = axios.get(
      `https://api.collegefootballdata.com/games?year=${year}&team=Florida%20State`
    );

    // Post-Season
    let postSeason = axios.get(
      `https://api.collegefootballdata.com/games?year=${year}&seasonType=postseason&team=Florida%20State`
    );

    // Merge All Games into Single Array
    let result = [];
    Promise.all([regularSeason, postSeason])
      .then(data => {
        data.forEach(game => {
          result = [...result, ...game.data];
        });

        // Get All Data for Schedule Page
        fetchTeamInfo(result);
        fetchSeasonWins(result);
        fetchSeasonLosses(result);
        fetchHomeWins(result);
        fetchHomeLosses(result);
        fetchAwayWins(result);
        fetchAwayLosses(result);
        fetchConferenceWins(result);
        fetchConferenceLosses(result);

        dispatch({
          type: GET_GAMES,
          payload: result
        });
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const fetchTeamInfo = async gameInfo => {
    // Create Array of Opposing Teams
    let opposingTeams = gameInfo.map(team => {
      return team.home_team === 'Florida State'
        ? team.away_team
        : team.home_team;
    });

    try {
      // Get All Teams in CFB
      let teamInfo = await axios.get(
        `https://api.collegefootballdata.com/teams`
      );

      // Filter Team Info from Opposing Teams to Get Logos
      let opposingTeamInfo = teamInfo.data.filter(team =>
        opposingTeams.includes(team.school)
      );

      dispatch({
        type: GET_TEAM_INFO,
        payload: opposingTeamInfo
      });
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSeasonWins = games => {
    let wins = 0;

    games.forEach(game => {
      if (
        (game.home_team === 'Florida State' &&
          game.home_points > game.away_points) ||
        (game.away_team === 'Florida State' &&
          game.home_points < game.away_points)
      ) {
        wins++;
      }
    });

    dispatch({
      type: SET_SEASON_WINS,
      payload: wins
    });
  };

  const fetchSeasonLosses = games => {
    let losses = 0;

    games.forEach(game => {
      if (
        (game.home_team === 'Florida State' &&
          game.home_points < game.away_points) ||
        (game.away_team === 'Florida State' &&
          game.home_points > game.away_points)
      ) {
        losses++;
      }
    });

    dispatch({
      type: SET_SEASON_LOSSES,
      payload: losses
    });
  };

  const fetchHomeWins = games => {
    let homeWins = 0;

    games.forEach(game => {
      if (
        game.home_team === 'Florida State' &&
        game.home_points > game.away_points
      ) {
        homeWins++;
      }
    });

    dispatch({
      type: SET_HOME_WINS,
      payload: homeWins
    });
  };

  const fetchHomeLosses = games => {
    let homeLosses = 0;

    games.forEach(game => {
      if (
        game.home_team === 'Florida State' &&
        game.home_points < game.away_points
      ) {
        homeLosses++;
      }
    });

    dispatch({
      type: SET_HOME_LOSSES,
      payload: homeLosses
    });
  };

  const fetchAwayWins = games => {
    let awayWins = 0;

    games.forEach(game => {
      if (
        game.away_team === 'Florida State' &&
        game.home_points < game.away_points
      ) {
        awayWins++;
      }
    });

    dispatch({
      type: SET_AWAY_WINS,
      payload: awayWins
    });
  };

  const fetchAwayLosses = games => {
    let awayLosses = 0;

    games.forEach(game => {
      if (
        game.away_team === 'Florida State' &&
        game.home_points > game.away_points
      ) {
        awayLosses++;
      }
    });

    dispatch({
      type: SET_AWAY_LOSSES,
      payload: awayLosses
    });
  };

  const fetchConferenceWins = games => {
    let conferenceWins = 0;

    games.forEach(game => {
      // eslint-disable-next-line default-case
      if (
        (game.home_team === 'Florida State' &&
          game.away_conference === 'ACC' &&
          game.home_points > game.away_points) ||
        (game.away_team === 'Florida State' &&
          game.home_conference === 'ACC' &&
          game.away_points > game.home_points)
      ) {
        conferenceWins++;
      }
    });

    dispatch({
      type: SET_CONFERENCE_WINS,
      payload: conferenceWins
    });
  };

  const fetchConferenceLosses = games => {
    let conferenceLosses = 0;

    games.forEach(game => {
      if (
        (game.home_team === 'Florida State' &&
          game.away_conference === 'ACC' &&
          game.home_points < game.away_points) ||
        (game.away_team === 'Florida State' &&
          game.home_conference === 'ACC' &&
          game.away_points < game.home_points)
      ) {
        conferenceLosses++;
      }
    });

    dispatch({
      type: SET_CONFERENCE_LOSSES,
      payload: conferenceLosses
    });
  };

  const setYear = year => {
    dispatch({
      type: SET_YEAR,
      payload: Number(year)
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GamesContext.Provider
      value={{
        games: state.games,
        teamInfo: state.teamInfo,
        seasonWins: state.seasonWins,
        seasonLosses: state.seasonLosses,
        homeWins: state.homeWins,
        homeLosses: state.homeLosses,
        awayWins: state.awayWins,
        awayLosses: state.awayLosses,
        conferenceWins: state.conferenceWins,
        conferenceLosses: state.conferenceLosses,
        setYear: setYear,
        loading: state.loading
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesState;

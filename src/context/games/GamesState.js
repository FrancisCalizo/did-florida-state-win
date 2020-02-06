import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GamesContext from './gamesContext';
import GamesReducer from './gamesReducer';
import {
  GET_GAMES,
  GET_TEAMINFO,
  SET_SEASONWINS,
  SET_SEASONLOSSES,
  SET_LOADING
} from '../types';

const GamesState = props => {
  const initialState = {
    games: [],
    teamInfo: [],
    seasonWins: 0,
    seasonLosses: 0,
    loading: false
  };

  const [state, dispatch] = useReducer(GamesReducer, initialState);

  useEffect(() => {
    (async function getData() {
      await fetchGames(2019);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        fetchTeamInfo(result);
        fetchSeasonWins(result);
        fetchSeasonLosses(result);
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
        type: GET_TEAMINFO,
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
      type: SET_SEASONWINS,
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
      type: SET_SEASONLOSSES,
      payload: losses
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
        loading: state.loading
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesState;

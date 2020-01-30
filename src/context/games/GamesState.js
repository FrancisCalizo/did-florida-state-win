import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GamesContext from './gamesContext';
import GamesReducer from './gamesReducer';
import { GET_GAMES, SET_LOADING } from '../types';

const GamesState = props => {
  const initialState = {
    games: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GamesReducer, initialState);

  useEffect(() => {
    fetchGames(2019);
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

    let result = [];
    Promise.all([regularSeason, postSeason])
      .then(data => {
        data.forEach(game => {
          result = [...result, ...game.data];
        });
        dispatch({
          type: GET_GAMES,
          payload: result
        });
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GamesContext.Provider
      value={{
        games: state.games,
        loading: state.loading
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesState;

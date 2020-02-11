import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GameDetailsContext from './gameDetailsContext';
import GameDetailsReducer from './gameDetailsReducer';
import { GET_GAME_INFORMATION } from '../types';

const GameDetailsState = props => {
  const initialState = {
    gameInformation: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GameDetailsReducer, initialState);

  const fetchGameInformation = async gameId => {
    console.log(`Game Id ${gameId}`);
  };

  return (
    <GameDetailsContext.Provider
      value={{
        gameInformation: state.gameInformation,
        fetchGameInformation: fetchGameInformation,
        loading: state.loading
      }}
    >
      {props.children}
    </GameDetailsContext.Provider>
  );
};

export default GameDetailsState;

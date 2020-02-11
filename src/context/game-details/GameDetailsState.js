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

  return (
    <GameDetailsContext
      value={{
        gameInformation: state.gameInformation,
        loading: state.loading
      }}
    >
      {props.children}
    </GameDetailsContext>
  );
};

export default GameDetailsState;

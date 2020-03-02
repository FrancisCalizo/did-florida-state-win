import React, { useReducer } from 'react';
import axios from 'axios';
import DidWeWinContext from './didWeWinContext';
import DidWeWinReducer from './didWeWinReducer';
import {} from '../types';

const DidWeWinState = props => {
  const initialState = {
    currentDate: null
  };

  const [state, dispatch] = useReducer(DidWeWinReducer, initialState);

  return (
    <DidWeWinContext.Provider
      value={{
        currentDate: state.currentDate
      }}
    >
      {props.children}
    </DidWeWinContext.Provider>
  );
};

export default DidWeWinState;

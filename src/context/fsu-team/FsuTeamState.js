import React, { useReducer } from 'react';
import axios from 'axios';
import FsuTeamContext from './fsuTeamContext';
import FsuTeamReducer from './fsuTeamReducer';
import { GET_FSU_TEAM_INFO } from '../types';

const FsuTeamState = props => {
  const initialState = {
    fsuTeamInfo: {}
  };

  const [state, dispatch] = useReducer(FsuTeamReducer, initialState);

  const fetchFsuTeamInfo = async setLoading => {
    try {
      // Get All Teams in CFB
      let teamInfo = await axios.get(
        `https://api.collegefootballdata.com/teams`
      );

      // Filter Team Info to get FSU
      let fsuTeamInfo = teamInfo.data.filter(
        team => team.school === 'Florida State'
      )[0];

      dispatch({
        type: GET_FSU_TEAM_INFO,
        payload: fsuTeamInfo
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FsuTeamContext.Provider
      value={{
        fsuTeamInfo: state.fsuTeamInfo,
        fetchFsuTeamInfo: fetchFsuTeamInfo
      }}
    >
      {props.children}
    </FsuTeamContext.Provider>
  );
};

export default FsuTeamState;

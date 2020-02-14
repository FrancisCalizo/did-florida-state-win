import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import FsuTeamContext from './fsuTeamContext';
import FsuTeamReducer from './fsuTeamReducer';
import { GET_FSU_TEAM_INFO } from '../types';

const FsuTeamState = props => {
  const initialState = {
    fsuTeamInfo: []
  };

  const [state, dispatch] = useReducer(FsuTeamReducer, initialState);

  useEffect(() => {
    fetchFsuTeamInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFsuTeamInfo = async () => {
    try {
      // Get All Teams in CFB
      let teamInfo = await axios.get(
        `https://api.collegefootballdata.com/teams`
      );

      // Filter Team Info to get FSU
      let fsuTeamInfo = teamInfo.data.filter(
        team => team.school === 'Florida State'
      );

      dispatch({
        type: GET_FSU_TEAM_INFO,
        payload: fsuTeamInfo
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FsuTeamContext.Provider
      value={{
        fsuTeamInfo: state.fsuTeamInfo
      }}
    >
      {props.children}
    </FsuTeamContext.Provider>
  );
};

export default FsuTeamState;

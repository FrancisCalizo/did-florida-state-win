import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import FsuTeamContext from './fsuTeamContext';
import FsuTeamReducer from './fsuTeamReducer';
import { GET_FSU_TEAM_INFO, SET_LOADING } from '../types';

const FsuTeamState = props => {
  const initialState = {
    fsuTeamInfo: {},
    loading: false
  };

  const [state, dispatch] = useReducer(FsuTeamReducer, initialState);

  // useEffect(() => {
  //   fetchFsuTeamInfo();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const fetchFsuTeamInfo = async () => {
    setLoading();

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
    } catch (err) {
      console.error(err);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <FsuTeamContext.Provider
      value={{
        fsuTeamInfo: state.fsuTeamInfo,
        loading: state.loading,
        fetchFsuTeamInfo: fetchFsuTeamInfo
      }}
    >
      {props.children}
    </FsuTeamContext.Provider>
  );
};

export default FsuTeamState;

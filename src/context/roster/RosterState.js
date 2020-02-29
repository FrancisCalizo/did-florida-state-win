import React, { useReducer } from 'react';
import axios from 'axios';
import RosterContext from './rosterContext';
import RosterReducer from './rosterReducer';
import { GET_ROSTER_INFO, NO_ROSTER_INFO_AVAILABLE, SET_YEAR } from '../types';

const RosterState = props => {
  const initialState = {
    year: 2019,
    roster: [],
    noRosterInfoAvailable: false
  };

  const [state, dispatch] = useReducer(RosterReducer, initialState);

  const fetchRosterInfo = async year => {
    try {
      // Get Roster by year
      let rosterInfo = await axios.get(
        `https://api.collegefootballdata.com/roster?team=Florida%20State&year=${year}`
      );

      // Filter out null players
      rosterInfo = rosterInfo.data.filter(
        player => player.first_name && player.last_name !== null
      );

      // Sort by Jersey Number
      let res = rosterInfo.sort((a, b) => {
        return (
          (a.jersey === null) - (b.jersey === null) ||
          +(a.jersey > b.jersey) ||
          -(a.jersey < b.jersey)
        );
      });

      if (res.length === 0 || res === undefined) {
        dispatch({
          type: NO_ROSTER_INFO_AVAILABLE
        });
      } else {
        dispatch({
          type: GET_ROSTER_INFO,
          payload: res
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const setYear = year => {
    dispatch({
      type: SET_YEAR,
      payload: Number(year)
    });
  };

  return (
    <RosterContext.Provider
      value={{
        year: state.year,
        roster: state.roster,
        noRosterInfoAvailable: state.noRosterInfoAvailable,
        fetchRosterInfo: fetchRosterInfo,
        setYear: setYear
      }}
    >
      {props.children}
    </RosterContext.Provider>
  );
};

export default RosterState;

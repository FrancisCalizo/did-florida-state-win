import React, { useReducer } from 'react';
import axios from 'axios';
import RosterContext from './rosterContext';
import RosterReducer from './rosterReducer';
import {
  GET_ROSTER_INFO,
  CLEAR_ROSTER_INFO,
  NO_ROSTER_INFO_AVAILABLE
} from '../types';

const RosterState = props => {
  const initialState = {
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

      // Sort by Jersey Number
      let res = rosterInfo.data.sort((a, b) => {
        console.log(a.jersey, b.jersey);
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

  return (
    <RosterContext.Provider
      value={{
        roster: state.roster,
        noRosterInfoAvailable: state.noRosterInfoAvailable,
        fetchRosterInfo: fetchRosterInfo
      }}
    >
      {props.children}
    </RosterContext.Provider>
  );
};

export default RosterState;

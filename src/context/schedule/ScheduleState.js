import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import ScheduleContext from './scheduleContext';
import ScheduleReducer from './scheduleReducer';
import { GET_SCHEDULE, SET_LOADING } from '../types';

const ScheduleState = props => {
  const initialState = {
    schedule: [],
    loading: false
  };

  const [state, dispatch] = useReducer(ScheduleReducer, initialState);

  useEffect(() => {
    fetchSchedule(2013);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSchedule = year => {
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
        data.forEach(schedule => {
          result = [...result, ...schedule.data];
        });
        dispatch({
          type: GET_SCHEDULE,
          payload: result
        });
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ScheduleContext.Provider
      value={{
        schedule: state.schedule,
        loading: state.loading
      }}
    >
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleState;

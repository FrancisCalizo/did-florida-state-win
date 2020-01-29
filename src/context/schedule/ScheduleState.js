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
    fetchSchedule(2019);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSchedule = async year => {
    setLoading();

    let res = await axios.get(
      `https://api.collegefootballdata.com/games?year=${year}&team=Florida%20State`
    );

    console.log(res.data);
    dispatch({
      type: GET_SCHEDULE,
      payload: res.data
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

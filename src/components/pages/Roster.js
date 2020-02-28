import React, { useEffect, useContext } from 'react';
import RosterContext from '../../context/roster/rosterContext';

const Roster = () => {
  const rosterContext = useContext(RosterContext);
  const { roster, noRosterInfoAvailable, fetchRosterInfo } = rosterContext;

  useEffect(() => {
    fetchRosterInfo(2019);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Here is the Roster Page</h1>
    </div>
  );
};

export default Roster;

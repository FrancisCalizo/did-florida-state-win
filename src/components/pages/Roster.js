import React, { useEffect, useContext } from 'react';
import RosterDropdown from '../layout/RosterDropdown';
import RosterItem from '../players/RosterItem';

import RosterContext from '../../context/roster/rosterContext';

const Roster = () => {
  const rosterContext = useContext(RosterContext);
  const {
    year,
    roster,
    noRosterInfoAvailable,
    fetchRosterInfo
  } = rosterContext;

  useEffect(() => {
    fetchRosterInfo(year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  return (
    <div className="container">
      <RosterDropdown />
      <RosterItem roster={roster} />
    </div>
  );
};

export default Roster;

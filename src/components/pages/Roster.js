import React, { useEffect, useContext } from 'react';
import RosterDropdown from '../layout/RosterDropdown';

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
    <div>
      <RosterDropdown />
    </div>
  );
};

export default Roster;

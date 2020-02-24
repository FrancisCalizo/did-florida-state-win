import React from 'react';

const TeamStats = ({ gameInfo, gameStatsHome, gameStatsAway }) => {
  return (
    <div>
      <div className="max-w-container my-4 mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-gray-700 py-4">
          Team Statistics
        </h2>
        <table className="table-auto my-4 mx-auto ">
          <thead>
            <tr>
              <th className="px-8 py-2"></th>
              <th className="px-8 py-2 text-xs">{gameInfo.away_team}</th>
              <th className="px-8 py-2 text-xs">{gameInfo.home_team}</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="px-8 py-2">Total Offense</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-8 py-2">Total Yards</td>
              <td className="border px-8 py-2 text-center">1</td>
              <td className="border px-8 py-2 text-center">2</td>
            </tr>
            <tr>
              <td className="border px-8 py-2">Posession Time</td>
              <td className="border px-8 py-2 text-center">1</td>
              <td className="border px-8 py-2 text-center">2</td>
            </tr>
            <tr>
              <td className="border px-8 py-2">First Downs</td>
              <td className="border px-8 py-2 text-center">1</td>
              <td className="border px-8 py-2 text-center">2</td>
            </tr>
            <tr>
              <td className="border px-8 py-2">Turnovers</td>
              <td className="border px-8 py-2 text-center">1</td>
              <td className="border px-8 py-2 text-center">2</td>
            </tr>
            <tr>
              <td className="border px-8 py-2">Total Penalty Yards</td>
              <td className="border px-8 py-2 text-center">1</td>
              <td className="border px-8 py-2 text-center">2</td>
            </tr>
            <tr>
              <td className="border px-8 py-2">Fumbles Lost</td>
              <td className="border px-8 py-2 text-center">1</td>
              <td className="border px-8 py-2 text-center">2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamStats;

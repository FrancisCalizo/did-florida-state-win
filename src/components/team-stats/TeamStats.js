import React from 'react';

const TeamStats = ({ gameStatsHome, gameStatsAway, loading }) => {
  if (loading || !gameStatsHome.stats || !gameStatsAway.stats) {
    return <h1 className="text-3xl">Loading...</h1>;
  } else {
    return (
      <div>
        <div className="max-w-container my-4 mx-auto">
          <h2 className="text-3xl font-bold border-b-4 border-gray-700 py-4">
            Team Statistics
          </h2>
          {/* ------------------------------- Table 1 ------------------------------- */}
          <table className="table-fixed mt-4 mb-2 mx-auto">
            <thead>
              <tr>
                <th className="w-2/3 py-2"></th>
                <th className="px-8 text-sm">{gameStatsAway.school}</th>
                <th className="px-8 text-sm">{gameStatsHome.school}</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="py-2 text-left">Total Offense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-2">Total Yards</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'totalYards'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'totalYards'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Posession Time</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'possessionTime'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'possessionTime'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">First Downs</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'firstDowns'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'firstDowns'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Turnovers</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'turnovers'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'turnovers'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Total Penalties - Yards</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'totalPenaltiesYards'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'totalPenaltiesYards'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Fumbles (lost)</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'fumblesLost'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'fumblesLost'
                    )[0].stat
                  }
                </td>
              </tr>
            </tbody>
          </table>
          {/* ------------------------------- Table 2 ------------------------------- */}
          <table className="table-fixed mb-2 mx-auto">
            <thead>
              <tr>
                <th className="w-2/3 py-2"></th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsAway.school}
                </th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsHome.school}
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="py-2 text-left">Rushing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-2">Rushing Yards</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'rushingYards'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'rushingYards'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Rushing Attempts</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'rushingAttempts'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'rushingAttempts'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Avg. Per Attempt</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'yardsPerRushAttempt'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'yardsPerRushAttempt'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Rushing TDs</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'rushingTDs'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'rushingTDs'
                    )[0].stat
                  }
                </td>
              </tr>
            </tbody>
          </table>
          {/* ------------------------------- Table 3 ------------------------------- */}
          <table className="table-fixed mb-2 mx-auto">
            <thead>
              <tr>
                <th className="w-2/3 py-2"></th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsAway.school}
                </th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsHome.school}
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="py-2 text-left">Passing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-2">Passing Yards</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'netPassingYards'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'netPassingYards'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2"> Completions - Attempts</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'completionAttempts'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'completionAttempts'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Yards Per Pass</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'yardsPerPass'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'yardsPerPass'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Interceptions</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'interceptions'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'interceptions'
                    )[0].stat
                  }
                </td>
              </tr>
            </tbody>
          </table>
          {/* ------------------------------- Table 4 ------------------------------- */}
          <table className="table-fixed mb-2 mx-auto">
            <thead>
              <tr>
                <th className="w-2/3 py-2"></th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsAway.school}
                </th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsHome.school}
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="py-2 text-left">Punting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-2">Punt Returns</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'puntReturns'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'puntReturns'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2"> Punt Return Yards</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'puntReturnYards'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'puntReturnYards'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Punt Return TDs</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'puntReturnTDs'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'puntReturnTDs'
                    )[0].stat
                  }
                </td>
              </tr>
            </tbody>
          </table>
          {/* ------------------------------- Table 5 ------------------------------- */}
          <table className="table-fixed mb-2 mx-auto">
            <thead>
              <tr>
                <th className="w-2/3 py-2"></th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsAway.school}
                </th>
                <th className="px-8 py-2 text-sm invisible">
                  {gameStatsHome.school}
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="py-2 text-left">Kickoffs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-2">Kick Returns</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'kickReturns'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'kickReturns'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Kick Return Yards</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'kickReturnYards'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'kickReturnYards'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Kick Return TDs</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'kickReturnTDs'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'kickReturnTDs'
                    )[0].stat
                  }
                </td>
              </tr>
            </tbody>
          </table>
          {/* ------------------------------- Table 6 ------------------------------- */}
          <table className="table-fixed mt-4 mb-2 mx-auto">
            <thead>
              <tr>
                <th className="w-2/3 py-2"></th>
                <th className="px-8 text-sm invisible">
                  {gameStatsAway.school}
                </th>
                <th className="px-8 text-sm invisible">
                  {gameStatsHome.school}
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="py-2 text-left">Defense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-2">Tackles</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'tackles'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'tackles'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Tackles For Loss</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'tacklesForLoss'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'tacklesForLoss'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Fumbles</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'totalFumbles'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'totalFumbles'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Fumbles Recovered</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'fumblesRecovered'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'fumblesRecovered'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Sacks</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'sacks'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'sacks'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Passes Deflected</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'passesDeflected'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'passesDeflected'
                    )[0].stat
                  }
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-2">Defensive TDs</td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsAway.stats.filter(
                      stat => stat.category === 'defensiveTDs'
                    )[0].stat
                  }
                </td>
                <td className="border px-8 py-2 text-center">
                  {
                    gameStatsHome.stats.filter(
                      stat => stat.category === 'defensiveTDs'
                    )[0].stat
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default TeamStats;

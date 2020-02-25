import React from 'react';

const PlayByPlay = ({ gamePlays, loading }) => {
  if (loading || !gamePlays) {
    return <h1 className="text-3xl">Loading...</h1>;
  } else {
    return (
      <div className="max-w-container my-4 mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-gray-700 py-4">
          Play-By-Play
        </h2>
        <table className="table-fixed mt-4 mb-2 mx-auto w-full">
          <thead>
            <tr>
              <th className="w-1/3 py-2 text-left">Sample</th>
              <th className="w-1/3 px-8 text-sm"></th>
              <th className="w-1/3 px-8 text-sm"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-8 py-2">Total Yards</td>
              <td className="border px-8 py-2 text-center">Sample</td>
              <td className="border px-8 py-2 text-center">Sample</td>
            </tr>
            {gamePlays
              .filter(gamePlay => gamePlay.period === 1)
              .map(gamePlay => {
                return (
                  <tr key={gamePlay.id}>
                    <td className="border px-8 py-2">{`${gamePlay.clock.minutes}:${gamePlay.clock.seconds}`}</td>
                    <td className="border px-8 py-2 text-center">Sample</td>
                    <td className="border px-8 py-2 text-center">Sample</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default PlayByPlay;

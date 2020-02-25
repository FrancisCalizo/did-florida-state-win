import React, { useState } from 'react';

const PlayByPlay = ({ gamePlays, loading }) => {
  const [currentTab, setCurrentTab] = useState(1);

  const renderTab = () => {
    switch (true) {
      case currentTab === 1:
        return gamePlays
          .filter(gamePlay => gamePlay.period === 1)
          .map(gamePlay => {
            return (
              <tr key={gamePlay.id}>
                <td className="border px-8 py-2">{`${gamePlay.clock.minutes}:${gamePlay.clock.seconds}`}</td>
                <td className="border px-8 py-2 text-center">Sample</td>
                <td className="border px-8 py-2 text-center">Sample</td>
              </tr>
            );
          });
      case currentTab === 2:
        return <h1 className="text-6xl">Failed to Load</h1>;
      case currentTab === 3:
        return <h1 className="text-6xl">Failed to Load</h1>;
      case currentTab === 4:
        return <h1 className="text-6xl">Failed to Load</h1>;
      default:
        return <h1 className="text-6xl">Failed to Load</h1>;
    }
  };

  const handleClick = tab => {
    setCurrentTab(tab);
  };

  if (loading || !gamePlays) {
    return <h1 className="text-3xl">Loading...</h1>;
  } else {
    return (
      <div className="max-w-container my-4 mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-gray-700 py-4">
          Play-By-Play
        </h2>
        <ul className="flex border-b justify-center">
          <li className="-mb-px mr-1 text-lg">
            <button
              className={`font-semibold uppercase bg-white inline-block py-2 px-4 text-black focus:outline-none hover:bg-gold-500 hover:text-white ${currentTab ===
                1 && 'active-tab'}`}
              onClick={() => handleClick(1)}
            >
              1st
            </button>
          </li>
          <li className="-mb-px mr-1 text-lg">
            <button
              className={`font-semibold uppercase bg-white inline-block py-2 px-4 text-black focus:outline-none hover:bg-gold-500 hover:text-white ${currentTab ===
                2 && 'active-tab'}`}
              onClick={() => handleClick(2)}
            >
              2nd
            </button>
          </li>
          <li className="-mb-px mr-1 text-lg">
            <button
              className={`font-semibold uppercase bg-white inline-block py-2 px-4 text-black focus:outline-none hover:bg-gold-500 hover:text-white ${currentTab ===
                3 && 'active-tab'}`}
              onClick={() => handleClick(3)}
            >
              3rd
            </button>
          </li>
          <li className="-mb-px mr-1 text-lg">
            <button
              className={`font-semibold uppercase bg-white inline-block py-2 px-4 text-black focus:outline-none hover:bg-gold-500 hover:text-white ${currentTab ===
                4 && 'active-tab'}`}
              onClick={() => handleClick(4)}
            >
              4th
            </button>
          </li>
        </ul>
        <table className="table-fixed mt-4 mb-2 mx-auto w-full">
          <thead>
            <tr>
              <th className="w-1/3 py-2 text-left">Sample</th>
              <th className="w-1/3 px-8 text-sm"></th>
              <th className="w-1/3 px-8 text-sm"></th>
            </tr>
          </thead>
          <tbody>{renderTab()}</tbody>
        </table>
      </div>
    );
  }
};

export default PlayByPlay;

import React, { useState } from 'react';
import Loading from '../layout/Loading';

const PlayByPlay = ({ gamePlays, loading }) => {
  const [currentTab, setCurrentTab] = useState(1);

  const renderTab = tab => {
    return gamePlays
      .filter(gamePlay => gamePlay.period === tab)
      .map(gamePlay => {
        return (
          <tr key={gamePlay.id}>
            <td className="border pl-2 py-2 text-left hidden sm:table-cell">{`${
              gamePlay.clock.minutes
            }:${
              gamePlay.clock.seconds < 10
                ? '0' + gamePlay.clock.seconds
                : gamePlay.clock.seconds
            }`}</td>
            <td className="border pl-2 py-2 text-left">{`${
              gamePlay.offense
            } ball --
                  ${getDown(gamePlay.down)} and ${gamePlay.distance}
                  at ${
                    gamePlay.yard_line > 50
                      ? gamePlay.offense.replace(/\s+/g, '') +
                        String(50 - (gamePlay.yard_line - 50))
                      : gamePlay.defense.replace(/\s+/g, '') +
                        gamePlay.yard_line
                  }`}</td>
            <td className="border pl-2 py-2 text-left">{gamePlay.play_text}</td>
          </tr>
        );
      });
  };

  const getDown = down => {
    switch (true) {
      case down === 1:
        return '1st';
      case down === 2:
        return '2nd';
      case down === 3:
        return '3rd';
      case down === 4:
        return '4th';
      default:
        return '1st';
    }
  };

  const handleClick = tab => {
    setCurrentTab(tab);
  };

  if (loading || !gamePlays || !currentTab) {
    return <Loading />;
  } else {
    return (
      <div className="mx-12">
        <div className="max-w-container py-4 mx-auto">
          <h2 className="text-3xl font-bold border-b-4 border-gray-700 py-4">
            Play-By-Play
          </h2>
          <ul className="flex border-b justify-center mt-4">
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
                <th className="hidden sm:table-cell sm:w-1/12 pl-2 text-sm text-left">
                  Time
                </th>
                <th className="w-2/5 pl-2 text-sm text-left">Possesion</th>
                <th className="w-auto pl-2 text-sm text-left">
                  Play Description
                </th>
              </tr>
            </thead>
            <tbody>{renderTab(currentTab)}</tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default PlayByPlay;

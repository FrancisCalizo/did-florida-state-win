import React, { useContext } from 'react';
import GamesContext from '../../context/games/gamesContext';

const SeasonDropdown = () => {
  const gamesContext = useContext(GamesContext);
  const { setYear } = gamesContext;

  // Populate Years in Dropdown
  let years = [];
  for (let i = new Date().getFullYear(); i >= 1980; i--) {
    years.push(i);
  }

  const handleChange = e => {
    setYear(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-8 mx-8 bg-garnet-500 py-3 rounded-t border-4 border-black">
      <div className="inline-block relative w-24 lg:w-32 text-base md:text-lg lg:text-xl mr-4">
        <select
          className="block appearance-none w-full bg-transparent border-b-4
          text-white block border-gray-400 hover:border-gray-500 px-4 py-3 pr-8
          rounded shadow leading-tight focus:outline-none cursor-pointer"
          onChange={handleChange}
          defaultValue="2019"
        >
          {years.map(year => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
          <svg
            className="fill-current h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="mr-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold ">
          Season Schedule
        </h1>
      </div>
    </div>
  );
};

export default SeasonDropdown;

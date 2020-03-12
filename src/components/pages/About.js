import React, { useState } from 'react';

const About = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      title: 'Updates',
      body: 'Get updates on if your beloved noles won or miserably lost.'
    },
    {
      id: 2,
      title: 'Schedules',
      body: 'View future and past schedules by year.'
    },
    {
      id: 3,
      title: 'Game Details',
      body:
        'Box scores, team stats, and play-by-play information for each game.'
    },
    {
      id: 4,
      title: 'Roster',
      body: 'View rosters by year.'
    },
    {
      id: 5,
      title: 'Countdown',
      body:
        'See when the next game is being played by your noles with an official gameday countdown.'
    },
    {
      id: 6,
      title: 'Code',
      body:
        'See the code for this website by checking out the GitHub Icon on the top right of the footer.'
    }
  ]);

  return (
    <div className="-mt-2">
      <div className="bg-fixed bg-chief border-b-8 border-black">
        <div className="flex justify-center items-center h-full">
          <div className="py-48">
            <h1 className="text-white font-bold text-4xl md:text-5xl">
              Did Florida State Win?
            </h1>
            <h3 className="text-white text-lg md:text-xl text-center">
              Scores | Updates | Roster
            </h3>
          </div>
        </div>
      </div>
      <div className=" mb-24">
        <div className="flex justify-center">
          <h2 className="uppercase inline-block text-center font-bold mt-8 mb-6 bg-gold-500 px-8 py-1 rounded text-lg sm:text-2xl md:text-4xl border-2 border-black">
            For the fans of Florida State Football
          </h2>
        </div>
        <div className="flex flex-wrap justify-center mx-6">
          {card.map(info => {
            return (
              <div className="w-full sm:w-1/2 lg:w-1/3 h-48 my-4" key={info.id}>
                <div
                  className="text-center rounded border border-dark-200
              shadow-2xl bg-white h-full px-10 mx-6"
                >
                  <h3>{info.title}</h3>
                  <p>{info.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

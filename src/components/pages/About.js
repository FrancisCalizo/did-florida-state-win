import React, { useState } from 'react';

const About = () => {
  const [card, setCard] = useState([
    {
      title: 'Updates',
      body: 'Get updates on if your beloved noles won or miserably lost.'
    },
    {
      title: 'Schedules',
      body: 'View future and past schedules by year.'
    },
    {
      title: 'Game Details',
      body:
        'Box scores, team stats, and play-by-play information for each game.'
    },
    {
      title: 'Roster',
      body: 'View rosters by year.'
    },
    {
      title: 'Countdown',
      body:
        'See when the next game is being played by your noles with an official gameday countdown.'
    },
    {
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
            <h1 className="text-white font-bold text-5xl">
              Did Florida State Win?
            </h1>
            <h3 className="text-white text-xl text-center">
              Scores | Updates | Roster
            </h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center font-bold text-4xl">
          Provided for the fans of Florida State Football:
        </h2>
        <div className="flex flex-wrap justify-center">
          {card.map(info => {
            return (
              <div className="w-1/3 h-48 my-4">
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

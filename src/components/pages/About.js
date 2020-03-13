import React, { useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Spring } from 'react-spring/renderprops';

const About = () => {
  const [card] = useState([
    {
      id: 1,
      title: 'Updates',
      body:
        'View current updates on if your beloved noles were victorious or lost miserably.'
    },
    {
      id: 2,
      title: 'Schedules',
      body: 'View schedules of years past and present.'
    },
    {
      id: 3,
      title: 'Game Details',
      body: 'Analyze box scores and team stats for each game.'
    },
    {
      id: 4,
      title: 'Play-By-Play',
      body: 'View play-by-play information for each game from start to finish.'
    },
    {
      id: 5,
      title: 'Roster',
      body:
        'View team rosters by year with various player information provided.'
    },
    {
      id: 6,
      title: 'Countdown',
      body: "See when the noles' game is with an official gameday countdown."
    }
  ]);

  return (
    <div className="-mt-2">
      <LazyLoadComponent>
        <div className="sm:bg-fixed bg-chief border-b-8 border-black bg-black">
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
      </LazyLoadComponent>
      <div className="max-w-container mb-32 mx-auto">
        <div className="px-12">
          <h2 className="uppercase text-center font-bold mt-8 mb-6 bg-gold-500 px-8 py-1 rounded text-lg sm:text-xl md:text-3xl lg:text-4xl border-2 border-black">
            For the fans of Florida State Football
          </h2>
        </div>
        <div className="flex flex-wrap justify-center mx-6">
          {card.map((info, idx) => {
            return (
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 300 * idx, duration: 1000 }}
                key={info.id}
              >
                {props => (
                  <div
                    className="about-card w-full md:w-1/2 lg:w-1/3 h-72 md:h-80 my-4"
                    key={info.id}
                    style={props}
                  >
                    <div
                      className="text-center rounded border border-dark-200
              shadow-2xl bg-white h-full mx-6"
                    >
                      <div className="h-40"></div>
                      <h3 className="font-bold uppercase text-lg bg-gold-500 box-border py-1">
                        {info.title}
                      </h3>
                      <div className="text-base sm:text-lg md:text-base px-8 my-3 text-center md:text-left">
                        <p>{info.body}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Spring>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useContext } from 'react';
import DidWeWinContext from '../../context/did-we-win/didWeWinContext';
import Loading from '../layout/Loading';
const Countdown = () => {
  const didWeWinContext = useContext(DidWeWinContext);
  const { countdown, loading } = didWeWinContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex justify-center">
        <div className="inline-block border-2 border-dark-500 bg-white">
          <div className="flex justify-center text-center px-3 pb-4">
            <div>
              <div className="lg:text-6xl lg:px-4 lg:h-20">
                {parseInt(countdown.asDays())}
              </div>
              <div>Days</div>
            </div>
            <div>
              <div className="lg:text-6xl lg:px-4 lg:h-20">:</div>
            </div>
            <div>
              <div className="lg:text-6xl lg:px-4 lg:h-20">
                {countdown._data.hours}
              </div>
              <div>Hours</div>
            </div>
            <div>
              <div className="lg:text-6xl lg:px-4 lg:h-20">:</div>
            </div>
            <div>
              <div className="lg:text-6xl lg:px-4 lg:h-20">
                {countdown._data.minutes}
              </div>
              <div>Minutes</div>
            </div>
            <div>
              <div className="lg:text-6xl lg:px-4 lg:h-20">:</div>
            </div>
            <div>
              <div className="lg:text-6xl lg:px-4 lg:h-20">
                {countdown._data.seconds}
              </div>
              <div>Seconds</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Countdown;

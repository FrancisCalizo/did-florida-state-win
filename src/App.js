import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DidWeWin from './components/pages/DidWeWin';
import About from './components/pages/About';
import Roster from './components/pages/Roster';
import NotFound from './components/pages/NotFound';
import Schedule from './components/pages/Schedule';
import GameDetails from './components/pages/GameDetails';
import Navbar from './components/layout/Navbar';
import UnderNav from './components/layout/UnderNav';

import DidWeWinState from './context/did-we-win/DidWeWinState';
import GamesState from './context/games/GamesState';
import GameDetailsState from './context/game-details/GameDetailsState';
import FsuTeamState from './context/fsu-team/FsuTeamState';
import RosterState from './context/roster/RosterState';

import './styles/app.css';
import './App.css';

function App() {
  return (
    <DidWeWinState>
      <FsuTeamState>
        <GamesState>
          <GameDetailsState>
            <RosterState>
              <Router>
                <div className="bg-gray-200">
                  <Navbar />
                  <UnderNav>
                    <Switch>
                      <Route exact path="/" component={DidWeWin} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/schedule" component={Schedule} />
                      <Route
                        exact
                        path="/gamedetails/:season/:week/:id"
                        component={GameDetails}
                      />
                      <Route exact path="/Roster" component={Roster} />
                      <Route component={NotFound} />
                    </Switch>
                  </UnderNav>
                </div>
              </Router>
            </RosterState>
          </GameDetailsState>
        </GamesState>
      </FsuTeamState>
    </DidWeWinState>
  );
}

export default App;

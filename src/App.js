import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Roster from './components/pages/Roster';
import NotFound from './components/pages/NotFound';
import Schedule from './components/pages/Schedule';
import Navbar from './components/layout/Navbar';

import GamesState from './context/games/GamesState';

import './styles/app.css';
import './App.css';

function App() {
  return (
    <GamesState>
      <Router>
        <div className="bg-gray-200">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/Roster" component={Roster} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GamesState>
  );
}

export default App;

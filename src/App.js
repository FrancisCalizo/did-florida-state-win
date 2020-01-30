import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Schedule from './components/pages/Schedule';

import GamesState from './context/games/GamesState';

import './App.css';

function App() {
  return (
    <GamesState>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/schedule/:year" component={Schedule} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GamesState>
  );
}

export default App;

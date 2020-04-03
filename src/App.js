import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PlayerForm from './app/player/components/PlayerForm'
import PlayerContainer from './app/player/components/playerContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/live" component={ PlayerContainer } />
        <Route path="/panel" component={ PlayerForm } />
      </Router>
    );
  }
}

export default App;
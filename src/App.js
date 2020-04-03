import React, { Component } from 'react';
import './App.css';
import PlayerOneContainer from './app/playerOne/components/playerOneContainer'
import PlayerOneForm from './app/playerOne/components/playerOneForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerOneContainer />
        <PlayerOneForm />
      </div>
    );
  }
}

export default App;

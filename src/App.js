import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import logo from './logo.svg';
import './App.css';
import AbilityScores from './components/abilityScores.js';
import CharacterStats from './components/characterStats.js';
import Initiative from './components/initiative.js';

class App extends Component {
  render() {
    return (
      <Paper>
        <CharacterStats />
        <AbilityScores />
        <Initiative />
      </Paper>
    );
  }
}

export default App;

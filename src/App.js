import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AbilityScores from './components/abilityScores.js';
import CharacterStats from './components/characterStats.js';

class App extends Component {
  render() {
    return (
      <div>
        <CharacterStats />
        <AbilityScores />
      </div>
    );
  }
}

export default App;

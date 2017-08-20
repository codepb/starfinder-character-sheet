import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import './App.css';
import AbilityScores from './components/abilityScores.js';
import CharacterStats from './components/characterStats.js';
import Initiative from './components/initiative.js';
import Armor from './components/armor.js';
import Health from './components/health.js';

class App extends Component {
  render() {
    return (
      <Paper style={{padding: '20px', margin: '5px'}}>
        <Grid container>
          <Grid item>
            <CharacterStats />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <AbilityScores />
          </Grid>
          <Grid item>
            <div style={{margin: '20px'}}>
              <Initiative />
            </div>
            <div style={{margin: '20px'}}>
              <Health />
            </div>
            <div style={{margin: '20px'}}>
              <Armor />
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default App;

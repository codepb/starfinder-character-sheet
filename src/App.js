import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import './App.css';
import AbilityScoresContainer from './containers/abilityScoresContainer.js';
import CharacterStatsContainer from './containers/characterStatsContainer.js';
import InitiativeContainer from './containers/initiativeContainer.js';
import ArmorContainer from './containers/armorContainer.js';
import HealthContainer from './containers/healthContainer.js';

class App extends Component {
  render() {
    return (
      <Paper style={{padding: '20px', margin: '5px'}}>
        <Grid container>
          <Grid item>
            <CharacterStatsContainer />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <AbilityScoresContainer />
          </Grid>
          <Grid item>
            <div style={{margin: '20px'}}>
              <InitiativeContainer />
            </div>
            <div style={{margin: '20px'}}>
              <HealthContainer />
            </div>
            <div style={{margin: '20px'}}>
              <ArmorContainer />
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import './App.css';
import AbilityScoresContainer from './containers/abilityScoresContainer';
import CharacterStatsContainer from './containers/characterStatsContainer';
import InitiativeContainer from './containers/initiativeContainer';
import ArmorContainer from './containers/armorContainer';
import HealthContainer from './containers/healthContainer';
import SkillContainer from './containers/skillContainer';

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
            <div style={{margin: '20px'}}>
              <SkillContainer />
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default App;

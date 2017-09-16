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
import SavingThrowsContainer from './containers/savingThrowContainer';
import AttackBonusContainer from './containers/attackBonusContainer';
import SaveContainer from './containers/saveContainer';
import WeaponsContainer from './containers/weaponsContainer';
import AbilitiesContainer from './containers/abilitiesContainer';
import SpellsContainer from './containers/spellsContainer';
import FeatsContainer from './containers/featsContainer';
import LanguagesContainer from './containers/languagesContainer';
import ExperienceContainer from './containers/experienceContainer';
import WealthContainer from './containers/wealthContainer';
import EquipmentContainer from './containers/equipmentContainer';

class App extends Component {
  render() {
    return (
      <Paper style={{padding: 5, marginTop: 5, marginLeft: 5, marginRight: 5, paddingBottom: 10, width: 'calc(100% - 10px)'}}>
        <SaveContainer />
        <CharacterStatsContainer />
        <Grid container>
          <Grid item>
              <AbilityScoresContainer />
              <SkillContainer />
              <AbilitiesContainer />
              <FeatsContainer />
              <LanguagesContainer />
              <EquipmentContainer />
          </Grid>
          <Grid item>
              <InitiativeContainer />
              <HealthContainer />
              <ArmorContainer />
              <SavingThrowsContainer />
              <AttackBonusContainer />
              <WeaponsContainer />
              <SpellsContainer />
              <ExperienceContainer />
              <WealthContainer />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default App;

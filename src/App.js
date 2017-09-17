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
      <div style={{padding: 5, width: '100%', boxSizing: 'border-box'}}>
        <SaveContainer />
        <div style={{maxWidth: 'calc(100% - 20px)'}}>
        <CharacterStatsContainer/>
        </div>
        <Grid container style={{width: '100%', margin:0}}>
          <Grid item style={{maxWidth: 'calc(100% - 20px)'}}>
              <AbilityScoresContainer />
              <SkillContainer />
              <AbilitiesContainer />
              <FeatsContainer />
              <LanguagesContainer />
              <EquipmentContainer />
          </Grid>
          <Grid item style={{maxWidth: 'calc(100% - 20px)'}}>
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
      </div>
    );
  }
}

export default App;

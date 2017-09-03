import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AbilityScores from '../components/abilityScores';
import * as abilityScoreActions from '../actions/abilityActions'
import AbilityManager from '../models/abilityManager';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';
import races from '../rules/races';
import classes from '../rules/classes';

function getAbilityScoresFromState(currentRace, currentTheme, abilityScores, abilityManager) {
  return {
      [Abilities.STRENGTH]: abilityManager.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, Abilities.STRENGTH),
      [Abilities.DEXTERITY]: abilityManager.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, Abilities.DEXTERITY),
      [Abilities.CONSTITUTION]: abilityManager.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, Abilities.CONSTITUTION),
      [Abilities.INTELLIGENCE]: abilityManager.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, Abilities.INTELLIGENCE),
      [Abilities.WISDOM]: abilityManager.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, Abilities.WISDOM),
      [Abilities.CHARISMA]: abilityManager.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, Abilities.CHARISMA),
  }
}

class AbilityScoresContainer extends Component {
  abilityManager = new AbilityManager();

  render() {
    const {currentRace, currentTheme, currentClass, abilityScores, abilityScoreActions} = this.props;
    const theme = themes[currentTheme];
    const race = races[currentRace];
    const class_ = classes[currentClass];

    return <AbilityScores 
              abilityScores={getAbilityScoresFromState(currentRace, currentTheme, abilityScores, this.abilityManager)}
              canEditDefaultRaceBonus={race.hasUnspecifiedModifiers}
              canEditDefaultThemeBonus={theme.hasUnspecifiedModifiers}
              remainingPointsToSpend={this.abilityManager.getRemainingPointsToSpendFromState(abilityScores)}
              defaultRaceBonus={abilityScores.defaultRaceBonus}
              defaultThemeBonus={abilityScores.defaultThemeBonus}
              keyAbility={class_.keyAbility}
              abilityScoreActions={abilityScoreActions} />;
  }
}

function mapStateToProps(state) {
  return {
    currentRace: state.character.race,
    currentTheme: state.character.theme,
    currentClass: state.character.class,
    abilityScores: state.abilityScores
  }
}

function mapDispatchToProps(dispatch) {
  return {
      abilityScoreActions: bindActionCreators(abilityScoreActions, dispatch)
  };
}

const ConnectedAbilityScoresContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityScoresContainer);

export default ConnectedAbilityScoresContainer;
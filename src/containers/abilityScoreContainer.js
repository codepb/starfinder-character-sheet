import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AbilityScore from '../components/abilityScore';
import * as abilityScoreActions from '../actions/abilityActions'
import AbilityManager from '../models/abilityManager';
import themes from '../rules/themes';
import races from '../rules/races';
import classes from '../rules/classes';

class AbilityScoreContainer extends Component {
  abilityManager = new AbilityManager();

  render() {
    const {currentRace, currentTheme, currentClass, abilityPoints, isDefaultRaceBonus, isDefaultThemeBonus, abilityName, abilityScoreActions} = this.props;
    const theme = themes[currentTheme];
    const race = races[currentRace];
    const class_ = classes[currentClass];
    const abilityScore = this.abilityManager.getAbilityScore(currentRace, currentTheme, abilityPoints, abilityName, isDefaultRaceBonus, isDefaultThemeBonus);

    return <AbilityScore
              canEditDefaultRaceBonus={race.hasUnspecifiedModifiers}
              canEditDefaultThemeBonus={theme.hasUnspecifiedModifiers}
              isDefaultRaceBonus={isDefaultRaceBonus}
              isDefaultThemeBonus={isDefaultThemeBonus}
              isKey={abilityName === class_.keyAbility}
              abilityScoreActions={abilityScoreActions}
              {...abilityScore} />;
  }
}

function mapStateToProps(state, {abilityName}) {
  return {
    currentRace: state.character.race,
    currentTheme: state.character.theme,
    currentClass: state.character.class,
    abilityPoints: state.abilityScores.abilityPoints[abilityName],
    isDefaultRaceBonus: state.abilityScores.defaultRaceBonus === abilityName,
    isDefaultThemeBons: state.abilityScores.defaultThemeBonus === abilityName,
    abilityName: abilityName
  }
}

function mapDispatchToProps(dispatch) {
  return {
      abilityScoreActions: bindActionCreators(abilityScoreActions, dispatch)
  };
}

const ConnectedAbilityScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityScoreContainer);

export default ConnectedAbilityScoreContainer;
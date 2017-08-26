import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AbilityScores from '../components/abilityScores';
import * as abilityScoreActions from '../actions/abilityActions'
import AbilityManager from '../models/abilityManager';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';
import races from '../rules/races';
import classes from '../rules/classes';

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();
  const currentRace = races[state.character.race];
  const currentTheme = themes[state.character.theme];
  const currentClass = classes[state.character.class];
  return {
      abilityScores: getAbilityScoresFromState(state, abilityManager),
      currentRace: state.character.race,
      currentTheme: state.character.theme,
      canEditDefaultRaceBonus: currentRace.hasUnspecifiedModifiers,
      canEditDefaultThemeBonus: currentTheme.hasUnspecifiedModifiers,
      remainingPointsToSpent: abilityManager.getRemainingPointsToSpendFromState(state),
      defaultRaceBonus: state.abilities.defaultRaceBonus,
      defaultThemeBonus: state.abilities.defaultThemeBonus,
      keyAbility: currentClass.keyAbility
  };
}

function getAbilityScoresFromState(state, abilityManager) {
  return {
      [Abilities.STRENGTH]: abilityManager.getAbilityScoreFromState(state, Abilities.STRENGTH),
      [Abilities.DEXTERITY]: abilityManager.getAbilityScoreFromState(state, Abilities.DEXTERITY),
      [Abilities.CONSTITUTION]: abilityManager.getAbilityScoreFromState(state, Abilities.CONSTITUTION),
      [Abilities.INTELLIGENCE]: abilityManager.getAbilityScoreFromState(state, Abilities.INTELLIGENCE),
      [Abilities.WISDOM]: abilityManager.getAbilityScoreFromState(state, Abilities.WISDOM),
      [Abilities.CHARISMA]: abilityManager.getAbilityScoreFromState(state, Abilities.CHARISMA),
  }
}

function mapDispatchToProps(dispatch) {
  return {
      abilityScoreActions: bindActionCreators(abilityScoreActions, dispatch)
  };
}

const AbilityScoresContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityScores);

export default AbilityScoresContainer;
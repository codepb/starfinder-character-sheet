import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as savingThrowActions from '../actions/savingThrowActions';
import AbilityManager from '../models/abilityManager';
import SavingThrowsComponent from '../components/savingThrows';
import savingThrowsEnumeration from '../rules/savingThrows';
import classes from '../rules/classes';

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();
  const savingThrows = {};
  for(let savingThrow in savingThrowsEnumeration) {
      const savingThrowDetails = savingThrowsEnumeration[savingThrow];
      savingThrows[savingThrow] = {
          miscModifier: state.savingThrows[savingThrow].misc,
          abilityModifier: abilityManager.getAbilityScoreFromState(state.character.race, state.character.theme, state.character.abilityScores, savingThrowDetails.associatedAbility).modifier,
          base: classes[state.character.class].savingThrows[savingThrow]
      }
  }
  return {
      savingThrows
  };
}

function mapDispatchToProps(dispatch) {
  return {
      savingThrowActions: bindActionCreators(savingThrowActions, dispatch)
  };
}

const SavingThrowsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SavingThrowsComponent);

export default SavingThrowsContainer;
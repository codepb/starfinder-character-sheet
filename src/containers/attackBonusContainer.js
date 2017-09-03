import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as attackBonusActions from '../actions/attackBonusActions';
import AbilityManager from '../models/abilityManager';
import AttackBonusComponent from '../components/attackBonuses';
import attackBonusEnumeration from '../rules/attackBonuses';
import classes from '../rules/classes';

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();
  const attackBonuses = {};
  for(let attackBonus in attackBonusEnumeration) {
    const ability = attackBonusEnumeration[attackBonus];
    attackBonuses[attackBonus] = {
      miscModifier: state.attackBonuses[attackBonus].misc,
      abilityModifier: abilityManager.getAbilityScoreFromState(state.character.race, state.character.theme, state.abilityScores, ability).modifier,
      baseAttackBonus: classes[state.character.class].baseAttackBonus
    }
  }
  return {
    attackBonuses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attackBonusActions: bindActionCreators(attackBonusActions, dispatch)
  };
}

const AttackBonusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttackBonusComponent);

export default AttackBonusContainer;
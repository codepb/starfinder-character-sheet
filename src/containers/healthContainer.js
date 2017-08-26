import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classes from '../rules/classes';
import * as healthActions from '../actions/healthActions';
import AbilityManager from '../models/abilityManager';
import * as Abilities from '../rules/abilities';
import races from '../rules/races';
import Health from '../components/health';

function mapStateToProps(state) {    
  const abilityManager = new AbilityManager();
    return {
      hitPoints: getHitPointsFromState(state),
      staminaPoints: getStaminaPointsFromState(state, abilityManager),
      resolvePoints: getResolvePointsFromState(state, abilityManager)
    };
}

function getHitPointsFromState(state) {
  const classContribution = classes[state.character.class].hp;
  const raceContribution = races[state.character.race].hp;
  return {
    total: classContribution + raceContribution,
    current: state.currentHealth.hitPoints
  }
}

function getStaminaPointsFromState(state, abilityManager) {
  const classContribution = classes[state.character.class].stamina;
  
  const consitutionModifier = abilityManager.getAbilityScoreFromState(state, Abilities.CONSTITUTION).modifier;
  return {
    total: classContribution + consitutionModifier,
    current: state.currentHealth.staminaPoints
  };
}

function getResolvePointsFromState(state, abilityManager) {
  return {
    total: Math.max(1 + abilityManager.getKeyAbilityScoreFromState(state).modifier, 1),
    current: state.currentHealth.resolvePoints
  };
}

function mapDispatchToProps(dispatch) {
  return {
    healthActions: bindActionCreators(healthActions, dispatch)
  };
}

const HealthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Health);

export default HealthContainer;
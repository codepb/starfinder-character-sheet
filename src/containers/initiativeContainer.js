import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as initiativeActions from '../actions/initiativeActions';
import * as Abilities from '../rules/abilities';
import AbilityManager from '../models/abilityManager';
import Initiative from '../components/initiative';

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();
  return {
      dexterityModifier: 1,// abilityManager.getAbilityScoreFromState(state, Abilities.DEXTERITY).modifier,
      miscInitiative: state.initiative
  };
}

function mapDispatchToProps(dispatch) {
  return {
      initiativeActions: bindActionCreators(initiativeActions, dispatch)
  };
}

const InitiativeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Initiative);

export default InitiativeContainer;
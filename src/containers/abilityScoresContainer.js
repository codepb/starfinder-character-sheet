import React from 'react';
import { connect } from 'react-redux';
import AbilityScores from '../components/abilityScores';
import AbilityScoreContainer from './abilityScoreContainer';
import AbilityManager from '../models/abilityManager';
import * as Abilities from '../rules/abilities';

const abilityManager = new AbilityManager();

const AbilityScoresContainer = ({remainingPointsToSpend}) => {
  const rows = Object.values(Abilities).filter(a => a !== Abilities.UNSPECIFIED).map(a => <AbilityScoreContainer key={a} abilityName={a} />);

  return (
    <AbilityScores
      remainingPointsToSpend={remainingPointsToSpend}>
      {rows}
    </AbilityScores>
  );
};

function mapStateToProps(state) {
  return {
    remainingPointsToSpend: abilityManager.getRemainingPointsToSpendFromState(state.abilityScores)
  }
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedAbilityScoresContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityScoresContainer);

export default ConnectedAbilityScoresContainer;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilityScoreActions from '../actions/abilityScoreActions'
import InitialState from '../reducers/initialState';

class AbilityScore extends Component {
  scoreChange = (ev) => {
    this.props.abilityScoreActions.updateAbilityScore(this.props.abilityScore.name, ev.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor={`Ability-${this.props.abilityScore.name}`}>{this.props.abilityScore.name}</label>
        <input type="number" id={`Ability-${this.props.abilityScore.name}`} value={this.props.abilityScore.score} onChange={this.scoreChange} />
        <span>{this.props.abilityScore.modifier}</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      abilityScoreActions: bindActionCreators(abilityScoreActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AbilityScore);
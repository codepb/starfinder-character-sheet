import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilityScoreActions from '../actions/abilityScoreActions'
import InitialState from '../reducers/initialState';

class AbilityScore extends Component {
  scoreChanged = (ev) => {
    this.props.abilityScoreActions.updateAbilityScore(this.props.abilityScore.name, ev.target.value);
  }

  defaultRacialModifierChanged = (ev) => {
    if(!this.props.isDefaultRacialModifier) {
      this.props.abilityScoreActions.setAsDefaultRacialModifier(this.props.abilityScore.name);
    }
  }

  defaultThemeModifierChanged = (ev) => {
    if(!this.props.isDefaultThemeModifier) {
      this.props.abilityScoreActions.setAsDefaultThemeModifier(this.props.abilityScore.name);
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={`Ability-${this.props.abilityScore.name}`}>{this.props.abilityScore.name}</label>
        <input type="number" id={`Ability-${this.props.abilityScore.name}`} value={this.props.abilityScore.score} onChange={this.scoreChanged} />
        <span>{this.props.abilityScore.modifier}</span>
        <input type="checkbox" checked={this.props.abilityScore.isDefaultRacialModifier} onChange={this.defaultRacialModifierChanged} disabled={!this.props.canEditDefaultRacial}/>
        <input type="checkbox" checked={this.props.abilityScore.isDefaultThemeModifier} onChange={this.defaultThemeModifierChanged} disabled={!this.props.canEditDefaultTheme}/>
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
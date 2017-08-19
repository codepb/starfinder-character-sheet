import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilityScoreActions from '../actions/abilityScoreActions'
import InitialState from '../reducers/initialState';

class AbilityScore extends Component {
  addPoint = (ev) => {
    this.props.abilityScoreActions.addPoint(this.props.abilityScore.name);
  }

  removePoint = (ev) => {
    this.props.abilityScoreActions.removePoint(this.props.abilityScore.name);
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
      <tr>
        <td>{this.props.abilityScore.name}</td>
        <td>{this.props.abilityScore.score}</td>
        <td>{this.props.abilityScore.pointsAssigned}<button onClick={this.addPoint}>+</button><button onClick={this.removePoint}>-</button></td>
        <td>{this.props.abilityScore.racialModifier}</td>
        <td>{this.props.abilityScore.themeModifier}</td>
        <td><input type="checkbox" checked={this.props.abilityScore.isDefaultRacialModifier} onChange={this.defaultRacialModifierChanged} disabled={!this.props.canEditDefaultRacial}/></td>
        <td><input type="checkbox" checked={this.props.abilityScore.isDefaultThemeModifier} onChange={this.defaultThemeModifierChanged} disabled={!this.props.canEditDefaultTheme}/></td>
      </tr>
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
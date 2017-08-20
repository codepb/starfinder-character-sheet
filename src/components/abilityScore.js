import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import { TableCell,  TableRow } from 'material-ui/Table';
import * as abilityScoreActions from '../actions/abilityScoreActions'

class AbilityScore extends Component {
  addPoint = (ev) => {
    this.props.abilityScoreActions.addPoint(this.props.abilityScore.name);
  }

  removePoint = (ev) => {
    this.props.abilityScoreActions.removePoint(this.props.abilityScore.name);
  }

  defaultRacialModifierChanged = (ev) => {
    if(!this.props.abilityScore.isDefaultRacialModifier) {
      this.props.abilityScoreActions.setAsDefaultRacialModifier(this.props.abilityScore.name);
    }
  }

  defaultThemeModifierChanged = (ev) => {
    if(!this.props.abilityScore.isDefaultThemeModifier) {
      this.props.abilityScoreActions.setAsDefaultThemeModifier(this.props.abilityScore.name);
    }
  }

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.abilityScore.name}</TableCell>
        <TableCell>{this.props.abilityScore.score}</TableCell>
        <TableCell>{this.props.abilityScore.modifier}</TableCell>
        <TableCell>{this.props.abilityScore.racialModifier}</TableCell>
        <TableCell>{this.props.abilityScore.themeModifier}</TableCell>
        <TableCell>{this.props.abilityScore.pointsAssigned}<Button color="primary" onClick={this.addPoint}>+</Button><Button color="accent" onClick={this.removePoint}>-</Button></TableCell>        
        <TableCell><Checkbox checked={this.props.abilityScore.isDefaultRacialModifier} onChange={this.defaultRacialModifierChanged} disabled={!this.props.canEditDefaultRacial}/></TableCell>
        <TableCell><Checkbox checked={this.props.abilityScore.isDefaultThemeModifier} onChange={this.defaultThemeModifierChanged} disabled={!this.props.canEditDefaultTheme}/></TableCell>
      </TableRow>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import Icon from 'material-ui/Icon';
import { TableCell,  TableRow } from 'material-ui/Table';
import * as abilityScoreActions from '../actions/abilityActions'

class AbilityScore extends Component {
  addPoint = (ev) => {
    this.props.abilityScoreActions.addPoint(this.props.abilityScore.name);
  }

  removePoint = (ev) => {
    this.props.abilityScoreActions.removePoint(this.props.abilityScore.name);
  }

  defaultRacialModifierChanged = (ev) => {
    this.props.abilityScoreActions.setAsDefaultRacialModifier(this.props.abilityScore.name);
  }

  defaultThemeModifierChanged = (ev) => {
    this.props.abilityScoreActions.setAsDefaultThemeModifier(this.props.abilityScore.name);
  }

  render() {
    const keyScore = this.props.isKey? <Icon>chevron_right</Icon> : '';
    return (
      <TableRow>
        <TableCell>{keyScore}</TableCell>
        <TableCell>{this.props.abilityScore.name}</TableCell>
        <TableCell>{this.props.abilityScore.score}</TableCell>
        <TableCell>{this.props.abilityScore.modifier}</TableCell>
        <TableCell>{this.props.abilityScore.racialModifier}</TableCell>
        <TableCell>{this.props.abilityScore.themeModifier}</TableCell>
        <TableCell>{this.props.abilityScore.pointsAssigned}<Button color="primary" onClick={this.addPoint}>+</Button><Button color="accent" onClick={this.removePoint}>-</Button></TableCell>        
        <TableCell><Checkbox checked={this.props.isDefaultRaceBonus} onChange={this.defaultRacialModifierChanged} disabled={!this.props.canEditDefaultRaceBonus}/></TableCell>
        <TableCell><Checkbox checked={this.props.isDefaultThemeBonus} onChange={this.defaultThemeModifierChanged} disabled={!this.props.canEditDefaultThemeBonus}/></TableCell>
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
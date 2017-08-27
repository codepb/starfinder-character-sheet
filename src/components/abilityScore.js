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
    const isThemeBonus = this.props.abilityScore.themeModifier > 0;
    const isRaceBonus = this.props.abilityScore.raceModifier > 0;
    const isRaceMinus = this.props.abilityScore.raceModifier < 0;
    return (
      <TableRow>
        <TableCell disablePadding={true}>{keyScore}</TableCell>
        <TableCell compact={true}>{this.props.abilityScore.name}</TableCell>
        <TableCell compact={true}><strong>{this.props.abilityScore.score}</strong></TableCell>
        <TableCell compact={true}><strong>{this.props.abilityScore.modifier}</strong></TableCell>    
        <TableCell compact={true}><Checkbox checked={isRaceBonus} checkedIcon="add_box" onChange={this.defaultRacialModifierChanged} indeterminate={isRaceMinus} disabled={!this.props.canEditDefaultRaceBonus}/></TableCell>
        <TableCell compact={true}><Checkbox checked={isThemeBonus} checkedIcon="add_box" onChange={this.defaultThemeModifierChanged} disabled={!this.props.canEditDefaultThemeBonus}/></TableCell>
        <TableCell compact={true}>{this.props.abilityScore.pointsAssigned}</TableCell>
        <TableCell disablePadding={true}><Button color="primary" onClick={this.addPoint} dense={true}>+</Button></TableCell>
        <TableCell disablePadding={true}><Button color="accent" onClick={this.removePoint} dense={true}>-</Button></TableCell>   
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
import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import Icon from 'material-ui/Icon';
import { TableCell,  TableRow } from 'material-ui/Table';

export default class AbilityScore extends PureComponent {
  addPoint = (ev) => {
    this.props.abilityScoreActions.addPoint(this.props.name);
  }

  removePoint = (ev) => {
    this.props.abilityScoreActions.removePoint(this.props.name);
  }

  defaultRacialModifierChanged = (ev) => {
    this.props.abilityScoreActions.setAsDefaultRacialModifier(this.props.name);
  }

  defaultThemeModifierChanged = (ev) => {
    this.props.abilityScoreActions.setAsDefaultThemeModifier(this.props.name);
  }

  render() {
    const {isKey, name, score, modifier, pointsAssigned, themeModifier, raceModifier, canEditDefaultRaceBonus, canEditDefaultThemeBonus} = this.props;

    const keyScore = isKey? <Icon>chevron_right</Icon> : '';
    const isThemeBonus = themeModifier > 0;
    const isRaceBonus = raceModifier > 0;
    const isRaceMinus = raceModifier < 0;
    return (
      <TableRow>
        <TableCell disablePadding={true}>{keyScore}</TableCell>
        <TableCell compact={true}>{name}</TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><strong>{score}</strong></TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><strong>{modifier}</strong></TableCell>    
        <TableCell compact={true} style={{textAlign: 'center'}}><Checkbox checked={isRaceBonus} checkedIcon="add_box" onChange={this.defaultRacialModifierChanged} indeterminate={isRaceMinus} disabled={!canEditDefaultRaceBonus}/></TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><Checkbox checked={isThemeBonus} checkedIcon="add_box" onChange={this.defaultThemeModifierChanged} disabled={!canEditDefaultThemeBonus}/></TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}>{pointsAssigned}</TableCell>
        <TableCell disablePadding={true}><Button color="primary" onClick={this.addPoint} dense={true}>+</Button></TableCell>
        <TableCell disablePadding={true}><Button color="accent" onClick={this.removePoint} dense={true}>-</Button></TableCell>   
      </TableRow>
    );
  }
}
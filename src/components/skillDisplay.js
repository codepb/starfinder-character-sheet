import React, { Component } from 'react';
import { TableRow, TableCell} from 'material-ui/Table';
import Icon from 'material-ui/Icon';
import Checkbox from 'material-ui/Checkbox';
import AbilityInput from './utilities/abilityInput';

export default class SkillsDisplay extends Component {
  ranksUpdated = (ev) => {
    const newValue = ev.target.value * 1;
    if(newValue >= 0) {
      this.props.skillActions.updateRanksInSkill(this.props.skill, newValue);
    }
  }

  miscModifierUpdated = (ev) => {
    const newValue = ev.target.value * 1;
    this.props.skillActions.updateMiscModifierForSkill(this.props.skill, newValue);
  }

  render() {
    const trainedOnly = this.props.isTrainedOnly ? <Icon>chevron_right</Icon> : '';
    const classBonus = this.props.isClassSkill && this.props.ranks > 0 ? 3 : 0;
    const total = this.props.ranks + classBonus + this.props.abilityModifier + this.props.miscModifier + this.props.armorCheckPenalty;
    const totalToDisplay = this.props.isTrainedOnly && this.props.ranks === 0 ? '' : total;
    return (
      <TableRow>
        <TableCell disablePadding={true}>{trainedOnly}</TableCell>
        <TableCell disablePadding={true}><Checkbox checked={this.props.isClassSkill} disabled={true}/></TableCell>
        <TableCell compact={true}>{`${this.props.skill}${this.props.armorCheckPenaltyApplies ? '*' : ''} [${this.props.ability.substring(0,3).toUpperCase()}]`}</TableCell>
        <TableCell compact={true}><strong>{totalToDisplay}</strong></TableCell>
        <TableCell compact={true}><AbilityInput type="number" value={this.props.ranks} onChange={this.ranksUpdated}/></TableCell>
        <TableCell compact={true}>{classBonus}</TableCell>
        <TableCell compact={true}>{this.props.abilityModifier}</TableCell>
        <TableCell compact={true}><AbilityInput type="number" value={this.props.miscModifier} onChange={this.miscModifierUpdated}/></TableCell>
      </TableRow>);
  }
}
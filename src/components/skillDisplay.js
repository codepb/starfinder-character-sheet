import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
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
    const total = this.props.ranks + classBonus + this.props.abilityModifier + this.props.miscModifier;
    const totalToDisplay = this.props.isTrainedOnly && this.props.ranks === 0 ? '' : total;
    return (
      <TableRow>
        <TableCell>{trainedOnly}</TableCell>
        <TableCell><Checkbox checked={this.props.isClassSkill} disabled={true}/></TableCell>
        <TableCell>{`${this.props.skill} [${this.props.ability.substring(0,3).toUpperCase()}]`}</TableCell>
        <TableCell><strong>{totalToDisplay}</strong></TableCell>
        <TableCell><AbilityInput type="number" value={this.props.ranks} onChange={this.ranksUpdated}/></TableCell>
        <TableCell>{classBonus}</TableCell>
        <TableCell>{this.props.abilityModifier}</TableCell>
        <TableCell><AbilityInput type="number" value={this.props.miscModifier} onChange={this.miscModifierUpdated}/></TableCell>
      </TableRow>);
  }
}
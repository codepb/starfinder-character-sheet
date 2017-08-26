import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';
import Checkbox from 'material-ui/Checkbox';

export default class SkillsDisplay extends Component {
  render() {
    const trainedOnly = this.props.isTrainedOnly ? <Icon>chevron_right</Icon> : '';
    const classBonus = this.props.isClassSkill && this.props.ranks > 0 ? 3 : 0;
    return (
      <TableRow>
        <TableCell>{trainedOnly}</TableCell>
        <TableCell><Checkbox checked={this.props.isClassSkill} disabled={true}/></TableCell>
        <TableCell>{`${this.props.skill} [${this.props.ability.substring(0,3).toUpperCase()}]`}</TableCell>
        <TableCell>{this.props.ranks + classBonus + this.props.ranks + this.props.abilityModifier + this.props.miscModifier}</TableCell>
        <TableCell>{this.props.ranks}</TableCell>
        <TableCell>{classBonus}</TableCell>
        <TableCell>{this.props.abilityModifier}</TableCell>
        <TableCell>{this.props.miscModifier}</TableCell>
      </TableRow>);
  }
}
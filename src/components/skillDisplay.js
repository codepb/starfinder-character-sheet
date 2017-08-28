import React, { Component } from 'react';
import { TableRow, TableCell} from 'material-ui/Table';
import Icon from 'material-ui/Icon';
import Checkbox from 'material-ui/Checkbox';
import AbilityInput from './utilities/abilityInput';
import SkillLabel from './skillLabel';


export default class SkillDisplay extends Component {
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

  professionNameChanged = (ev) => {
    this.props.skillActions.updateProfessionName(this.props.skill, ev.target.value);
  }

  abilityChanged = (value) => {
    this.props.skillActions.updateProfessionAbility(this.props.skill, value);
  }

  extraClassSkillChanged = (ev) => {
    this.props.skillActions.updateExtraClassSkill(this.props.skill, ev.target.checked);
  }

  render() {
    const isClassSkill = this.props.isClassSkill || this.props.isExtraClassSkill;
    const trainedOnly = this.props.isTrainedOnly ? <Icon>chevron_right</Icon> : '';
    const classBonus = isClassSkill && this.props.ranks > 0 ? 3 : 0;
    const total = this.props.ranks + classBonus + this.props.abilityModifier + this.props.miscModifier + this.props.armorCheckPenalty;
    const totalToDisplay = this.props.isTrainedOnly && this.props.ranks === 0 ? '' : total;    
    return (
      <TableRow>
        <TableCell disablePadding={true}>{trainedOnly}</TableCell>
        <TableCell disablePadding={true}><Checkbox checked={isClassSkill} disabled={this.props.isClassSkill} onChange={this.extraClassSkillChanged}/></TableCell>
        <TableCell compact={true}><SkillLabel {...this.props} onAbilityChanged={this.props.skillActions.updateProfessionAbility} onProfessionNameChanged={this.props.skillActions.updateProfessionName}/></TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><strong>{totalToDisplay}</strong></TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput type="number" value={this.props.ranks} onChange={this.ranksUpdated}/></TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}>{classBonus}</TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}>{this.props.abilityModifier}</TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}>{this.props.themeBonus}</TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput type="number" value={this.props.miscModifier} onChange={this.miscModifierUpdated}/></TableCell>
      </TableRow>);
  }
}
import React, { Component } from 'react';
import { TableRow, TableCell} from 'material-ui/Table';
import AbilityInput from './utilities/abilityInput';

export default class AttackBonusRow extends Component {
  miscModifierUpdated = (ev) => {
    const newValue = ev.target.value * 1;
    this.props.attackBonusActions.updateMiscModifier(this.props.name, newValue);
  }

  render() {
    return (
      <TableRow>
        <TableCell compact={true}>{this.props.name}</TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><strong>{this.props.baseAttackBonus + this.props.abilityModifier + this.props.miscModifier}</strong></TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}>{this.props.baseAttackBonus}</TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}>{this.props.abilityModifier}</TableCell>
        <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput type="number" value={this.props.miscModifier} onChange={this.miscModifierUpdated} /></TableCell>
      </TableRow>);
  }
}
import React, { Component } from 'react';
import { TableRow, TableCell} from 'material-ui/Table';
import AbilityInput from './utilities/abilityInput';

export default class SavingThrowRow extends Component {
  miscModifierUpdated = (ev) => {
    const newValue = ev.target.value * 1;
    this.props.savingThrowActions.updateMiscModifier(this.props.name, newValue);
  }

  render() {
    return (
      <TableRow>
        <TableCell compact={true}>{this.props.name}</TableCell>
        <TableCell compact={true}><strong>{this.props.base + this.props.abilityModifier + this.props.miscModifier}</strong></TableCell>
        <TableCell compact={true}><AbilityInput type="number" value={this.props.base} disabled={true} /></TableCell>
        <TableCell compact={true}><AbilityInput type="number" value={this.props.abilityModifier} disabled={true}/></TableCell>
        <TableCell compact={true}><AbilityInput type="number" value={this.props.miscModifier} onChange={this.miscModifierUpdated} /></TableCell>
      </TableRow>);
  }
}
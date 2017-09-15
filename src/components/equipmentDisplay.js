import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import { TableRow, TableCell } from 'material-ui/Table';
import Icon from 'material-ui/Icon';

export default class EquipmentDisplay extends Component {
  removeEquipment = () => {
    this.props.removeEquipment();
  }

  render() {
    const removeButton = this.props.equipment.canRemove ? <IconButton color="accent" style={{display: 'inline-block'}} onClick={this.removeEquipment}><Icon style={{fontSize: 12}}>clear</Icon></IconButton> : '';
    return (
      <TableRow>
        <TableCell>{this.props.equipment.name}</TableCell>
        <TableCell>{this.props.equipment.level}</TableCell>
        <TableCell>{this.props.equipment.quantity}</TableCell>
        <TableCell>{this.props.equipment.weight > 0.1 ? this.props.equipment.weight : 'L'}</TableCell>
        <TableCell>{removeButton}</TableCell>
      </TableRow>
    );
  }
}
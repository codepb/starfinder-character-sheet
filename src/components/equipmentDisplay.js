import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

export default class EquipmentDisplay extends Component {
  showDialog = () => {
    this.setState(() => {return {dialogShown: true}});
  }

  hideDialog = () => {
    this.setState(() => {return {dialogShown: false}});
  }

  removeEquipment = () => {
    this.props.removeEquipment();
  }

  render() {
    return (
      <div style={{cursor: 'pointer'}}>
        <Typography type="subheading" onClick={this.showDialog} style={{display: 'inline-block', marginRight: 5}}>{this.props.equipment.name}</Typography>
        <IconButton color="accent" style={{display: 'inline-block'}} onClick={this.removeEquipment}><Icon style={{fontSize: 12}}>clear</Icon></IconButton>
      </div>
    );
  }
}
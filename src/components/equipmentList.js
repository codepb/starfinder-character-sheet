import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import Table, { TableHead, TableBody, TableRow, TableCell } from 'material-ui/Table';
import TextField from './utilities/textField';
import AbilityInput from './utilities/abilityInput';
import Select from './utilities/select';
import EquipmentDisplay from './equipmentDisplay';

export default class EquipmentList extends Component {
  constructor(props) {
    super();
    this.state = {
      dialogOpen: false,
      selectedItem: null
    }
  }
  
  showAddEquipmentDialog = () => {
    this.setState(() => { return { dialogOpen: true }});
  }

  cancelAddingEquipment = () => {
    this.setState(() => { return { dialogOpen: false, selectedItem: null }});
  }

  setSelectedItem = (value) => {
    this.setState(() => { return { selectedItem: value }})
  }

  addEquipment = () => {
    if(this.state.selectedItem) {
      this.props.addEquipment(this.state.selectedItem);
    }
    this.cancelAddingEquipment();
  }

  setName = (ev) => {
    const name = ev.target.value;
    this.setState((state) => { return { selectedItem: { ...state.selectedItem, name }}})
  }

  setQuantity = (ev) => {
    const quantity = ev.target.value;
    this.setState((state) => { return { selectedItem: { ...state.selectedItem, quantity }}})
  }

  setLevel = (ev) => {
    const level = ev.target.value;
    this.setState((state) => { return { selectedItem: { ...state.selectedItem, level }}})
  }

  setWeight = (value) => {
    const weight = value;
    this.setState((state) => { return { selectedItem: { ...state.selectedItem, weight }}})
  }
  
  render() {
    const content = [];
    for (let equipmentIndex in this.props.equipment) {
      const equipment = this.props.equipment[equipmentIndex];
      content.push(<EquipmentDisplay
        key={equipmentIndex}
        equipment={equipment}
        removeEquipment={() => this.props.removeEquipment(equipment)}/>);
    }

    const weights = [];
    weights[0] = { label: 'L', value: 0.1 }
    for(let i = 1; i <= 10; i++) {
      weights[i] = { label: `${i}`, value: i };
    }

    return (
      <Card raised={true}>
        <CardHeader title="Equipment" />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Level</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
            {content}
            </TableBody>
          </Table>
          <Button onClick={this.showAddEquipmentDialog}>Add Equipment</Button>
          <Dialog open={this.state.dialogOpen} onRequestClose={this.cancelAddingEquipment} >
            <DialogTitle>Add Equipment</DialogTitle>
            <DialogContent style={{width:400}}>
              <TextField label="Name" value={this.state.selectedItem ? this.state.selectedItem.name : null} onBlur={this.setName} />
              <AbilityInput label="Quantity" type="number" value={this.state.selectedItem ? this.state.selectedItem.quantity : null} onChange={this.setQuantity} />
              <AbilityInput label="Level" type="number" value={this.state.selectedItem ? this.state.selectedItem.level : null} onChange={this.setLevel} />
              <Select label="Weight" options={weights} onChange={this.setWeight} value={this.state.selectedItem ? this.state.selectedItem.weight : null}/>
              <div>
                <Button onClick={this.addEquipment}>Add Equipment</Button>
                <Button onClick={this.cancelAddingEquipment}>Cancel</Button>
              </div>           
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    );
  }
}
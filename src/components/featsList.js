import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';
import Select from './utilities/select';
import FeatDisplay from './featDisplay';
import feats from '../rules/feats';
import ComponentContainer from './componentContainer';

export default class FeatsList extends Component {
  constructor(props) {
    super();
    this.state = {
      addFeatDialogOpen: false,
      selectedFeat: null
    }
  }
  
  showAddFeatDialog = () => {
    this.setState(() => { return { addFeatDialogOpen: true }});
  }

  cancelAddingFeat = () => {
    this.setState(() => { return { addFeatDialogOpen: false, selectedFeat: null }});
  }

  setSelectedFeat = (value) => {
    const selectedFeat = feats.find(s => s.name === value);
    this.setState(() => { return { selectedFeat: selectedFeat }})
  }

  addFeat = () => {
    if(this.state.selectedFeat) {
      this.props.addFeat(this.state.selectedFeat.name);
    }
    this.cancelAddingFeat();
  }
  
  render() {
    const content = [];
    for (let featIndex in this.props.feats) {
      const featName = this.props.feats[featIndex];
      const feat = feats.find(f => f.name === featName);
      content.push(<FeatDisplay
        key={feat.name}
        feat={feat}
        removeFeat={() => this.props.removeFeat(featName)}/>);
    }

    return (
      <ComponentContainer title="Feats">
          {content}
          <Button onClick={this.showAddFeatDialog}>Add Feat</Button>
          <Dialog open={this.state.addFeatDialogOpen} onRequestClose={this.cancelAddingFeat} >
            <DialogTitle>Add Feat</DialogTitle>
            <DialogContent style={{width:400}}>
              <Select label="Feat" options={feats.map(s => { return {label: s.name, value: s.name }}).sort((a, b) => { return a.label.localeCompare(b.label); })} onChange={this.setSelectedFeat} value={this.state.selectedFeat ? this.state.selectedFeat.name : ''}/>
              <div style={{minHeight:100}}>
                {this.state.selectedFeat !== null ? <DialogContentText><strong>Prerequisites: </strong> {this.state.selectedFeat.prerequisites}</DialogContentText> : ''}
                {this.state.selectedFeat !== null ? <DialogContentText><strong>Benefit: </strong>{this.state.selectedFeat.benefit}</DialogContentText> : ''}
              </div>  
              <Button onClick={this.addFeat}>Add Feat</Button>
              <Button onClick={this.cancelAddingFeat}>Cancel</Button>              
            </DialogContent>
          </Dialog>
      </ComponentContainer>
    );
  }
}
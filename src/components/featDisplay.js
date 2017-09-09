import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Dialog, {DialogTitle, DialogContent, DialogContentText} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

export default class FeatDisplay extends Component {
  constructor() {
    super();
    this.state = {
      dialogShown: false
    };
  }

  showDialog = () => {
    this.setState(() => {return {dialogShown: true}});
  }

  hideDialog = () => {
    this.setState(() => {return {dialogShown: false}});
  }

  removeFeat = () => {
    this.props.removeFeat();
  }

  render() {
    return (
      <div style={{cursor: 'pointer'}}>
        <Typography type="subheading" onClick={this.showDialog} style={{display: 'inline-block', marginRight: 5}}>{this.props.feat.name}</Typography>
        <IconButton color="accent" style={{display: 'inline-block'}} onClick={this.removeFeat}><Icon style={{fontSize: 12}}>clear</Icon></IconButton>
        <Dialog open={this.state.dialogShown} onRequestClose={this.hideDialog}>
          <DialogTitle>{this.props.feat.name}</DialogTitle>
          <DialogContent>
            <DialogContentText><strong>Prerequisites: </strong>{this.props.feat.prerequisites}</DialogContentText>
            <DialogContentText><strong>Benefit: </strong>{this.props.feat.benefit}</DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
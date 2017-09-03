import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Dialog, {DialogTitle, DialogContent, DialogContentText} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

export default class KnownSpellDisplay extends Component {
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

  render() {
    return (
      <div>
        <Typography type="subheading" onClick={this.showDialog} style={{display: 'inline-block', marginRight: 5}}>{this.props.spell.name}</Typography>
        <IconButton color="accent" dense={true} style={{display: 'inline-block'}}><Icon style={{fontSize: 12}}>clear</Icon></IconButton>
        <Dialog open={this.state.dialogShown} onRequestClose={this.hideDialog}>
          <DialogTitle>{this.props.spell.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>{this.props.spell.description}</DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
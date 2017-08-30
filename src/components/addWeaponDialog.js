import React, { Component } from 'react';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import WeaponDisplay from './weaponDisplay';


export default class AddWeaponDialog extends Component {
  weaponChanged = (value) => {
    this.setState(() => {return {weapon: value}});
  }

  addWeapon = () => {
    this.props.onRequestClose(this.state.weapon);
  };

  cancel = () => {
    this.props.onRequestClose(null);
  };

  render() {
    const { onRequestClose, ...other } = this.props;
    return (
      <Dialog {...other}>
        <DialogTitle>Add Weapon</DialogTitle>
        <div style={{padding: '20px'}}>
          <WeaponDisplay onChange={this.weaponChanged}/>
          <div>
            <Button onClick={this.addWeapon}>Add Weapon</Button>
            <Button onClick={this.cancel}>Cancel</Button>
          </div>
        </div>
      </Dialog>
    );
  }
}

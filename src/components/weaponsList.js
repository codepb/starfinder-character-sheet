import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import WeaponDisplay from './weaponDisplay';
import AddWeaponDialog from './addWeaponDialog';
import ComponentContainer from './componentContainer';

export default class WeaponList extends Component {
  constructor () {
    super();
    this.state = {
      dialogOpen: false
    }
  }

  openAddWeaponDialog = () => {
    this.setState(() => {return {dialogOpen: true}});
  }

  handleRequestClose = value => {
    if(value) {
      this.props.weaponActions.addWeapon(value);
    }
    this.setState({ dialogOpen: false });
  };

  render() {
    const rows = [];
    for(let weapon in this.props.weapons) {
      rows.push(
        <Card key={weapon} style={{margin: '10px'}}>          
          <CardContent>
            <Typography type="title" gutterBottom={true}>{this.props.weapons[weapon].weapon}</Typography>
            <WeaponDisplay weapon={this.props.weapons[weapon]} displayWeaponName={false} removeWeapon={() => this.props.weaponActions.removeWeapon(this.props.weapons[weapon])} disabled={true}/>
          </CardContent>
        </Card>);
    }
    return (
      <ComponentContainer title="Weapons">
          {rows}
          <Button onClick={this.openAddWeaponDialog}>Add Weapon</Button>
          <AddWeaponDialog open={this.state.dialogOpen} onRequestClose={this.handleRequestClose} />
        </ComponentContainer>
    );
  }
}
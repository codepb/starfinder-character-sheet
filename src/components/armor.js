import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import AbilityInput from './utilities/abilityInput';


var styles = {
  icons: { verticalAlign: 'middle', color: 'rgba(0, 0, 0, 0.87)', fontSize: '20px' }
};

export default class Armor extends Component {
  miscUpdated = (ev) => {
    this.props.armorActions.updateMiscArmor(ev.target.value * 1);
  }

  damageReductionUpdated = (ev) => {
    this.props.armorActions.updateDamageReduction(ev.target.value);
  }

  resistancesUpdated = (ev) => {
    this.props.armorActions.updateResistances(ev.target.value);
  }

  armorWornUpdated = (ev) => {
    this.props.armorActions.updateName(ev.target.value);
  }

  armorPenaltyUpdated = (ev) => {
    const value = ev.target.value * 1;
    if(value <= 0) {
      this.props.armorActions.updatePenalty(ev.target.value * 1);
    }
  }

  armorMaxDexterityUpdated = (ev) => {
    const value = ev.target.value * 1;
    if( value > 0) {
      this.props.armorActions.updateMaxDexterity(ev.target.value * 1);
    }
  }

  armorSpeedAdjustmentUpdated = (ev) => {
    this.props.armorActions.updateSpeedAdjustment(ev.target.value * 1);
  }

  energyArmorUpdated = (ev) => {
    this.props.armorActions.updateEnergyArmorBonus(ev.target.value * 1);
  }

  kineticArmorUpdated = (ev) => {
    this.props.armorActions.updateKineticArmorBonus(ev.target.value * 1);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Armor" />
        <CardContent>
          <TextField label="Armor Worn" defaultValue={this.props.armorWorn} onBlur={this.armorWornUpdated} style={{width: '300px', marginRight: '10px'}}/>
          <span style={{marginLeft: '10px', marginRight: '10px'}}><AbilityInput label="Penalty" type="number" value={this.props.armorPenalty} onChange={this.armorPenaltyUpdated} inputStyles={{width: '90px'}}/></span>
          <span style={{marginLeft: '10px', marginRight: '10px'}}><AbilityInput label="Max Dex" type="number" value={this.props.armorMaxDexterity} onChange={this.armorMaxDexterityUpdated} inputStyles={{width: '90px'}}/></span>
          <span style={{marginLeft: '10px', marginRight: '10px'}}><AbilityInput label="Speed Adj" type="number" value={this.props.armorSpeedAdjustment} onChange={this.armorSpeedAdjustmentUpdated} inputStyles={{width: '90px'}}/></span>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell compact={true} />
                <TableCell compact={true} style={{textAlign: 'center'}}>Total</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Base</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Bonus</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Dexterity</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Misc</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell compact={true}>Energy Armor Class</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><strong>{10 + this.props.armorBonuses.energy + this.props.dexterityModifier + this.props.armorBonuses.misc}</strong></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>10</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput type="number" value={this.props.armorBonuses.energy} onChange={this.energyArmorUpdated}/></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>{this.props.dexterityModifier}</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell compact={true}>Kinetic Armor Class</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><strong>{10 + this.props.armorBonuses.kinetic + this.props.dexterityModifier + this.props.armorBonuses.misc}</strong></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>10</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput type="number" value={this.props.armorBonuses.kinetic} onChange={this.kineticArmorUpdated} /></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>{this.props.dexterityModifier}</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell compact={true}>AC vs Combat Maneuvers</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput label="Total" value={18 + this.props.armorBonuses.kinetic + this.props.dexterityModifier + this.props.armorBonuses.misc} disabled={true} /></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><Icon style={styles.icons}>drag_handle</Icon></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput label="Base" value="8" disabled={true} /></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><Icon style={styles.icons}>add</Icon></TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}><AbilityInput label="KAC" value={10 + this.props.armorBonuses.kinetic + this.props.dexterityModifier + this.props.armorBonuses.misc} disabled={true} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div>
            <TextField label="DR" value={this.props.damageReduction} onBlur={this.damageReductionUpdated} style={{marginRight: '10px'}}/>
            <TextField label="Resistances" value={this.props.resistances} onBlur={this.resistancesUpdated} style={{marginLeft: '10px', width: '450px'}}/>
          </div>
        </CardContent>
      </Card>
    );
  }
}


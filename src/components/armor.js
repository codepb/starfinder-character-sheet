import React, { Component } from 'react';
import { FormLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import AbilityInput from './utilities/abilityInput';

var styles = {
  icons: { verticalAlign: 'middle', color: 'rgba(0, 0, 0, 0.87)', fontSize: '20px' }
};

export default class Armor extends Component {
  miscUpdated = (ev) => {
    this.props.armorActions.updateMiscArmor(ev.target.value * 1);
  }

  damageReductionUpdated = (ev) => {
    this.props.armorActions.updateDamageReduction(ev.target.value * 1);
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
          <div>
            <TextField label="Armor Worn" defaultValue={this.props.armorWorn} onBlur={this.armorWornUpdated} />
            <AbilityInput label="Penalty" type="number" value={this.props.armorPenalty} onChange={this.armorPenaltyUpdated} />
            <AbilityInput label="Max Dex" type="number" value={this.props.armorMaxDexterity} onChange={this.armorMaxDexterityUpdated} />
            <AbilityInput label="Speed Adjust" type="number" value={this.props.armorSpeedAdjustment} onChange={this.armorSpeedAdjustmentUpdated} />
          </div>
          <div>
            <FormLabel style={{marginRight:'5px'}}>EAC</FormLabel>
            <AbilityInput label="Total" value={10 + this.props.armorBonuses.energy + this.props.dexterityModifier + this.props.armorBonuses.misc} disabled={true}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <AbilityInput value="10" disabled={true}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Bonus" type="number" value={this.props.armorBonuses.energy} onChange={this.energyArmorUpdated}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Dexterity" value={this.props.dexterityModifier} disabled={true} />
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Misc" type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} />
          </div>
          <div>
            <FormLabel style={{marginRight:'5px'}}>KAC</FormLabel>
            <AbilityInput label="Total" value={10 + this.props.armorBonuses.kinetic + this.props.dexterityModifier + this.props.armorBonuses.misc} disabled={true} />
            <Icon style={styles.icons}>drag_handle</Icon>
            <AbilityInput value="10" disabled={true} />
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Bonus" type="number" value={this.props.armorBonuses.kinetic} onChange={this.kineticArmorUpdated} />
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Dexterity" value={this.props.dexterityModifier} disabled={true} />
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Misc" type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} />
          </div>
          <div>
            <FormLabel style={{marginRight:'5px'}}>AC vs Combat Maneuvers</FormLabel>
            <AbilityInput label="Total" value={18 + this.props.armorBonuses.kinetic + this.props.dexterityModifier + this.props.armorBonuses.misc} disabled={true} />
            <Icon style={styles.icons}>drag_handle</Icon>
            <AbilityInput value="8" disabled={true} />
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="KAC" value={10 + this.props.armorBonuses.kinetic + this.props.dexterityModifier + this.props.armorBonuses.misc} disabled={true} />
          </div>
          <div>
            <AbilityInput label="DR" type="number" value={this.props.damageReduction} onChange={this.damageReductionUpdated} />
            <TextField label="Resistances" value={this.props.resistances} onBlur={this.resistancesUpdated}/>
          </div>
        </CardContent>
      </Card>
    );
  }
}


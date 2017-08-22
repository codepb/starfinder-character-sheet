import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import AbilityInput from './utilities/abilityInput';
import * as armorBonusActions from '../actions/armorBonusActions';
import * as Abilities from '../rules/abilities';

var styles = {
  textFld: { width: 40 },
  icons: { verticalAlign: 'middle' }
};

class Armor extends Component {
  miscUpdated = (ev) => {
    this.props.armorBonusActions.updateMiscArmor(ev.target.value * 1);
  }

  kineticBonusUpdated = (ev) => {
    this.props.armorBonusActions.updateKineticArmor(ev.target.value * 1);
  }

  energyBonusUpdated = (ev) => {
    this.props.armorBonusActions.updateEnergyArmor(ev.target.value * 1);
  }

  damageReductionUpdated = (ev) => {
    this.props.armorBonusActions.updateDamageReduction(ev.target.value * 1);
  }

  resistancesUpdated = (ev) => {
    this.props.armorBonusActions.updateResistances(ev.target.value);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Armor" />
        <CardContent>
          <div>
            <FormLabel style={{marginRight:'5px'}}>EAC</FormLabel>
            <AbilityInput label="Total" value={this.props.energyArmorClass} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <AbilityInput value="10" disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Bonus" type="number" value={this.props.armorBonuses.energy}  onChange={this.energyBonusUpdated} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Dexterity" value={this.props.dexterityScore.modifier} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Misc" type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} style={styles.textFld}/>
          </div>
          <div>
            <FormLabel style={{marginRight:'5px'}}>KAC</FormLabel>
            <AbilityInput label="Total" value={this.props.kineticArmorClass} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <AbilityInput value="10" disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Bonus" type="number" value={this.props.armorBonuses.kinetic}  onChange={this.kineticBonusUpdated} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Dexterity" value={this.props.dexterityScore.modifier} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Misc" type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} style={styles.textFld}/>
          </div>
          <div>
            <FormLabel style={{marginRight:'5px'}}>AC vs Combat Maneuvers</FormLabel>
            <AbilityInput label="Total" value={8 + this.props.kineticArmorClass} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <AbilityInput value="8" disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="KAC" value={this.props.kineticArmorClass} disabled={true} style={styles.textFld}/>
          </div>
          <div>
            <AbilityInput label="DR" type="number" value={this.props.armorBonuses.damageReduction} onChange={this.damageReductionUpdated}  style={styles.textFld}/>
            <TextField label="Resistances" value={this.props.armorBonuses.resistances} onChange={this.resistancesUpdated}/>
          </div>
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state) {    
    return {
        dexterityScore: state.abilityScores.abilityScores[Abilities.DEXTERITY],
        currentRace: state.character.race,
        currentTheme: state.character.theme,
        armorBonuses: state.armorBonuses,
        energyArmorClass: 10 + state.abilityScores.abilityScores[Abilities.DEXTERITY].modifier + state.armorBonuses.misc + state.armorBonuses.energy,
        kineticArmorClass: 10 + state.abilityScores.abilityScores[Abilities.DEXTERITY].modifier + state.armorBonuses.misc + state.armorBonuses.kinetic
    };
}

function mapDispatchToProps(dispatch) {
  return {
    armorBonusActions: bindActionCreators(armorBonusActions, dispatch)
  };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Armor);
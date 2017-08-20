import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { FormLabel } from 'material-ui/Form';
import Icon from 'material-ui/Icon';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import DisabledTextField from './utilities/disabledTextField';
import * as armorBonusActions from '../actions/armorBonusActions';
import AbilityScore from './abilityScore';
import races from '../rules/races';
import themes from '../rules/themes';
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
            <DisabledTextField label="Total" value={this.props.energyArmorClass} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <DisabledTextField value="10" style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <TextField label="Bonus" type="number" value={this.props.armorBonuses.energy}  onChange={this.energyBonusUpdated} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <DisabledTextField label="Dexterity" value={this.props.dexterityScore.modifier} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <TextField label="Misc" type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} style={styles.textFld}/>
          </div>
          <div>
            <FormLabel style={{marginRight:'5px'}}>KAC</FormLabel>
            <DisabledTextField label="Total" value={this.props.kineticArmorClass} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <DisabledTextField value="10" style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <TextField label="Bonus" type="number" value={this.props.armorBonuses.kinetic}  onChange={this.kineticBonusUpdated} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <DisabledTextField label="Dexterity" value={this.props.dexterityScore.modifier} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <TextField label="Misc" type="number" value={this.props.armorBonuses.misc} onChange={this.miscUpdated} style={styles.textFld}/>
          </div>
          <div>
            <FormLabel style={{marginRight:'5px'}}>AC vs Combat Maneuvers</FormLabel>
            <DisabledTextField label="Total" value={8 + this.props.kineticArmorClass} disabled={true} style={styles.textFld}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <DisabledTextField value="8" style={styles.textFld}/>
            <Icon style={styles.icons}>add</Icon>
            <DisabledTextField label="KAC" value={this.props.kineticArmorClass} disabled={true} style={styles.textFld}/>
          </div>
          <div>
            <TextField label="DR" type="number" value={this.props.armorBonuses.damageReduction} onChange={this.damageReductionUpdated}  style={styles.textFld}/>
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
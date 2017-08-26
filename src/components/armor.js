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
import AbilityManager from '../models/abilityManager';

var styles = {
  icons: { verticalAlign: 'middle' }
};

class Armor extends Component {
  miscUpdated = (ev) => {
    this.props.armorBonusActions.updateMiscArmor(ev.target.value * 1);
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
            <AbilityInput label="Total" value={10 + this.props.armorBonuses.energy + this.props.dexterityModifier + this.props.armorBonuses.misc} disabled={true}/>
            <Icon style={styles.icons}>drag_handle</Icon>
            <AbilityInput value="10" disabled={true}/>
            <Icon style={styles.icons}>add</Icon>
            <AbilityInput label="Bonus" type="number" value={this.props.armorBonuses.energy} disabled={true}/>
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
            <AbilityInput label="Bonus" type="number" value={this.props.armorBonuses.kinetic} disabled={true} />
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
            <TextField label="Resistances" value={this.props.resistances} onChange={this.resistancesUpdated}/>
          </div>
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();  
    return {
        dexterityModifier: abilityManager.getAbilityScoreFromState(state, Abilities.DEXTERITY).modifier,
        armorBonuses: getArmorBonusesFromState(state),
        damageReduction: state.armorBonuses.damageReduction,
        resitances: state.armorBonuses.resistances
    };
}

function getArmorBonusesFromState(state) {
  return {
    kinetic: 0,
    energy: 0,
    misc: state.armorBonuses.misc
  }
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
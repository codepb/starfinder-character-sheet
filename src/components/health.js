import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { FormLabel } from 'material-ui/Form';
import Icon from 'material-ui/Icon';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import DisabledTextField from './utilities/disabledTextField';
import * as initiativeActions from '../actions/initiativeActions';
import AbilityScore from './abilityScore';
import races from '../rules/races';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';

var styles = {
  textFld: { width: 60, textAlign: 'center' },
  label: { width: 100, marginRight: '5px' },
  icons: { verticalAlign: 'middle' }
};

class Health extends Component {
  miscUpdated = (ev) => {
    this.props.initiativeActions.updateMiscInitiative(ev.target.value * 1);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Health and Resolve" />
        <CardContent>
          <div>
            <FormLabel style={styles.label}>Total</FormLabel>
            <TextField label="Stamina" type="number" value={this.props.energyArmorClass} disabled={true} style={styles.textFld}/>
            <TextField label="Hit Points" type="number" value={this.props.armorBonuses.energy}  onChange={this.energyBonusUpdated} style={styles.textFld}/>
            <TextField label="Resolve Points" type="number" value={this.props.dexterityScore.modifier} disabled={true} style={styles.textFld}/>
          </div>
          <div>
            <FormLabel style={styles.label}>Current</FormLabel>
            <TextField label="Stamina" type="number" value={this.props.energyArmorClass} disabled={true} style={styles.textFld}/>
            <TextField label="Hit Points" type="number" value={this.props.armorBonuses.energy}  onChange={this.energyBonusUpdated} style={styles.textFld}/>
            <TextField label="Resolve Points" type="number" value={this.props.dexterityScore.modifier} disabled={true} style={styles.textFld}/>
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
        miscInitiative: state.initiative
    };
}

function mapDispatchToProps(dispatch) {
  return {
      initiativeActions: bindActionCreators(initiativeActions, dispatch)
  };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Health);
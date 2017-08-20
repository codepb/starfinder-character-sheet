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
  textFld: { width: 40, textAlign: 'center' },
  icons: { verticalAlign: 'middle' }
};

class Initiative extends Component {
  miscUpdated = (ev) => {
    this.props.initiativeActions.updateMiscInitiative(ev.target.value * 1);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Initiative" />
        <CardContent>
          <DisabledTextField label="Total" value={this.props.dexterityScore.modifier + this.props.miscInitiative} disabled={true} style={styles.textFld}/>
          <Icon style={styles.icons}>drag_handle</Icon>
          <DisabledTextField label="Dexterity" value={this.props.dexterityScore.modifier} disabled={true} style={styles.textFld}/>
          <Icon style={styles.icons}>add</Icon>
          <TextField label="Misc" type="number" value={this.props.miscInitiative} onChange={this.miscUpdated} style={styles.textFld}/>
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
)(Initiative);
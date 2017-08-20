import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { FormLabel } from 'material-ui/Form';
import DisabledTextField from './utilities/disabledTextField';
import * as initiativeActions from '../actions/initiativeActions';
import AbilityScore from './abilityScore';
import races from '../rules/races';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';

class Initiative extends Component {
  miscUpdated = (ev) => {
    this.props.initiativeActions.updateMiscInitiative(ev.target.value * 1);
  }

  render() {
    return (
      <div>
        <FormLabel>Initiative</FormLabel>
        <DisabledTextField label="Total" value={this.props.dexterityScore.modifier + this.props.miscInitiative} disabled={true}/>
        <DisabledTextField label="Dexterity" value={this.props.dexterityScore.modifier} disabled={true}/>
        <TextField label="Misc" type="number" value={this.props.miscInitiative} onChange={this.miscUpdated}/>
      </div>
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
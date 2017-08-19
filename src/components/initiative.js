import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { FormLabel } from 'material-ui/Form';
import * as abilityScoreActions from '../actions/abilityScoreActions'
import AbilityScore from './abilityScore';
import races from '../rules/races';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';

class Initiative extends Component {
  miscUpdate = (ev) => {

  }

  render() {
    return (
      <div>
        <FormLabel>Initiative</FormLabel>
        <TextField label="Total" value={this.props.dexterityScore.modifier} disabled={true}/>
        <TextField label="Dexterity" value={this.props.dexterityScore.modifier} disabled={true}/>
        <TextField label="Misc" value={this.props.miscInitiative} onChange={this.miscUpdated}/>
      </div>
    );
  }
}

function mapStateToProps(state) {    
    return {
        dexterityScore: state.abilityScores.abilityScores[Abilities.DEXTERITY],
        currentRace: state.character.race,
        currentTheme: state.character.theme
    };
}

export default connect(
    mapStateToProps,
    null
)(Initiative);
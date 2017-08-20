import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import DisabledTextField from './utilities/disabledTextField';
import Select from './utilities/select';
import * as characterActions from '../actions/characterActions';
import races from '../rules/races';
import themes from '../rules/themes';

const raceOptions = races.map(r =>  { return {label: r.name, value: r.name}});
const themeOptions = themes.map(r =>  { return {label: r.name, value: r.name}});

class AbilityScores extends Component {
  raceChanged = (value) => {
    this.props.characterActions.changeRace(value);
  }

  themeChanged = (value) => {
    this.props.characterActions.changeTheme(value);
  }

  nameChanged = (event) => {
    this.props.characterActions.changeName(event.target.value);
  }

  render() {
    return (
      <div>
        <TextField label="Name" value={this.props.character.name} onChange={this.nameChanged}/>
        <Select label="Race" value={this.props.character.race.name} options={raceOptions} onChange={this.raceChanged} />
        <Select label="Theme"  value={this.props.character.theme} options={themeOptions} onChange={this.themeChanged} />
        <DisabledTextField label="Size" value={this.props.character.race.size} disabled={true}/>
      </div>
    );
  }
}

function mapStateToProps(state) {    
    return {
        character: state.character
    };
}

function mapDispatchToProps(dispatch) {
    return {
        characterActions: bindActionCreators(characterActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbilityScores);
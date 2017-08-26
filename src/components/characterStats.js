import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import DisabledTextField from './utilities/disabledTextField';
import Select from './utilities/select';
import * as characterActions from '../actions/characterActions';
import races from '../rules/races';
import themes from '../rules/themes';
import classes from '../rules/classes';

const raceOptions = Object.keys(races).map(r =>  { return {label: r, value: r}});
const themeOptions = Object.keys(themes).map(t =>  { return {label: t, value: t}});
const classOptions = Object.keys(classes).map(c => { return {label: c, value: c}});

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

  classChanged = (value) => {
    this.props.characterActions.changeClass(value);
  }

  render() {
    return (
      <div>
        <TextField label="Name" value={this.props.character.name} onChange={this.nameChanged}/>
        <Select label="Race" value={this.props.character.race} options={raceOptions} onChange={this.raceChanged} />
        <Select label="Theme"  value={this.props.character.theme} options={themeOptions} onChange={this.themeChanged} />
        <Select label="Class"  value={this.props.character.class} options={classOptions} onChange={this.classChanged} />
        <DisabledTextField label="Size" value={this.props.character.size} disabled={true}/>
      </div>
    );
  }
}

function mapStateToProps(state) {    
    const size = races[state.character.race].size;
    return {
        character: {...state.character, size}        
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
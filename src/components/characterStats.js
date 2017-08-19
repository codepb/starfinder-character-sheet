import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  render() {
    return (
      <div>
        <Select name="race" value={this.props.character.race} options={raceOptions} onChange={this.raceChanged} />
        <Select name="theme"  value={this.props.character.theme} options={themeOptions} onChange={this.themeChanged} />
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
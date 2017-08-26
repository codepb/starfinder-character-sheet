import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { FormLabel } from 'material-ui/Form';
import DisabledTextField from './utilities/disabledTextField';
import Select from './utilities/select';
import AbilityInput from './utilities/abilityInput';

export default class CharacterStats extends Component {
  state = {
    name: this.props.character.name
  }
  raceChanged = (value) => {
    this.props.characterActions.changeRace(value);
  }

  themeChanged = (value) => {
    this.props.characterActions.changeTheme(value);
  }

  nameChanged = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  nameBlurred = (event) => {
    this.props.characterActions.changeName(event.target.value);
  }

  classChanged = (value) => {
    this.props.characterActions.changeClass(value);
  }

  render() {
    return (
      <div>
        <TextField label="Name" value={this.state.name} onChange={this.nameChanged} onBlur={this.nameBlurred}/>
        <Select label="Race" value={this.props.character.race} options={this.props.raceOptions} onChange={this.raceChanged} />
        <Select label="Theme"  value={this.props.character.theme} options={this.props.themeOptions} onChange={this.themeChanged} />
        <Select label="Class"  value={this.props.character.class} options={this.props.classOptions} onChange={this.classChanged} />
        <DisabledTextField label="Size" value={this.props.character.size} disabled={true}/>
        <FormLabel style={{marginRight:'5px'}}>Speed</FormLabel>
        <AbilityInput label="Base" type="number" value={this.props.baseSpeed} disabled={true}/>
        <AbilityInput label="Adjusted" type="number" value={this.props.adjustedSpeed} disabled={true}/>
      </div>
    );
  }
}


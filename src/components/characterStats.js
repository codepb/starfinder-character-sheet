import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { FormLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import DisabledTextField from './utilities/disabledTextField';
import Select from './utilities/select';
import AbilityInput from './utilities/abilityInput';

export default class CharacterStats extends Component {
  raceChanged = (value) => {
    this.props.characterActions.changeRace(value);
  }

  themeChanged = (value) => {
    this.props.characterActions.changeTheme(value);
  }

  nameBlurred = (event) => {
    this.props.characterActions.changeName(event.target.value);
  }

  genderBlurred = (event) => {
    this.props.characterActions.changeGender(event.target.value);
  }

  homeWorldBlurred = (event) => {
    this.props.characterActions.changeHomeWorld(event.target.value);
  }

  deityBlurred = (event) => {
    this.props.characterActions.changeDeity(event.target.value);
  }

  descriptionBlurred = (event) => {
    this.props.characterActions.changeDescription(event.target.value);
  }

  alignmentChanged = (value) => {
    this.props.characterActions.changeAlignment(value);
  }

  classChanged = (value) => {
    this.props.characterActions.changeClass(value);
  }

  render() {
    return (
      <Grid container>
        <Grid item>        
          <div style={{marginBottom: '10px'}}>
            <TextField label="Name" defaultValue={this.props.character.name}  onBlur={this.nameBlurred}/>
            <Select label="Class"  value={this.props.character.class} options={this.props.classOptions} onChange={this.classChanged} />
            <Select label="Race" value={this.props.character.race} options={this.props.raceOptions} onChange={this.raceChanged} />
            <Select label="Theme"  value={this.props.character.theme} options={this.props.themeOptions} onChange={this.themeChanged} />        
            <DisabledTextField label="Size" value={this.props.character.size} disabled={true}/>
            <FormLabel style={{marginRight:'5px'}}>Speed</FormLabel>
            <AbilityInput label="Base" type="number" value={this.props.baseSpeed} disabled={true}/>
            <AbilityInput label="Adjusted" type="number" value={this.props.adjustedSpeed} disabled={true}/>
          </div>
          <div>          
            <TextField label="Gender" style={{width: '60px'}} defaultValue={this.props.character.gender} onBlur={this.genderBlurred} />
            <TextField label="Home World" defaultValue={this.props.character.homeWorld} onBlur={this.homeWorldBlurred} />
            <Select label="Alignment" value={this.props.character.alignment} options={this.props.alignmentOptions} onChange={this.alignmentChanged} />
            <TextField label="Deity" defaultValue={this.props.character.deity} onBlur={this.deityBlurred} />
          </div>
        </Grid>
        <Grid item>
          <TextField label="Description" defaultValue={this.props.character.description} onBlur={this.descriptionBlurred} multiline={true} rows="6" style={{width: '400px'}} />
        </Grid>
      </Grid>
    );
  }
}


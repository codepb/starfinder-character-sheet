import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Select from './utilities/select';
import * as Abilities from '../rules/abilities';

const abilityOptions = [
  {label: 'CHA', value: Abilities.CHARISMA},
  {label: 'INT', value: Abilities.INTELLIGENCE},
  {label: 'WIS', value: Abilities.WISDOM}
];

export default class SkillLabel extends Component {
  professionNameChanged = (ev) => {
    this.props.onProfessionNameChanged(this.props.skill, ev.target.value);
  }

  abilityChanged = (value) => {
    this.props.onAbilityChanged(this.props.skill, value);
  }

  render() {
    const nameLabel = this.props.isProfession ?
      <span>
        <TextField label="Profession" defaultValue={this.props.professionName} onBlur={this.professionNameChanged} />
        <Select label="Ability" value={this.props.ability} options={abilityOptions} onChange={this.abilityChanged} style={{width: '40px'}}/>
      </span>
      : <span>{`${this.props.skill}${this.props.armorCheckPenaltyApplies ? '*' : ''} [${this.props.ability.substring(0,3).toUpperCase()}]`}</span>;
    return (nameLabel);
  }
}
import React, { Component } from 'react';
import AbilityInput from './utilities/abilityInput';
import ComponentContainer from './componentContainer';

export default class Experience extends Component {
  earnedExperienceChanged = (ev) => {
    var newValue = ev.target.value * 1;
    this.props.earnedExperienceChanged(newValue);
  }

  nextLevelExperienceChanged = (ev) => {
    var newValue = ev.target.value * 1;
    this.props.nextLevelExperienceChanged(newValue);
  }

  render() {
    return (
      <ComponentContainer title="Experience Points">
          <AbilityInput label="Earned" type="number" inputStyles={{width:120, marginRight: 10}} value={this.props.earnedExperience} onChange={this.earnedExperienceChanged} />
          <AbilityInput label="Next Level" type="number" inputStyles={{width:120, marginRight: 10}} value={this.props.nextLevelExperience} onChange={this.nextLevelExperienceChanged} />
      </ComponentContainer>
    );
  }
}
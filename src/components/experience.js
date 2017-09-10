import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import AbilityInput from './utilities/abilityInput';

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
      <Card raised={true}>
        <CardHeader title="Experience Points" />
        <CardContent>
          <AbilityInput label="Earned" type="number" inputStyles={{width:120, marginRight: 10}} value={this.props.earnedExperience} onChange={this.earnedExperienceChanged} />
          <AbilityInput label="Next Level" type="number" inputStyles={{width:120, marginRight: 10}} value={this.props.nextLevelExperience} onChange={this.nextLevelExperienceChanged} />
        </CardContent>
      </Card>
    );
  }
}
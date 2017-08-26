import React, { Component } from 'react';
import Icon from 'material-ui/Icon';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import AbilityInput from './utilities/abilityInput';


var styles = {
  icons: { verticalAlign: 'middle', color: 'rgba(0, 0, 0, 0.87)', fontSize: '20px' }
};

export default class Initiative extends Component {
  miscUpdated = (ev) => {
    this.props.initiativeActions.updateMiscInitiative(ev.target.value * 1);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Initiative" />
        <CardContent>
          <AbilityInput label="Total" value={this.props.dexterityModifier + this.props.miscInitiative} disabled={true} />
          <Icon style={styles.icons}>drag_handle</Icon>
          <AbilityInput label="Dexterity" value={this.props.dexterityModifier} disabled={true} />
          <Icon style={styles.icons}>add</Icon>
          <AbilityInput label="Misc" type="number" value={this.props.miscInitiative} onChange={this.miscUpdated}/>
        </CardContent>
      </Card>
    );
  }
}
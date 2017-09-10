import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import AbilityInput from './utilities/abilityInput';
import TextField from './utilities/textField';

export default class Experience extends Component {
  moneyChanged = (ev) => {
    var newValue = ev.target.value * 1;
    this.props.moneyChanged(newValue);
  }

  otherWealthChanged = (ev) => {
    var newValue = ev.target.value;
    this.props.otherWealthChanged(newValue);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Wealth" />
        <CardContent>
          <AbilityInput label="Money" type="number" inputStyles={{width:120, marginRight: 10}} value={this.props.money} onChange={this.moneyChanged} />
          <div>
            <TextField label="Other Wealth" multiline={true} rows={2} value={this.props.otherWealth} style={{marginTop: 10}} onChange={this.otherWealthChanged} fullWidth={true}/>
          </div>
        </CardContent>
      </Card>
    );
  }
}
import React, { Component } from 'react';
import AbilityInput from './utilities/abilityInput';
import TextField from './utilities/textField';
import ComponentContainer from './componentContainer';

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
      <ComponentContainer title="Wealth">
          <AbilityInput label="Money" type="number" inputStyles={{width:120, marginRight: 10}} value={this.props.money} onChange={this.moneyChanged} />
          <div>
            <TextField label="Other Wealth" multiline={true} rows={2} value={this.props.otherWealth} style={{marginTop: 10}} onChange={this.otherWealthChanged} fullWidth={true}/>
          </div>
        </ComponentContainer>
    );
  }
}
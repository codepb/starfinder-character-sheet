import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import TextField from './utilities/textField';

export default class Abilities extends Component {
  abilitiesChanged = (ev) => {
    this.props.abilitiesActions.updateAbilities(ev.target.value);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Abilities" />
        <CardContent>
          <TextField multiline={true} value={this.props.abilities} rows={40} onBlur={this.abilitiesChanged} style={{width: '100%'}}/>
        </CardContent>
      </Card>
    );
  }
}
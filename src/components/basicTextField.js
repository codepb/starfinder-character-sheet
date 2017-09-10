import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import TextField from './utilities/textField';

export default class BasicTextField extends Component {
  onChange = (ev) => {
    this.props.onChange(ev.target.value);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title={this.props.title} />
        <CardContent>
          <TextField multiline={true} value={this.props.value} rows={this.props.rows} onBlur={this.onChange} style={{width: '100%'}}/>
        </CardContent>
      </Card>
    );
  }
}
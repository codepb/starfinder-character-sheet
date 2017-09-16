import React, { Component } from 'react';
import TextField from './utilities/textField';
import ComponentContainer from './componentContainer';

export default class BasicTextField extends Component {
  onChange = (ev) => {
    this.props.onChange(ev.target.value);
  }

  render() {
    return (
      <ComponentContainer title={this.props.title}>
          <TextField multiline={true} value={this.props.value} rows={this.props.rows} onBlur={this.onChange} style={{width: '100%'}}/>
      </ComponentContainer>
    );
  }
}
import React, { Component } from 'react';


export default class Select extends Component {
  state = {
    value: this.props.value
  }

  changed = (ev) => {
    this.setState({value: ev.target.value}, () => {
      this.props.onChange(this.state.value);
    });
    
  }
  
  render() {
    return (
      <select onChange={this.changed} value={this.state.value}>
        {this.props.options.map((option, i) => <option value={option.value} key={option.value}>{option.label}</option>)}
      </select>
    );
  }
}
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class StateHandlingTextField extends Component {
  constructor(props) {
    super();
    this.state = { value: props.value || '', onChange: props.onChange };
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.value !== nextProps.value) {
      this.setState(previousState => { return {value: nextProps.value}});
    }
  }

  updateValue = (ev) => {
    const newValue = ev.target.value;
    this.setState(previousState => { return {value: newValue}});
    if (this.props.onChange && typeof(this.props.onChange) === 'function') {
      this.props.onChange(ev);
    }
  }

  focus = () => {
    this.textInput.focus();
  }

  render() {
    const {value, onChange, ...other} = this.props;
    return (
      <TextField value={this.state.value} {...other} onChange={this.updateValue} inputRef={(input) => { this.textInput = input; }}/>
    );
  }
}
import React, { Component } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import TextField from './textField';

export default class Select extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
      open: false,
      anchorElement: undefined
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.value !== nextProps.value) {
      this.setState(previousState => { return {value: nextProps.value}});
    }
  }

  handleClick = (ev) => {
    if(!this.props.disabled) {
      this.setState({ open: true, anchorElement: ev.currentTarget });
    }
  }

  handleRequestClose = () => {
    this.textInput.focus();
    this.setState({ open: false });
    
  };

  changed = (ev, value) => {
    this.textInput.focus();
    this.setState({value: value, open: false}, () => {
      this.props.onChange(this.state.value);
    });
  }
  
  render() {
    const selectedOption = this.props.options.find(o => o.value === this.state.value);
    let valueToDisplay = '';
    if(typeof(selectedOption) !== 'undefined') {
      valueToDisplay = selectedOption.label;
    }
    return (
      <span style={this.props.style}>
        <TextField label={this.props.label} onFocus={this.handleClick} value={valueToDisplay} style={this.props.style} disabled={this.props.disabled} ref={(input) => { this.textInput = input; }}/>
        <Menu anchorEl={this.state.anchorElement} open={this.state.open} onRequestClose={this.handleRequestClose}>
          {this.props.options.map((option, i) => <MenuItem value={option.value}
                                                            key={option.value}
                                                            selected={option.value === this.state.value}
                                                            onClick={ev => this.changed(ev, option.value)}>{option.label}</MenuItem>)}
        </Menu>
      </span>
    );
  }
}
import React, { Component } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';


export default class Select extends Component {
  state = {
    value: this.props.value,
    open: false,
    anchorElement: undefined
  }

  handleClick = (ev) => {
    this.setState({ open: true, anchorElement: ev.currentTarget });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  changed = (ev, value) => {
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
        <TextField label={this.props.label} onClick={this.handleClick} value={valueToDisplay} style={this.props.style}/>
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
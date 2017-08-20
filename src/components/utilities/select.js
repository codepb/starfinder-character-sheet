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
    return (
      <span>
        <TextField label={this.props.label} onClick={this.handleClick} value={this.state.value}/>
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
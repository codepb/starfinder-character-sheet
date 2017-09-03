import React, { PureComponent } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import TextField from './textField';

export default class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      open: false
    }
  }

  anchorElement = null;

  componentWillReceiveProps = (nextProps) => {
    if(this.props.value !== nextProps.value) {
      this.setState(previousState => { return {value: nextProps.value}});
    }
  }

  handleClick = (ev) => {
    if (this.state.ignoreFocusOnce) {
      ev.stopPropagation();
      this.setState({ ignoreFocusOnce: false });
    } else if(!this.props.disabled) {
      this.anchorElement = ev.currentTarget;
      this.setState({ open: true });
    }
  }

  handleRequestClose = () => {
    this.setState({ open: false, ignoreFocusOnce: true });    
  };

  changed = (ev, value) => {
    this.setState({value: value, open: false, ignoreFocusOnce: true}, () => {
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
        <Menu anchorEl={this.anchorElement} open={this.state.open} onRequestClose={this.handleRequestClose}>
          {this.props.options.map((option, i) => <MenuItem value={option.value}
                                                            key={option.value}
                                                            selected={option.value === this.state.value}
                                                            onClick={ev => this.changed(ev, option.value)}>{option.label}</MenuItem>)}
        </Menu>
      </span>
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

// We can inject some CSS into the DOM.
const styles = {
  inputDisabled: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
};

function DisabledTextInput(props) {
  return (
    <TextField InputProps={{classes: {inputDisabled: props.classes.inputDisabled}}} disabled={true} value={props.value} label={props.label} style={props.style}/>
  );
}

DisabledTextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  style: PropTypes.style
};

export default withStyles(styles)(DisabledTextInput);
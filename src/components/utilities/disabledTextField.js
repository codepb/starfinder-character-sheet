import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from './textField';

// We can inject some CSS into the DOM.
const styles = {
  inputDisabled: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
};

function DisabledTextInput({classes, inputProps, value, label, style }) {
  return (
    <TextField InputProps={{classes: {inputDisabled: classes.inputDisabled}}} inputProps={inputProps} disabled={true} value={value} label={label} style={style}/>
  );
}

DisabledTextInput.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.any,
  label: PropTypes.string,
  style: PropTypes.object,
  inputProps: PropTypes.object
};

DisabledTextInput.defaultProps = {
  inputProps: {}
};

export default withStyles(styles)(DisabledTextInput);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import DisabledTextField from './disabledTextField';

// We can inject some CSS into the DOM.
const styles = {
  input: {
    width: 50,
    textAlign: 'center'
  },
  inputDisabled: {
    width: 40,
    textAlign: 'center'
  },
};

export default function AbilityInput(props) {  
    if(props.disabled) {
      return (
        <DisabledTextField inputProps={{style: styles.inputDisabled}} label={props.label} value={props.value} style={styles.inputDisabled}/>
      );
    }

  return(
    <TextField inputProps={{style:styles.input}} value={props.value} type={props.type} label={props.label} style={styles.input} onChange={props.onChange}/>
  );
}

AbilityInput.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  style: PropTypes.style,
  onChange: PropTypes.func,
  type: PropTypes.string
};

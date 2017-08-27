import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import DisabledTextField from './disabledTextField';

// We can inject some CSS into the DOM.
const styles = {
  input: {
    width: '50px',
    textAlign: 'center'
  },
  inputDisabled: {
    width: '40px',
    textAlign: 'center',
    marginRight:'13px'
  },
};

export default function AbilityInput(props) {  
    if(props.disabled) {
      return (
        <DisabledTextField inputProps={{style: styles.inputDisabled}} label={props.label} value={props.value} style={styles.inputDisabled}/>
      );
    }

  return(
    <TextField inputProps={{style:{...styles.input, ...props.inputStyles}}} value={props.value} type={props.type} label={props.label} style={{...styles.input, ...props.inputStyles}} onChange={props.onChange}/>
  );
}

AbilityInput.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.any,
  label: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  type: PropTypes.string
};

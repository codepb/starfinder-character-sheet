import React from 'react';
import PropTypes from 'prop-types';
import TextField from './textField';
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

export default function AbilityInput({disabled, label, value, type, inputStyles, onChange}) {  
  if(disabled) {
    return (
      <DisabledTextField inputProps={{style: styles.inputDisabled}} label={label} value={value} style={styles.inputDisabled}/>
    );
  }

  return(
    <TextField inputProps={{style:{...styles.input, ...inputStyles}}} value={value} type={type} label={label} style={{...styles.input, ...inputStyles}} onChange={onChange}/>
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

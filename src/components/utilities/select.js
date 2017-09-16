import React, { PureComponent } from 'react';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import SelectRootControl from 'material-ui/Select';

export default class Select extends PureComponent {
  onChange = (ev) => {
    console.log(ev, ev.target.value);
    return this.props.onChange(ev.target.value);
  }
  
  render() {
    const { children, options, label, onChange, value, ...otherProps } = this.props;
    
    const selectOptions = options ? options.map((option, i) => <option value={option.value} key={option.value}>{option.label}</option>) : '';
    return (
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <SelectRootControl native {...otherProps} value={value === null || value === undefined ? '' : value} onChange={this.onChange} input={<Input />}>
          {selectOptions}
        </SelectRootControl>
      </FormControl>
    );
  }
}
import React, { Component } from 'react';
import TextField from './utilities/textField';
import AbilityInput from './utilities/abilityInput';
import Select from './utilities/select';

export default class WeaponDisplay extends Component {
  static defaultProps = { displayWeaponName: true };
  
  weaponChanged = (ev) => {
    const newWeapon = ev.target.value;
    this.setState(() => {return {weapon: newWeapon}}, this.callOnChange)
  }

  levelChanged = (ev) => {
    const newLevel = ev.target.value * 1;
    this.setState(() => {return {level: newLevel}}, this.callOnChange)
  }

  attackBonusChanged = (ev) => {
    const newValue = ev.target.value * 1;
    this.setState(() => {return {attackBonus: newValue}}, this.callOnChange)
  }

  damageChanged = (ev) => {
    const newValue = ev.target.value;
    this.setState(() => {return {damage: newValue}}, this.callOnChange)
  }
  
  criticalChanged = (ev) => {
    const newValue = ev.target.value;
    this.setState(() => {return {critical: newValue}}, this.callOnChange)
  }
  
  rangeChanged = (ev) => {
    const newValue = ev.target.value * 1;
    this.setState(() => {return {range: newValue}}, this.callOnChange)
  }

  typeChanged = (newValue) => {
    this.setState(() => {return {type: newValue}}, this.callOnChange)
  }
  
  ammoChanged = (ev) => {
    const newValue = ev.target.value * 1;
    this.setState(() => {return {ammo: newValue}}, this.callOnChange)
  }

  usageChanged = (ev) => {
    const newValue = ev.target.value * 1;
    this.setState(() => {return {usage: newValue}}, this.callOnChange)
  }

  specialChanged = (ev) => {
    const newValue = ev.target.value;
    this.setState(() => {return {special: newValue}}, this.callOnChange);
    
  }

  callOnChange = () => {
    if(this.props.onChange && typeof(this.props.onChange) === 'function') {
      this.props.onChange(this.getWeaponFromState());
    }
  }

  getWeaponFromState = () => {
    return {
      weapon: this.state.weapon,
      level: this.state.level,
      attackBonus: this.state.attackBonus,
      damage: this.state.damage,
      critical: this.state.critical,
      range: this.state.range,
      type: this.state.type,
      ammo: this.state.ammo,
      usage: this.state.usage,
      special: this.state.special
    }
  }

  addWeapon = () => {
    this.props.onRequestClose(this.state);
  };

  cancel = () => {
    this.props.onRequestClose(null);
  };

  render() {
    const options = [
      {value: 'A', label: 'A'},
      {value: 'B', label: 'B'},
      {value: 'C', label: 'C'},
      {value: 'E', label: 'E'},
      {value: 'F', label: 'F'},
      {value: 'P', label: 'P'},
      {value: 'S', label: 'S'},
      {value: 'So', label: 'So'}      
    ];
    
    const weapon = this.props.weapon || {};
    return (
      <div style={{maxWidth: '600px'}}>
        {this.props.displayWeaponName ? <TextField label="Weapon" value={weapon.weapon} onBlur={this.weaponChanged} disabled={this.props.disabled || false} /> : ''}
        <TextField type="number" value={weapon.level} label="Level" onChange={this.levelChanged}  disabled={this.props.disabled || false}/>
        <TextField type="number" value={weapon.attackBonus} label="Attack Bonus" onChange={this.attackBonusChanged}  disabled={this.props.disabled || false}/>
        <TextField label="Damage" value={weapon.damage} onBlur={this.damageChanged}  disabled={this.props.disabled || false}/>
        <TextField label="Critical" value={weapon.critical} onBlur={this.criticalChanged}  disabled={this.props.disabled || false}/>
        <TextField type="number" value={weapon.range} label="Range" onBlur={this.rangeChanged}  disabled={this.props.disabled || false}/>
        <Select label="Type" value={weapon.type} options={options} onChange={this.typeChanged}  disabled={this.props.disabled || false}/>
        <AbilityInput type="number" value={weapon.ammo} label="Ammo" onChange={this.ammoChanged}  disabled={this.props.disabled || false}/>
        <AbilityInput type="number" value={weapon.usage} label="Usage" onChange={this.usageChanged}  disabled={this.props.disabled || false}/>          
        <TextField label="Special" value={weapon.special} onBlur={this.specialChanged} disabled={this.props.disabled || false}/>
      </div>
    );
  }
}

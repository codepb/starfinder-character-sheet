import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../actions/characterActions';
import races from '../rules/races';
import themes from '../rules/themes';
import classes from '../rules/classes';
import CharacterStats from '../components/characterStats';

function mapStateToProps(state) {    
  const size = races[state.character.race].size;
  return {
      character: {...state.character, size},
      baseSpeed: 30,
      adjustedSpeed: 30 + state.armor.speedAdjustment   
  };
}

function mapDispatchToProps(dispatch) {
  return {
      characterActions: bindActionCreators(characterActions, dispatch),
      raceOptions: Object.keys(races).map(r =>  { return {label: r, value: r}}),
      themeOptions: Object.keys(themes).map(t =>  { return {label: t, value: t}}),
      classOptions: Object.keys(classes).map(c => { return {label: c, value: c}})
  };
}

const CharacterStatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterStats);

export default CharacterStatsContainer;
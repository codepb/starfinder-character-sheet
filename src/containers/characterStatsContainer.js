import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../actions/characterActions';
import races from '../rules/races';
import themes from '../rules/themes';
import classes from '../rules/classes';
import alignments from '../rules/alignments';
import CharacterStats from '../components/characterStats';

function mapStateToProps(state) {    
  const size = races[state.character.race].size;
  return {
      character: {...state.character, size},
      baseSpeed: 30,
      adjustedSpeed: 30 + state.armor.speedAdjustment,
      raceOptions: Object.keys(races).map(r =>  { return {label: r, value: r}}),
      themeOptions: Object.keys(themes).map(t =>  { return {label: t, value: t}}),
      classOptions: Object.keys(classes).map(c => { return {label: c, value: c}}),
      alignmentOptions: alignments.map(a => { return {label: a, value: a}})
  };
}

function mapDispatchToProps(dispatch) {
  return {
      characterActions: bindActionCreators(characterActions, dispatch),
     
  };
}

const CharacterStatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterStats);

export default CharacterStatsContainer;
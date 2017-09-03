import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../actions/characterActions';
import races from '../rules/races';
import themes from '../rules/themes';
import classes from '../rules/classes';
import alignments from '../rules/alignments';
import CharacterStats from '../components/characterStats';

const raceOptions = Object.keys(races).map(r =>  { return {label: r, value: r}});
const themeOptions = Object.keys(themes).map(t =>  { return {label: t, value: t}});
const classOptions = Object.keys(classes).map(c => { return {label: c, value: c}});
const alignmentOptions = alignments.map(a => { return {label: a, value: a}});

class CharacterStatsContainer extends Component {
  render () {
    const {characterActions, character, armor} = this.props;
    const characterMerged = {...character, size: races[character.race].size};
    const baseSpeed = 30;
    const adjustedSpeed = 30 + armor.speedAdjustment;

    return <CharacterStats
              characterActions={characterActions}
              character={characterMerged}
              baseSpeed={baseSpeed}
              adjustedSpeed={adjustedSpeed}
              raceOptions={raceOptions}
              themeOptions={themeOptions}
              classOptions={classOptions}
              alignmentOptions={alignmentOptions} />;
  }
}

function mapStateToProps(state) {
  return {
      character: state.character,
      armor: state.armor
  };
}

function mapDispatchToProps(dispatch) {
  return {
      characterActions: bindActionCreators(characterActions, dispatch)
  };
}

const ConnectedCharacterStatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterStatsContainer);

export default ConnectedCharacterStatsContainer;
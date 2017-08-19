import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilityScoreActions from '../actions/abilityScoreActions'
import AbilityScore from './abilityScore';
import races from '../rules/races';
import themes from '../rules/themes';

class AbilityScores extends Component {

  render() {
    return (
      <div>
          <table>
          {this.props.abilityScores.abilityScores.map((abilityScore) => <AbilityScore key={abilityScore.name} abilityScore={abilityScore}
            canEditDefaultRacial={races.find(r => r.name == this.props.currentRace).hasUnspecifiedModifiers}
            canEditDefaultTheme={themes.find(t => t.name == this.props.currentTheme).hasUnspecifiedModifiers} />)}
            </table>
            <div>Points Remaining: {this.props.abilityScores.remainingPointsToSpent}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {    
    return {
        abilityScores: state.abilityScores,
        currentRace: state.character.race,
        currentTheme: state.character.theme
    };
}

function mapDispatchToProps(dispatch) {
    return {
        abilityScoreActions: bindActionCreators(abilityScoreActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbilityScores);
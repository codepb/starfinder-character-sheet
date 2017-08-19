import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilityScoreActions from '../actions/abilityScoreActions'
import AbilityScore from './abilityScore';

class AbilityScores extends Component {

  render() {
    return (
      <div>
          {this.props.abilityScores.map((abilityScore) => <AbilityScore key={abilityScore.name} abilityScore={abilityScore} />)};
      </div>
    );
  }
}

function mapStateToProps(state) {    
    return {
        abilityScores: state.abilityScores
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
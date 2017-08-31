import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilitiesActions from '../actions/abilitiesActions';
import Abilities from '../components/abilities';

function mapStateToProps(state) {
  return {
      abilities: state.abilities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    abilitiesActions: bindActionCreators(abilitiesActions, dispatch)
  };
}

const AbilitiesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Abilities);

export default AbilitiesContainer;
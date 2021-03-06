import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilitiesActions from '../actions/abilitiesActions';
import BasicTextField from '../components/basicTextField';

function mapStateToProps(state) {
  return {
      value: state.abilities,
      rows: 40,
      title: "Abilities"
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(abilitiesActions, dispatch);
  return {
    onChange: actions.updateAbilities
  };
}

const AbilitiesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicTextField);

export default AbilitiesContainer;
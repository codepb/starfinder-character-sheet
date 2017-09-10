import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as abilitiesActions from '../actions/languagesActions';
import BasicTextField from '../components/basicTextField';

function mapStateToProps(state) {
  return {
      value: state.languages,
      rows: 5,
      title: "Languages"
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(abilitiesActions, dispatch);
  return {
    onChange: actions.updateLanguages
  };
}

const LanguagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicTextField);

export default LanguagesContainer;
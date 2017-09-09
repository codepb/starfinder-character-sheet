import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as featActions from '../actions/featsActions';
import FeatsList from '../components/featsList';

function mapStateToProps(state) {
  return {
      feats: state.feats
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(featActions, dispatch);
}

const FeatsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FeatsList);

export default FeatsContainer;
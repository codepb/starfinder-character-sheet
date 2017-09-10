import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as experienceActions from '../actions/experienceActions';
import Experience from '../components/experience';

function mapStateToProps(state) {
  return {
      earnedExperience: state.experience.current,
      nextLevelExperience: state.experience.nextLevel
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(experienceActions, dispatch);
  return {
    earnedExperienceChanged: actions.updateCurrentExperience,
    nextLevelExperienceChanged: actions.updateNextLevelExperience
  };
}

const ExperienceContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Experience);

export default ExperienceContainer;
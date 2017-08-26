import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillsList from '../components/skillsList';
import skills from '../rules/skills';

function mapStateToProps(state) {
  const skillsToMap = {};
  for(let skill in skills) {
    const skillDetails = skills[skill];
    skillsToMap[skill] = {
      ability: skillDetails.ability,
      isTrainedOnly: skill.trainedOnly,
      ranks: 0,
      abilityModifier: 0,
      miscModifier: 0
    }
  } 
    return {
      skills: skillsToMap,
    };
}

const SkillContainer = connect(
  mapStateToProps,
  null
)(SkillsList);

export default SkillContainer;
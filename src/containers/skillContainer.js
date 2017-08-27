import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillsList from '../components/skillsList';
import skills from '../rules/skills';
import classes from '../rules/classes';
import AbilityManager from '../models/abilityManager';
import * as skillActions from '../actions/skillActions';

function mapStateToProps(state) {
  const skillsToMap = {};
  const abilityManager = new AbilityManager();
  for(let skill in skills) {
    const skillDetails = skills[skill];
    const currentClass = classes[state.character.class];
    skillsToMap[skill] = {
      ability: skillDetails.ability,
      isTrainedOnly: skillDetails.trainedOnly,
      ranks: state.skills.skillBonuses[skill].ranks,
      abilityModifier: abilityManager.getAbilityScoreFromState(state, skillDetails.ability).modifier,
      miscModifier: state.skills.skillBonuses[skill].misc,
      isClassSkill: currentClass.classSkills.includes(skill)
    }
  } 
    return {
      skills: skillsToMap,
    };
}

function mapDispatchToProps(dispatch) {
  return {
      skillActions: bindActionCreators(skillActions, dispatch)
  };
}


const SkillContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsList);

export default SkillContainer;
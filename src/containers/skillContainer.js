import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillsList from '../components/skillsList';
import skillsArray, * as Skills from '../rules/skills';
import classes from '../rules/classes';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';
import AbilityManager from '../models/abilityManager';
import * as skillActions from '../actions/skillActions';

function mapStateToProps(state) {
  const skillsToMap = {};
  const abilityManager = new AbilityManager();
  const currentClass = classes[state.character.class];
  const themeSkills = themes[state.character.theme].classSkills;
  for(let skill in skillsArray) {
    const skillDetails = skillsArray[skill];
    let isClassSkill = currentClass.classSkills.includes(skill);   
    const isProfession = skill === Skills.PROFESSION1 || skill === Skills.PROFESSION2;
    const professionName = isProfession ? state.skills.professions[skill].name : '';
    const ability = isProfession ? state.skills.professions[skill].ability : skillDetails.ability
    let themeBonus = 0;
    if(themeSkills.includes(skill)) {
      if(isClassSkill) {
        themeBonus = 1;
      } else {
        isClassSkill = true;
      }
    }
    skillsToMap[skill] = {
      ability: ability,
      isTrainedOnly: skillDetails.trainedOnly,
      ranks: state.skills.skillBonuses[skill].ranks,
      abilityModifier: abilityManager.getAbilityScoreFromState(state, ability).modifier,
      miscModifier: state.skills.skillBonuses[skill].misc,
      isClassSkill: isClassSkill,
      isExtraClassSkill: state.skills.skillBonuses[skill].isExtraClassSkill,
      armorCheckPenaltyApplies: skillDetails.armorCheckPenaltyApplies,
      armorCheckPenalty: skillDetails.armorCheckPenaltyApplies ? state.armor.penalty : 0,
      isProfession: isProfession,
      professionName: professionName,
      themeBonus: themeBonus
    }
  } 
    return {
      skills: skillsToMap,
      skillRanksPerLevel: currentClass.skillRanksPerLevel + abilityManager.getAbilityScoreFromState(state, Abilities.INTELLIGENCE).modifier
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
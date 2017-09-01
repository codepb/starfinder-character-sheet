import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillsList from '../components/skillsList';
import skillsArray, * as Skills from '../rules/skills';
import classes from '../rules/classes';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';
import AbilityManager from '../models/abilityManager';
import * as skillActions from '../actions/skillActions';

class SkillsContainer extends Component {
  abilityManager = new AbilityManager();

  render() {
    const { currentClassName, currentThemeName, currentRaceName, abilityScores, skills, armor, skillActions } = this.props;

    const skillsToMap = {};
    const currentClass = classes[currentClassName];
    const themeSkills = themes[currentThemeName].classSkills;
    const skillRanksPerLevel = currentClass.skillRanksPerLevel + this.abilityManager.getAbilityScoreFromState(currentRaceName, currentThemeName, abilityScores, Abilities.INTELLIGENCE).modifier
    
    for(let skill in skillsArray) {
      const skillDetails = skillsArray[skill];
      let isClassSkill = currentClass.classSkills.includes(skill);   
      const isProfession = skill === Skills.PROFESSION1 || skill === Skills.PROFESSION2;
      const professionName = isProfession ? skills.professions[skill].name : '';
      const ability = isProfession ? skills.professions[skill].ability : skillDetails.ability
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
        ranks: skills.skillBonuses[skill].ranks,
        abilityModifier: this.abilityManager.getAbilityScoreFromState(currentRaceName, currentThemeName, abilityScores, ability).modifier,
        miscModifier: skills.skillBonuses[skill].misc,
        isClassSkill: isClassSkill,
        isExtraClassSkill: skills.skillBonuses[skill].isExtraClassSkill,
        armorCheckPenaltyApplies: skillDetails.armorCheckPenaltyApplies,
        armorCheckPenalty: skillDetails.armorCheckPenaltyApplies ? armor.penalty : 0,
        isProfession: isProfession,
        professionName: professionName,
        themeBonus: themeBonus
      }
    } 

    return <SkillsList
              skills={skillsToMap}
              skillRanksPerLevel={skillRanksPerLevel}
              skillActions={skillActions} />;
  }
}

function mapStateToProps(state) {
  return {
    currentClassName: state.character.class,
    currentThemeName: state.character.theme,
    currentRaceName: state.character.race,
    skills: state.skills,
    abilityScores: state.abilityScores,
    armor: state.armor
  }
}

function mapDispatchToProps(dispatch) {
  return {
      skillActions: bindActionCreators(skillActions, dispatch)
  };
}

const ConnectedSkillsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsContainer);

export default ConnectedSkillsContainer;
import * as types from './types/skill';

export function updateMiscModifierForSkill(skill, newValue){
  return {
    type: types.UPDATE_MISC_MODIFIER_FOR_SKILL,
    skill,
    newValue
  };
}

export function updateRanksInSkill(skill, newValue){
  return {
    type: types.UPDATE_RANKS_IN_SKILL,
    skill,
    newValue
  };
}
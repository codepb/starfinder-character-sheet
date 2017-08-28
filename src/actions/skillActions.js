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

export function updateProfessionName(skill, newValue){
  return {
    type: types.UPDATE_PROFESSION_NAME,
    skill,
    newValue
  };
}

export function updateProfessionAbility(skill, newValue){
  return {
    type: types.UPDATE_PROFESSION_ABILITY,
    skill,
    newValue
  };
}

export function updateExtraClassSkill(skill, newValue){
  return {
    type: types.UPDATE_EXTRA_CLASS_SKILL,
    skill,
    newValue
  };
}
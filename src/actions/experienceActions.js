import * as types from './types/experience';

export function updateCurrentExperience(newValue) {
  return {
    type: types.UPDATE_CURRENT_EXPERIENCE,
    newValue
  };
}

export function updateNextLevelExperience(newValue) {
  return {
    type: types.UPDATE_NEXT_LEVEL_EXPERIENCE,
    newValue
  };
}
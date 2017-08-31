import * as types from './types/abilities';

export function updateAbilities(newValue) {
  return {
    type: types.UPDATE_ABILITIES,
    newValue
  };
}
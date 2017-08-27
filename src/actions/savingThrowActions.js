import * as types from './types/savingThrow';

export function updateMiscModifier(savingThrow, newValue){
  return {
    type: types.UPDATE_MISC_MODIFIER_FOR_SAVING_THROW,
    savingThrow,
    newValue
  };
}
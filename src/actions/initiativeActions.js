import * as types from './types/initiative';

export function updateMiscInitiative(newValue){
  return {
    type: types.UPDATE_MISC_INITIATIVE,
    newValue
  };
}
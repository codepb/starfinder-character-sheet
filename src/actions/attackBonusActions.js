import * as types from './types/attackBonus';

export function updateMiscModifier(attackBonus, newValue){
  return {
    type: types.UPDATE_MISC_MODIFIER_FOR_ATTACK_BONUS,
    attackBonus,
    newValue
  };
}
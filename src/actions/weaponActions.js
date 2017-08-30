import * as types from './types/weapon';

export function addWeapon(weapon) {
  return {
    type: types.ADD_WEAPON,
    weapon
  };
}
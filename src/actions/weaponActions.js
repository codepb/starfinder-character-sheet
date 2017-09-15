import * as types from './types/weapon';

export function addWeapon(weapon) {
  return {
    type: types.ADD_WEAPON,
    weapon
  };
}

export function removeWeapon(weapon) {
  return {
    type: types.REMOVE_WEAPON,
    weapon
  };
}
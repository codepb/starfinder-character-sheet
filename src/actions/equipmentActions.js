import * as types from './types/equipment';

export function addEquipment(equipment) {
  return {
    type: types.ADD_EQUIPMENT,
    equipment
  }
}

export function removeEquipment(equipment) {
  return {
    type: types.REMOVE_EQUIPMENT,
    equipment
  }
}
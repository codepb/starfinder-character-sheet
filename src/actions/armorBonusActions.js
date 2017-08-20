import * as types from './types/armor';

export function updateMiscArmor(newValue){
  return {
    type: types.UPDATE_MISC_ARMOR,
    newValue
  };
}

export function updateKineticArmor(newValue){
  return {
    type: types.UPDATE_KINETIC_ARMOR,
    newValue
  };
}

export function updateEnergyArmor(newValue){
  return {
    type: types.UPDATE_ENERGY_ARMOR,
    newValue
  };
}

export function updateDamageReduction(newValue){
  return {
    type: types.UPDATE_DAMAGE_REDUCTION,
    newValue
  };
}

export function updateResistances(newValue){
  return {
    type: types.UPDATE_RESISTANCES,
    newValue
  };
}
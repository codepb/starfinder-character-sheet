import * as types from './types/armor';

export function updateMiscArmor(newValue){
  return {
    type: types.UPDATE_MISC_ARMOR,
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

export function updateName(newValue) {
  return {
    type: types.UPDATE_ARMOR_NAME,
    newValue
  };
}

export function updatePenalty(newValue) {
  return {
    type: types.UPDATE_ARMOR_PENALTY,
    newValue
  };
}

export function updateMaxDexterity(newValue) {
  return {
    type: types.UPDATE_ARMOR_MAX_DEXTERITY,
    newValue
  };
}

export function updateSpeedAdjustment(newValue) {
  return {
    type: types.UPDATE_ARMOR_SPEED_ADJUSTMENT,
    newValue
  };
}

export function updateEnergyArmorBonus(newValue) {
  return {
    type: types.UPDATE_ENERGY_ARMOR_BONUS,
    newValue
  };
}

export function updateKineticArmorBonus(newValue) {
  return {
    type: types.UPDATE_KINETIC_ARMOR_BONUS,
    newValue
  };
}
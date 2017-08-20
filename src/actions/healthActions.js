import * as types from './types/health';

export function updateCurrentStaminaPoints(newValue){
  return {
    type: types.UPDATE_CURRENT_STAMINA,
    newValue
  };
}

export function updateCurrentHitPoints(newValue){
  return {
    type: types.UPDATE_CURRENT_HP,
    newValue
  };
}

export function updateCurrentResolvePoints(newValue){
  return {
    type: types.UPDATE_CURRENT_RESOLVE,
    newValue
  };
}
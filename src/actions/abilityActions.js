import * as types from './types/ability';

function createAction(ability, type) {
  return {
    type,
    ability
  }
}

export function addPoint(ability){
  return createAction(ability, types.ADD_POINT);
}

export function removePoint(ability){
  return createAction(ability, types.REMOVE_POINT);
}

export function setAsDefaultRacialModifier(ability){
  return createAction(ability, types.SET_DEFAULT_RACE_BONUS);
}

export function setAsDefaultThemeModifier(ability){
  return createAction(ability, types.SET_DEFAULT_THEME_BONUS);
}


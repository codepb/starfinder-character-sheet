import * as types from './types/abilityScores';

export function updateAbilityScore(ability, newScore){
  return {
    type: types.UPDATE_ABILITY_SCORE,
    ability,
    newScore
  };
}

export function setAsDefaultRacialModifier(ability){
  return {
    type: types.SET_DEFAULT_RACIAL,
    ability
  };
}

export function setAsDefaultThemeModifier(ability){
  return {
    type: types.SET_DEFAULT_THEME,
    ability
  };
}
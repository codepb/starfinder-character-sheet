import * as types from './types/abilityScores';

export function updateAbilityScore(ability, newScore){
  return {
    type: types.UPDATE_ABILITY_SCORE,
    ability,
    newScore
  };
}
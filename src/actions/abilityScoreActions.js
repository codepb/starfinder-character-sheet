import * as types from './types/abilityScores';
import { UPDATE_STAMINA_CONSTITUTION_CONTRIBUTION, UPDATE_KEY_ABILITY_CONTRIBUTION } from './types/health';
import { CONSTITUTION } from '../rules/abilities';

export function updateAbilityScore(ability, newScore){
  return {
    type: types.UPDATE_ABILITY_SCORE,
    ability,
    newScore
  };
}

export function addPoint(ability){
  return changePoints(types.ADD_POINT, ability);
}

export function removePoint(ability){
  return changePoints(types.REMOVE_POINT, ability);
}

function changePoints(type, ability) {
  const actionsToDispatch = [{
    type,
    ability
  }];
  
  if(ability === CONSTITUTION) {
    actionsToDispatch.push((dispatch, getState) => {
      const constitutionModifier = getState().abilityScores.abilityScores[CONSTITUTION].modifier;
  
      dispatch({
        type: UPDATE_STAMINA_CONSTITUTION_CONTRIBUTION,
        constitutionModifier
      });
    })
  }

  actionsToDispatch.push((dispatch, getState) => {
    let keyAbility;
    const abilityManager = getState().abilityScores;
    for(let ability in abilityManager.abilityScores){
      if(abilityManager.abilityScores[ability].isKey) {
        keyAbility = abilityManager.abilityScores[ability];
        break;
      }
    }
    
    if(keyAbility.name === ability) {
      const keyAbilityModifier = keyAbility.modifier;
      dispatch({
        type: UPDATE_KEY_ABILITY_CONTRIBUTION,
        keyAbilityModifier
      });
    }
  });

  return actionsToDispatch;
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
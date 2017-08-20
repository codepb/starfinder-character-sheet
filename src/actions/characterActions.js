import * as types from './types/character';
import * as healthTypes from './types/health';
import classes from '../rules/classes';

export function changeRace(newRace){
  return {
    type: types.CHANGE_RACE,
    newRace
  };
}

export function changeTheme(newTheme){
  return {
    type: types.CHANGE_THEME,
    newTheme
  };
}

export function changeClass(newClass){
  const classStats = classes.find(c => c.name === newClass);
  return [{
    type: types.CHANGE_CLASS,
    newClass
  },
  {
    type: healthTypes.UPDATE_HEALTH_CLASS_CONTRIBUTIONS,
    newHitPointClassContribution: classStats.hp,
    newStaminaPointClassContribution: classStats.stamina
  }];
}

export function changeName(newName){
  return {
    type: types.CHANGE_NAME,
    newName
  };
}
import * as types from './types/character';

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
  return {
    type: types.CHANGE_CLASS,
    newClass
  };
}

export function changeName(newName){
  return {
    type: types.CHANGE_NAME,
    newName
  };
}
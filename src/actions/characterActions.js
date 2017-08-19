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

export function changeName(newName){
  return {
    type: types.CHANGE_NAME,
    newName
  };
}
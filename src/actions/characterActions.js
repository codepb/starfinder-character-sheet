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

export function changeGender(newGender){
  return {
    type: types.CHANGE_GENDER,
    newGender
  };
}

export function changeHomeWorld(newValue){
  return {
    type: types.CHANGE_HOME_WORLD,
    newValue
  };
}

export function changeAlignment(newValue){
  return {
    type: types.CHANGE_ALIGNMENT,
    newValue
  };
}

export function changeDeity(newValue){
  return {
    type: types.CHANGE_DEITY,
    newValue
  };
}
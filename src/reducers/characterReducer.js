import update from 'immutability-helper';
import initialState from './initialState';
import * as CharacterActions from '../actions/types/character';

export default function character(state = initialState.character, action) {
  
  switch (action.type) {
    case CharacterActions.CHANGE_RACE:
      return update(state, {race: {$set: action.newRace } });
    case CharacterActions.CHANGE_THEME:
      return update(state, {theme: {$set: action.newTheme } });
    case CharacterActions.CHANGE_CLASS:
      return update(state, {class: {$set: action.newClass } });
    case CharacterActions.CHANGE_NAME:
      return update(state, {name: {$set: action.newName } });
    default:
      return state;
  }
}
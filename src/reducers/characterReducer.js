import update from 'immutability-helper';
import initialState from './initialState';
import Character from '../models/character';
import * as CharacterActions from '../actions/types/character';
import races from '../rules/races';

export default function character(state = initialState.character, action) {
  
  switch (action.type) {
    case CharacterActions.CHANGE_RACE:
      return update(state, {race: {$set: races.find(r => r.name == action.newRace) } });
    case CharacterActions.CHANGE_THEME:
      return update(state, {theme: {$set: action.newTheme } });
    case CharacterActions.CHANGE_NAME:
      return update(state, {name: {$set: action.newName } });
    default:
      return state;
  }
}
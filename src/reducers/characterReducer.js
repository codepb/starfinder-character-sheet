import update from 'immutability-helper';
import initialState from './initialState';
import Character from '../models/character';
import * as CharacterActions from '../actions/types/character';

export default function character(state = initialState.character, action) {
  
  switch (action.type) {
    case CharacterActions.CHANGE_RACE:
      return update(state, {race: {$set: action.newRace } });
    case CharacterActions.CHANGE_THEME:
      return update(state, {theme: {$set: action.newTheme } });
    default:
      return state;
  }
}
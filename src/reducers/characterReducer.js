import update from 'immutability-helper';
import initialState from './initialState';
import * as CharacterActions from '../actions/types/character';
import { LOAD_STATE } from '../actions/types/load';

export default function character(state = initialState.character, action) {
  
  switch (action.type) {
    case LOAD_STATE:
      return action.state.character;
    case CharacterActions.CHANGE_RACE:
      return update(state, {race: {$set: action.newRace } });
    case CharacterActions.CHANGE_THEME:
      return update(state, {theme: {$set: action.newTheme } });
    case CharacterActions.CHANGE_CLASS:
      return update(state, {class: {$set: action.newClass } });
    case CharacterActions.CHANGE_NAME:
      return update(state, {name: {$set: action.newName } });
    case CharacterActions.CHANGE_GENDER:
      return update(state, {gender: {$set: action.newGender } });
    case CharacterActions.CHANGE_HOME_WORLD:
      return update(state, {homeWorld: {$set: action.newValue } });
    case CharacterActions.CHANGE_ALIGNMENT:
      return update(state, {alignment: {$set: action.newValue } });
    case CharacterActions.CHANGE_DEITY:
      return update(state, {deity: {$set: action.newValue } });
    case CharacterActions.CHANGE_DESCRIPTION:
      return update(state, {description: {$set: action.newValue } });
    default:
      return state;
  }
}
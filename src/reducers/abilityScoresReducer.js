import update from 'immutability-helper';
import initialState from './initialState';
import * as AbilityActions from '../actions/types/ability';
import { LOAD_STATE } from '../actions/types/load';

export default function abilityScores(state = initialState.abilityScores, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.abilityScores || initialState.abilityScores;
    case AbilityActions.ADD_POINT:
      return update(state, {abilityPoints: {[action.ability]: { $apply: (x) => x + 1}}});   
    case AbilityActions.REMOVE_POINT:
      return update(state, {abilityPoints: {[action.ability]: { $apply: (x) => x - 1}}});
    case AbilityActions.SET_DEFAULT_RACE_BONUS:
      return update(state, {defaultRaceBonus: {$set: action.ability}});
    case AbilityActions.SET_DEFAULT_THEME_BONUS:
      return update(state, {defaultThemeBonus: {$set: action.ability}});
    default:
      return state;
  }
}
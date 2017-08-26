import update from 'immutability-helper';
import initialState from './initialState';
import * as AbilityActions from '../actions/types/ability';

export default function abilities(state = initialState.abilities, action) {
  switch (action.type) {
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
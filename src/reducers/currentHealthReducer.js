import update from 'immutability-helper';
import initialState from './initialState';
import * as HealthTypes from '../actions/types/health';

export default function currentHealth(state = initialState.currentHealth, action) {
  switch (action.type) {
    case HealthTypes.UPDATE_CURRENT_HP:
      return update(state, {hitPoints: {$set: action.newValue}});
    case HealthTypes.UPDATE_CURRENT_STAMINA:
      return update(state, {staminaPoints: {$set: action.newValue}});
    case HealthTypes.UPDATE_CURRENT_RESOLVE:
      return update(state, {resolvePoints: {$set: action.newValue}});
    default:
      return state;
  }
}
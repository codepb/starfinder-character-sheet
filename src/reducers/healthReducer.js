import update from 'immutability-helper';
import initialState from './initialState';
import * as HealthTypes from '../actions/types/health';
import classes from '../rules/classes';

export default function health(state = initialState.health, action) {
  switch (action.type) {
    case HealthTypes.UPDATE_CURRENT_HP:
      return update(state, {hitPoints: {current: {$set: action.newValue}}});
    case HealthTypes.UPDATE_CURRENT_STAMINA:
      return update(state, {staminaPoints: {current: {$set: action.newValue}}});
    case HealthTypes.UPDATE_CURRENT_RESOLVE:
      return update(state, {resolvePoints: {current: {$set: action.newValue}}});
    case HealthTypes.UPDATE_HEALTH_CLASS_CONTRIBUTIONS:
      const hitPointDifference =action.newHitPointClassContribution - state.hitPoints.classContribution;
      const newHitPointTotal = state.hitPoints.total + hitPointDifference;
      const newCurrentHitPoints = state.hitPoints.current + hitPointDifference;
      const staminaDifference = action.newStaminaPointClassContribution - state.staminaPoints.classContribution;
      const newStaminaPointTotal = state.staminaPoints.total + staminaDifference;
      const newCurrentStaminaPoints = state.staminaPoints.current + staminaDifference;
      return update(state, {
        hitPoints: {
          total: { $set: newHitPointTotal },
          classContribution: {$set: action.newHitPointClassContribution},
          current: { $set: newCurrentHitPoints }
        },
        staminaPoints: {
          total: {$set: newStaminaPointTotal},
          classContribution: {$set: action.newStaminaPointClassContribution},
          current: { $set: newCurrentStaminaPoints }
        }
      });
    default:
      return state;
  }
}
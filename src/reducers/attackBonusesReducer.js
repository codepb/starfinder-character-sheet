import update from 'immutability-helper';
import initialState from './initialState';
import * as AttackBonusActions from '../actions/types/attackBonus';
import { LOAD_STATE } from '../actions/types/load';

export default function attackBonuses(state = initialState.attackBonuses, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.attackBonuses;
    case AttackBonusActions.UPDATE_MISC_MODIFIER_FOR_ATTACK_BONUS:
      return update(state, {[action.attackBonus]: { misc: { $set: action.newValue }}});
    default:
      return state;
  }
}
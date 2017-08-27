import update from 'immutability-helper';
import initialState from './initialState';
import * as AttackBonusActions from '../actions/types/attackBonus';

export default function attackBonuses(state = initialState.attackBonuses, action) {
  switch (action.type) {
    case AttackBonusActions.UPDATE_MISC_MODIFIER_FOR_ATTACK_BONUS:
      return update(state, {[action.attackBonus]: { misc: { $set: action.newValue }}});
    default:
      return state;
  }
}
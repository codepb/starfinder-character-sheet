import update from 'immutability-helper';
import initialState from './initialState';
import * as SavingThrowActions from '../actions/types/savingThrow';
import { LOAD_STATE } from '../actions/types/load';

export default function savingThrows(state = initialState.savingThrows, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.savingThrows;
    case SavingThrowActions.UPDATE_MISC_MODIFIER_FOR_SAVING_THROW:
      return update(state, {[action.savingThrow]: { misc: { $set: action.newValue }}});
    default:
      return state;
  }
}
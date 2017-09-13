import update from 'immutability-helper';
import initialState from './initialState';
import * as FeatActions from '../actions/types/feats';
import { LOAD_STATE } from '../actions/types/load';

export default function feats(state = initialState.feats, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.feats || initialState.feats;
    case FeatActions.ADD_FEAT:
      return update(state, { $push: [action.feat] });
    case FeatActions.REMOVE_FEAT:
      const newFeatsKnown = state.filter(f => f !== action.feat );
      return update(state, {$set: newFeatsKnown});
    default:
      return state;
  }
}
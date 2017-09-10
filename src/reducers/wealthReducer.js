import update from 'immutability-helper';
import initialState from './initialState';
import * as ExperienceActions from '../actions/types/wealth';
import { LOAD_STATE } from '../actions/types/load';

export default function experience(state = initialState.wealth, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.wealth || initialState.wealth;
    case ExperienceActions.UPDATE_MONEY:
      return update(state, { money: { $set: action.newValue }} );
    case ExperienceActions.UPDATE_OTHER_WEALTH:
    return update(state, { other: { $set: action.newValue }} );
    default:
      return state;
  }
}
import update from 'immutability-helper';
import initialState from './initialState';
import * as ExperienceActions from '../actions/types/experience';
import { LOAD_STATE } from '../actions/types/load';

export default function experience(state = initialState.experience, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.experience || initialState.experience;
    case ExperienceActions.UPDATE_CURRENT_EXPERIENCE:
      return update(state, { current: { $set: action.newValue }} );
    case ExperienceActions.UPDATE_NEXT_LEVEL_EXPERIENCE:
    return update(state, { nextLevel: { $set: action.newValue }} );
    default:
      return state;
  }
}
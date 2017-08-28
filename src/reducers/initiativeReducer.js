import initialState from './initialState';
import * as InitiativeActions from '../actions/types/initiative';
import { LOAD_STATE } from '../actions/types/load';

export default function initiative(state = initialState.initiative, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.initiative;
    case InitiativeActions.UPDATE_MISC_INITIATIVE:
      return action.newValue;
    default:
      return state;
  }
}
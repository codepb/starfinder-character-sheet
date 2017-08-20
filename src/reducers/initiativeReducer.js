import initialState from './initialState';
import * as InitiativeActions from '../actions/types/initiative';

export default function initiative(state = initialState.miscInitiative, action) {
  switch (action.type) {
    case InitiativeActions.UPDATE_MISC_INITIATIVE:
      return action.newValue;
    default:
      return state;
  }
}
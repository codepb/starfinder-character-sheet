import initialState from './initialState';
import * as AbilitiesActions from '../actions/types/abilities';
import { LOAD_STATE } from '../actions/types/load';

export default function initiative(state = initialState.abilities, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.abilities || initialState.abilities;
    case AbilitiesActions.UPDATE_ABILITIES:
      return action.newValue;
    default:
      return state;
  }
}
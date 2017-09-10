import initialState from './initialState';
import * as LanguagesActions from '../actions/types/languages';
import { LOAD_STATE } from '../actions/types/load';

export default function languages(state = initialState.languages, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.languages || initialState.languages;
    case LanguagesActions.UPDATE_LANGUAGES:
      return action.newValue;
    default:
      return state;
  }
}
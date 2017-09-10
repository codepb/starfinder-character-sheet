import * as types from './types/languages';

export function updateLanguages(newValue) {
  return {
    type: types.UPDATE_LANGUAGES,
    newValue
  };
}
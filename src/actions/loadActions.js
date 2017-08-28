import * as types from './types/load';

export function load(state){
  return {
    type: types.LOAD_STATE,
    state
  };
}
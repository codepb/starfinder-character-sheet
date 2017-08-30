import update from 'immutability-helper';
import initialState from './initialState';
import * as WeaponActions from '../actions/types/weapon';
import { LOAD_STATE } from '../actions/types/load';

export default function weapons(state = initialState.weapons, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.weapons || initialState.weapons;
    case WeaponActions.ADD_WEAPON:
      return update(state, { $push: [action.weapon] });
    default:
      return state;
  }
}
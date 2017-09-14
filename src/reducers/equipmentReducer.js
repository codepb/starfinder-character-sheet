import update from 'immutability-helper';
import initialState from './initialState';
import * as EquipmentActions from '../actions/types/equipment';
import { LOAD_STATE } from '../actions/types/load';

export default function equipment(state = initialState.equipment, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.equipment || initialState.equipment;
    case EquipmentActions.ADD_EQUIPMENT:
      return update(state, { $push: [action.equipment] });
    case EquipmentActions.REMOVE_EQUIPMENT:
      return state.filter(e => !(e.name === action.equipment.name && e.level === action.equipment.level) );
    default:
      return state;
  }
}
import update from 'immutability-helper';
import initialState from './initialState';
import * as ArmorBonusActions from '../actions/types/armor';

export default function armorBonuses(state = initialState.armorBonuses, action) {
  switch (action.type) {
    case ArmorBonusActions.UPDATE_MISC_ARMOR:
      return update(state, {misc: {$set: action.newValue}});
    case ArmorBonusActions.UPDATE_KINETIC_ARMOR:
      return update(state, {kinetic: {$set: action.newValue}});
    case ArmorBonusActions.UPDATE_ENERGY_ARMOR:
      return update(state, {energy: {$set: action.newValue}});
    case ArmorBonusActions.UPDATE_DAMAGE_REDUCTION:
      return update(state, {damageReduction: {$set: action.newValue}});
    case ArmorBonusActions.UPDATE_RESISTANCES:
      return update(state, {resistances: {$set: action.newValue}});
    default:
      return state;
  }
}
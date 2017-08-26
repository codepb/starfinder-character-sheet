import update from 'immutability-helper';
import initialState from './initialState';
import * as ArmorBonusActions from '../actions/types/armor';

export default function armor(state = initialState.armor, action) {
  switch (action.type) {
    case ArmorBonusActions.UPDATE_MISC_ARMOR:
      return update(state, {bonuses: { misc: { $set: action.newValue }}});
    case ArmorBonusActions.UPDATE_DAMAGE_REDUCTION:
      return update(state, { bonuses: { damageReduction: { $set: action.newValue }}});
    case ArmorBonusActions.UPDATE_RESISTANCES:
      return update(state, {bonuses: { resistances: { $set: action.newValue }}});
    case ArmorBonusActions.UPDATE_ARMOR_NAME:
      return update(state, { name: { $set: action.newValue }});
    case ArmorBonusActions.UPDATE_ARMOR_PENALTY:
      return update(state, { penalty: { $set: action.newValue }});
    case ArmorBonusActions.UPDATE_ARMOR_MAX_DEXTERITY:
      return update(state, { maxDexterity: { $set: action.newValue }});
    case ArmorBonusActions.UPDATE_ARMOR_SPEED_ADJUSTMENT:
      return update(state, { speedAdjustment: { $set: action.newValue }});
    default:
      return state;
  }
}
import update from 'immutability-helper';
import initialState from './initialState';
import * as SpellActions from '../actions/types/spells';
import { LOAD_STATE } from '../actions/types/load';

export default function spells(state = initialState.spells, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.spells || initialState.spells;
    case SpellActions.ADD_SPELL:
      return update(state, {known: { $push: [action.spell] }});
    case SpellActions.REMOVE_SPELL:
      const newSpellsKnown = state.known.filter(s => !(s.name === action.spell.name && s.class === action.spell.class) );
      return update(state, {known: {$set: newSpellsKnown}});
    case SpellActions.UPDATE_SPELLS_PER_DAY:
      return update(state, {levels: {[action.level]: {spellsPerDay: { $set: action.newValue}}}});
    case SpellActions.UPDATE_SPELLS_SLOTS_USED:
      return update(state, {levels: {[action.level]: {spellSlotsUsed: { $set: action.newValue}}}});
    default:
      return state;
  }
}
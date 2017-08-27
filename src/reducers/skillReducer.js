import update from 'immutability-helper';
import initialState from './initialState';
import * as SkillActions from '../actions/types/skill';

export default function skills(state = initialState.skills, action) {
  switch (action.type) {
    case SkillActions.UPDATE_RANKS_IN_SKILL:
      return update(state, {skillBonuses: {[action.skill]: {ranks: { $set: action.newValue }}}});
    case SkillActions.UPDATE_MISC_MODIFIER_FOR_SKILL:
      return update(state, {skillBonuses: {[action.skill]: {misc: { $set: action.newValue }}}});
    default:
      return state;
  }
}
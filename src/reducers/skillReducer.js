import update from 'immutability-helper';
import initialState from './initialState';
import * as SkillActions from '../actions/types/skill';
import { LOAD_STATE } from '../actions/types/load';

export default function skills(state = initialState.skills, action) {
  switch (action.type) {
    case LOAD_STATE:
      return action.state.skills;
    case SkillActions.UPDATE_RANKS_IN_SKILL:
      return update(state, {skillBonuses: {[action.skill]: {ranks: { $set: action.newValue }}}});
    case SkillActions.UPDATE_MISC_MODIFIER_FOR_SKILL:
      return update(state, {skillBonuses: {[action.skill]: {misc: { $set: action.newValue }}}});
    case SkillActions.UPDATE_PROFESSION_NAME:
      return update(state, {professions: {[action.skill]: {name: { $set: action.newValue }}}});
    case SkillActions.UPDATE_PROFESSION_ABILITY:
      return update(state, {professions: {[action.skill]: {ability: { $set: action.newValue }}}});
    case SkillActions.UPDATE_EXTRA_CLASS_SKILL:
      console.log(action);
      return update(state, {skillBonuses: {[action.skill]: {isExtraClassSkill: { $set: action.newValue }}}});
    default:
      return state;
  }
}
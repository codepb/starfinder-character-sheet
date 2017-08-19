import initialState from './initialState';
import update from 'immutability-helper';
import Character from '../models/character';
import {UPDATE_ABILITY_SCORE} from '../actions/types/abilityScores';

export default function abilityScores(state = initialState.abilityScores, action) {
  switch (action.type) {
    case UPDATE_ABILITY_SCORE:
      console.log(UPDATE_ABILITY_SCORE)
      const abilityScore = state.find(a => a.name == action.ability)
      if(abilityScore){
        const newAbilityScore = abilityScore.getUpdatedAbilityScore(action.newScore);
        return update(state, {$splice: [[state.indexOf(abilityScore), 1, newAbilityScore]]})
      }
      return state;
    default:
      return state;
  }
}
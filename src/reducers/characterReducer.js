import initialState from './initialState';
import Character from '../models/character';
import {UPDATE_ABILITY_SCORE} from '../actions/types/abilityScores';

export default function character(state = initialState.character, action) {
  let newState = new Character(state);
  switch (action.type) {
    default:
      return state;
  }
}
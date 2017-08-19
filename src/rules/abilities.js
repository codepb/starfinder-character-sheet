export const STRENGTH = 'Strength';
export const DEXTERITY = 'Dexterity';
export const CONSTITUTION = 'Constitution';
export const INTELLIGENCE = 'Intelligence';
export const WISDOM = 'Wisdom';
export const CHARISMA = 'Charisma';

export default class AbilityModifier {
  ability;
  modifier;

  constructor(params){
    for (let i in params) {
      this[i] = params[i];
    }
  }
}
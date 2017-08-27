import * as Abilities from './abilities';

export const FORTITUDE = 'Fortitude';
export const REFLEX = 'Reflex';
export const WILL = 'Will';

class SavingThrow {
    name;
    associatedAbility;
  
  constructor(params){
    for (let i in params) {
      this[i] = params[i];
    }
  }
}

const savingThrows = {
    [FORTITUDE]: new SavingThrow({
        name: FORTITUDE,
        associatedAbility: Abilities.CONSTITUTION
    }),
    [REFLEX]: new SavingThrow({
        name: REFLEX,
        associatedAbility: Abilities.DEXTERITY
    }),
    [WILL]: new SavingThrow({
        name: WILL,
        associatedAbility: Abilities.WISDOM
    })
}

export default savingThrows;
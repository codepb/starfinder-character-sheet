import * as Abilities from './abilities';

class Class {
  name;
  hp;
  stamina;
  keyAbility;

  constructor(params){
    for (let i in params) {
      this[i] = params[i];
    }
  }
}

export const ENVOY = 'Envoy';
export const MECHANIC = 'Mechanic';
export const MYSTIC = 'Mystic';
export const OPERATIVE = 'Operative';
export const SOLARIAN = 'Solarian';
export const SOLDIER_DEX = 'Soldier(DEX)';
export const SOLDIER_STR = 'Soldier(STR)';
export const TECHNOMANCER = 'Technomancer';

export const ENVOY_CLASS = new Class({
  name: ENVOY,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.CHARISMA
});

export const MECHANIC_CLASS = new Class({
  name: MECHANIC,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.INTELLIGENCE
});

export const MYSTIC_CLASS = new Class({
  name: MYSTIC,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.WISDOM
});

export const OPERATIVE_CLASS = new Class({
  name: OPERATIVE,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.DEXTERITY
});

export const SOLARIAN_CLASS = new Class({
  name: SOLARIAN,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.CHARISMA
});

export const SOLDIER_DEX_CLASS = new Class({
  name: SOLDIER_DEX,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.DEXTERITY
});

export const SOLDIER_STR_CLASS = new Class({
  name: SOLDIER_STR,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.STRENGTH
});

export const TECHNOMANCER_CLASS = new Class({
  name: TECHNOMANCER,
  hp: 5,
  stamina: 5,
  keyAbility: Abilities.INTELLIGENCE
});

const classes = {
  [ENVOY]: ENVOY_CLASS,
  [MECHANIC]: MECHANIC_CLASS,
  [MYSTIC]: MYSTIC_CLASS,
  [OPERATIVE]: OPERATIVE_CLASS,
  [SOLARIAN]: SOLARIAN_CLASS,
  [SOLDIER_DEX]: SOLDIER_DEX_CLASS,
  [SOLDIER_STR]: SOLDIER_STR_CLASS,
  [TECHNOMANCER]: TECHNOMANCER_CLASS
}

export default classes;
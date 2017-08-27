import * as Abilities from './abilities';
import * as Skills from './skills';
import * as SavingThrows from './savingThrows';

class Class {
  name;
  hp;
  stamina;
  keyAbility;
  skillRanksPerLevel;
  classSkills = [];
  savingThrows = {
    [SavingThrows.FORTITUDE]: 0,
    [SavingThrows.REFLEX]: 0,
    [SavingThrows.WILL]: 0
  };

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
  keyAbility: Abilities.CHARISMA,
  skillRanksPerLevel: 8,
  classSkills: [
    Skills.ACROBATICS,
    Skills.ATHLETICS,
    Skills.BLUFF,
    Skills.COMPUTERS,
    Skills.CULTURE,
    Skills.DIPLOMACY,
    Skills.DISGUISE,
    Skills.ENGINEERING,
    Skills.INTIMIDATE,
    Skills.MEDICINE,
    Skills.PERCEPTION,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SENSE_MOTIVE,
    Skills.SLEIGHT_OF_HAND,
    Skills.STEALTH
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 0,
    [SavingThrows.REFLEX]: 2,
    [SavingThrows.WILL]: 2
  }
});

export const MECHANIC_CLASS = new Class({
  name: MECHANIC,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.INTELLIGENCE,
  skillRanksPerLevel: 4,
  classSkills: [
    Skills.ATHLETICS,
    Skills.COMPUTERS,
    Skills.ENGINEERING,
    Skills.MEDICINE,
    Skills.PHYSICAL_SCIENCE,
    Skills.PILOTING,
    Skills.PROFFESSION1
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 2,
    [SavingThrows.REFLEX]: 2,
    [SavingThrows.WILL]: 0
  }
});

export const MYSTIC_CLASS = new Class({
  name: MYSTIC,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.WISDOM,
  skillRanksPerLevel: 6,
  classSkills: [
    Skills.BLUFF,
    Skills.CULTURE,
    Skills.DIPLOMACY,
    Skills.DISGUISE,
    Skills.INTIMIDATE,
    Skills.LIFE_SCIENCE,
    Skills.MEDICINE,
    Skills.MYSTICISM,
    Skills.PERCEPTION,
    Skills.PROFFESSION1,
    Skills.SENSE_MOTIVE,
    Skills.SURVIVAL
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 0,
    [SavingThrows.REFLEX]: 0,
    [SavingThrows.WILL]: 2
  }
});

export const OPERATIVE_CLASS = new Class({
  name: OPERATIVE,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.DEXTERITY,
  skillRanksPerLevel: 8,
  classSkills: [
    Skills.ACROBATICS,
    Skills.ATHLETICS,
    Skills.BLUFF,
    Skills.COMPUTERS,
    Skills.CULTURE,
    Skills.DISGUISE,
    Skills.ENGINEERING,
    Skills.INTIMIDATE,
    Skills.MEDICINE,
    Skills.PERCEPTION,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SENSE_MOTIVE,
    Skills.SLEIGHT_OF_HAND,
    Skills.STEALTH,
    Skills.SURVIVAL
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 0,
    [SavingThrows.REFLEX]: 2,
    [SavingThrows.WILL]: 2
  }
});

export const SOLARIAN_CLASS = new Class({
  name: SOLARIAN,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.CHARISMA,
  skillRanksPerLevel: 4,
  classSkills: [
    Skills.ACROBATICS,
    Skills.ATHLETICS,
    Skills.DIPLOMACY,
    Skills.INTIMIDATE,
    Skills.MYSTICISM,
    Skills.PERCEPTION,
    Skills.PHYSICAL_SCIENCE,
    Skills.PROFFESSION1,
    Skills.SENSE_MOTIVE,
    Skills.STEALTH
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 2,
    [SavingThrows.REFLEX]: 0,
    [SavingThrows.WILL]: 2
  }
});

export const SOLDIER_DEX_CLASS = new Class({
  name: SOLDIER_DEX,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.DEXTERITY,
  skillRanksPerLevel: 4,
  classSkills: [
    Skills.ACROBATICS,
    Skills.ATHLETICS,
    Skills.ENGINEERING,
    Skills.INTIMIDATE,
    Skills.MEDICINE,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SURVIVAL
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 2,
    [SavingThrows.REFLEX]: 0,
    [SavingThrows.WILL]: 2
  }
});

export const SOLDIER_STR_CLASS = new Class({
  name: SOLDIER_STR,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.STRENGTH,
  skillRanksPerLevel: 4,
  classSkills: [
    Skills.ACROBATICS,
    Skills.ATHLETICS,
    Skills.ENGINEERING,
    Skills.INTIMIDATE,
    Skills.MEDICINE,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SURVIVAL
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 2,
    [SavingThrows.REFLEX]: 0,
    [SavingThrows.WILL]: 2
  }
});

export const TECHNOMANCER_CLASS = new Class({
  name: TECHNOMANCER,
  hp: 5,
  stamina: 5,
  keyAbility: Abilities.INTELLIGENCE,
  skillRanksPerLevel: 4,
  classSkills: [
    Skills.COMPUTERS,
    Skills.ENGINEERING,
    Skills.LIFE_SCIENCE,
    Skills.MYSTICISM,
    Skills.PHYSICAL_SCIENCE,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SLEIGHT_OF_HAND
  ],
  savingThrows: {
    [SavingThrows.FORTITUDE]: 0,
    [SavingThrows.REFLEX]: 0,
    [SavingThrows.WILL]: 2
  }
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
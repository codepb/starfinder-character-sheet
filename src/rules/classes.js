import * as Abilities from './abilities';
import * as Skills from './skills';

class Class {
  name;
  hp;
  stamina;
  keyAbility;
  classSkills = [];

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
  ]
});

export const MECHANIC_CLASS = new Class({
  name: MECHANIC,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.INTELLIGENCE,
  classSkills: [
    Skills.ATHLETICS,
    Skills.COMPUTERS,
    Skills.ENGINEERING,
    Skills.MEDICINE,
    Skills.PHYSICAL_SCIENCE,
    Skills.PILOTING,
    Skills.PROFFESSION1
  ]
});

export const MYSTIC_CLASS = new Class({
  name: MYSTIC,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.WISDOM,
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
  ]
});

export const OPERATIVE_CLASS = new Class({
  name: OPERATIVE,
  hp: 6,
  stamina: 6,
  keyAbility: Abilities.DEXTERITY,
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
  ]
});

export const SOLARIAN_CLASS = new Class({
  name: SOLARIAN,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.CHARISMA,
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
  ]
});

export const SOLDIER_DEX_CLASS = new Class({
  name: SOLDIER_DEX,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.DEXTERITY,
  classSkills: [
    Skills.ACROBATICS,
    Skills.ATHLETICS,
    Skills.ENGINEERING,
    Skills.INTIMIDATE,
    Skills.MEDICINE,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SURVIVAL
  ]
});

export const SOLDIER_STR_CLASS = new Class({
  name: SOLDIER_STR,
  hp: 7,
  stamina: 7,
  keyAbility: Abilities.STRENGTH,
  classSkills: [
    Skills.ACROBATICS,
    Skills.ATHLETICS,
    Skills.ENGINEERING,
    Skills.INTIMIDATE,
    Skills.MEDICINE,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SURVIVAL
  ]
});

export const TECHNOMANCER_CLASS = new Class({
  name: TECHNOMANCER,
  hp: 5,
  stamina: 5,
  keyAbility: Abilities.INTELLIGENCE,
  classSkills: [
    Skills.COMPUTERS,
    Skills.ENGINEERING,
    Skills.LIFE_SCIENCE,
    Skills.MYSTICISM,
    Skills.PHYSICAL_SCIENCE,
    Skills.PILOTING,
    Skills.PROFFESSION1,
    Skills.SLEIGHT_OF_HAND
  ]
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
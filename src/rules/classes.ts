import { AbilityScores } from "../character/useAbilityScores";
import { Skills } from "../character/useSkills";
import { SavingThrowModifiers, SavingThrow } from "./savingThrows";

enum Class {
  ENVOY = "Envoy",
  MECHANIC = "Mechanic",
  MYSTIC = "Mystic",
  OPERATIVE = "Operative",
  SOLARIAN = "Solarian",
  SOLDIER_DEX = "Soldier(DEX)",
  SOLDIER_STR = "Soldier(STR)",
  TECHNOMANCER = "Technomancer"
}

interface ClassDefinition {
  name: Class;
  hp: number;
  stamina: number;
  keyAbility: keyof AbilityScores;
  skillRanksPerLevel: number;
  classSkills: (keyof Skills)[];
  savingThrows: SavingThrowModifiers;
  baseAttackBonus: number;
}

const ENVOY_CLASS: ClassDefinition = {
  name: Class.ENVOY,
  hp: 6,
  stamina: 6,
  keyAbility: "charisma",
  skillRanksPerLevel: 8,
  classSkills: [
    "acrobatics",
    "athletics",
    "bluff",
    "computers",
    "culture",
    "diplomacy",
    "disguise",
    "engineering",
    "intimidate",
    "medicine",
    "perception",
    "piloting",
    "profession1",
    "senseMotive",
    "sleightOfHand",
    "stealth"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 0,
    [SavingThrow.REFLEX]: 2,
    [SavingThrow.WILL]: 2
  },
  baseAttackBonus: 0
};

const MECHANIC_CLASS: ClassDefinition = {
  name: Class.MECHANIC,
  hp: 6,
  stamina: 6,
  keyAbility: "intelligence",
  skillRanksPerLevel: 4,
  classSkills: [
    "athletics",
    "computers",
    "engineering",
    "medicine",
    "physicalScience",
    "piloting",
    "profession1"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 2,
    [SavingThrow.REFLEX]: 2,
    [SavingThrow.WILL]: 0
  },
  baseAttackBonus: 0
};

const MYSTIC_CLASS: ClassDefinition = {
  name: Class.MYSTIC,
  hp: 6,
  stamina: 6,
  keyAbility: "wisdom",
  skillRanksPerLevel: 6,
  classSkills: [
    "bluff",
    "culture",
    "diplomacy",
    "disguise",
    "intimidate",
    "lifeScience",
    "medicine",
    "mysticism",
    "perception",
    "profession1",
    "senseMotive",
    "survival"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 0,
    [SavingThrow.REFLEX]: 0,
    [SavingThrow.WILL]: 2
  },
  baseAttackBonus: 0
};

const OPERATIVE_CLASS: ClassDefinition = {
  name: Class.OPERATIVE,
  hp: 6,
  stamina: 6,
  keyAbility: "dexterity",
  skillRanksPerLevel: 8,
  classSkills: [
    "acrobatics",
    "athletics",
    "bluff",
    "computers",
    "culture",
    "disguise",
    "engineering",
    "intimidate",
    "medicine",
    "perception",
    "piloting",
    "profession1",
    "senseMotive",
    "sleightOfHand",
    "stealth",
    "survival"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 0,
    [SavingThrow.REFLEX]: 2,
    [SavingThrow.WILL]: 2
  },
  baseAttackBonus: 0
};

const SOLARIAN_CLASS: ClassDefinition = {
  name: Class.SOLARIAN,
  hp: 7,
  stamina: 7,
  keyAbility: "charisma",
  skillRanksPerLevel: 4,
  classSkills: [
    "acrobatics",
    "athletics",
    "diplomacy",
    "intimidate",
    "mysticism",
    "perception",
    "physicalScience",
    "profession1",
    "senseMotive",
    "stealth"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 2,
    [SavingThrow.REFLEX]: 0,
    [SavingThrow.WILL]: 2
  },
  baseAttackBonus: 1
};

const SOLDIER_DEX_CLASS: ClassDefinition = {
  name: Class.SOLDIER_DEX,
  hp: 7,
  stamina: 7,
  keyAbility: "dexterity",
  skillRanksPerLevel: 4,
  classSkills: [
    "acrobatics",
    "athletics",
    "engineering",
    "intimidate",
    "medicine",
    "piloting",
    "profession1",
    "survival"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 2,
    [SavingThrow.REFLEX]: 0,
    [SavingThrow.WILL]: 2
  },
  baseAttackBonus: 1
};

const SOLDIER_STR_CLASS: ClassDefinition = {
  name: Class.SOLDIER_STR,
  hp: 7,
  stamina: 7,
  keyAbility: "strength",
  skillRanksPerLevel: 4,
  classSkills: [
    "acrobatics",
    "athletics",
    "engineering",
    "intimidate",
    "medicine",
    "piloting",
    "profession1",
    "survival"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 2,
    [SavingThrow.REFLEX]: 0,
    [SavingThrow.WILL]: 2
  },
  baseAttackBonus: 1
};

const TECHNOMANCER_CLASS: ClassDefinition = {
  name: Class.TECHNOMANCER,
  hp: 5,
  stamina: 5,
  keyAbility: "intelligence",
  skillRanksPerLevel: 4,
  classSkills: [
    "computers",
    "engineering",
    "lifeScience",
    "mysticism",
    "physicalScience",
    "piloting",
    "profession1",
    "sleightOfHand"
  ],
  savingThrows: {
    [SavingThrow.FORTITUDE]: 0,
    [SavingThrow.REFLEX]: 0,
    [SavingThrow.WILL]: 2
  },
  baseAttackBonus: 0
};

const classDefinitions = {
  [Class.ENVOY]: ENVOY_CLASS,
  [Class.MECHANIC]: MECHANIC_CLASS,
  [Class.MYSTIC]: MYSTIC_CLASS,
  [Class.OPERATIVE]: OPERATIVE_CLASS,
  [Class.SOLARIAN]: SOLARIAN_CLASS,
  [Class.SOLDIER_DEX]: SOLDIER_DEX_CLASS,
  [Class.SOLDIER_STR]: SOLDIER_STR_CLASS,
  [Class.TECHNOMANCER]: TECHNOMANCER_CLASS
};

export { Class, classDefinitions };

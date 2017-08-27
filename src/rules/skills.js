import * as Abilities from './abilities';

class Skill {
  ability;
  trainedOnly = false;
  armorCheckPenaltyApplies = false;

  constructor(params){
    for (let i in params) {
      this[i] = params[i];
    }
  }
}

export const ACROBATICS = 'Acrobatics';
export const ATHLETICS = 'Athletics';
export const BLUFF = 'Bluff';
export const COMPUTERS = 'Computers';
export const CULTURE = 'Culture';
export const DIPLOMACY = 'Diplomacy';
export const DISGUISE = 'Disguise';
export const ENGINEERING = 'Engineering';
export const INTIMIDATE = 'Intimidate';
export const LIFE_SCIENCE = 'Life Science';
export const MEDICINE = 'Medicine';
export const MYSTICISM = 'Mysticism';
export const PERCEPTION = 'Perception';
export const PHYSICAL_SCIENCE = 'Physical Science';
export const PILOTING = 'Piloting';
export const PROFFESSION1 = 'Profession 1';
export const PROFFESSION2 = 'Profession 2';
export const SENSE_MOTIVE = 'Sense Motive';
export const SLEIGHT_OF_HAND = 'Sleight of Hand';
export const STEALTH = 'Stealth';
export const SURVIVAL = 'Survival';

const skills = {
  [ACROBATICS]: new Skill({ability: Abilities.DEXTERITY, armorCheckPenaltyApplies: true}),
  [ATHLETICS]: new Skill({ability: Abilities.STRENGTH, armorCheckPenaltyApplies: true}),
  [BLUFF]: new Skill({ability: Abilities.CHARISMA}),
  [COMPUTERS]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [CULTURE]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [DIPLOMACY]: new Skill({ability: Abilities.CHARISMA}),
  [DISGUISE]: new Skill({ability: Abilities.CHARISMA}),
  [ENGINEERING]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [INTIMIDATE]: new Skill({ability: Abilities.CHARISMA}),
  [LIFE_SCIENCE]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [MEDICINE]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [MYSTICISM]: new Skill({ability: Abilities.WISDOM, trainedOnly: true}),
  [PERCEPTION]: new Skill({ability: Abilities.WISDOM}),
  [PHYSICAL_SCIENCE]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [PILOTING]: new Skill({ability: Abilities.DEXTERITY}),
  [PROFFESSION1]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [PROFFESSION2]: new Skill({ability: Abilities.INTELLIGENCE, trainedOnly: true}),
  [SENSE_MOTIVE]: new Skill({ability: Abilities.WISDOM}),
  [SLEIGHT_OF_HAND]: new Skill({ability: Abilities.DEXTERITY, trainedOnly: true, armorCheckPenaltyApplies: true}),
  [STEALTH]: new Skill({ability: Abilities.DEXTERITY, armorCheckPenaltyApplies: true}),
  [SURVIVAL]: new Skill({ability: Abilities.WISDOM})
};

export default skills;
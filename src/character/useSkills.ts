import * as React from "react";
import { SetStateAction } from "react";
import CharacterContext from "./CharacterContext";
import { forEachKey } from "../helpers/objectHelpers";
import { AbilityScores } from "./useAbilityScores";

export interface Skills {
  acrobatics?: boolean;
  athletics?: boolean;
  bluff?: boolean;
  computers?: boolean;
  culture?: boolean;
  diplomacy?: boolean;
  disguise?: boolean;
  engineering?: boolean;
  intimidate?: boolean;
  lifeScience?: boolean;
  medicine?: boolean;
  mysticism?: boolean;
  perception?: boolean;
  physicalScience?: boolean;
  piloting?: boolean;
  profession1?: boolean;
  profession2?: boolean;
  senseMotive?: boolean;
  sleightOfHand?: boolean;
  stealth?: boolean;
  survival?: boolean;
}

export interface SkillDefinition {
  ability: keyof AbilityScores;
  trainedOnly?: boolean;
  armorCheckPenaltyApplies?: boolean;
}

interface SkillDefinitions {
  acrobatics: SkillDefinition;
  athletics: SkillDefinition;
  bluff: SkillDefinition;
  computers: SkillDefinition;
  culture: SkillDefinition;
  diplomacy: SkillDefinition;
  disguise: SkillDefinition;
  engineering: SkillDefinition;
  intimidate: SkillDefinition;
  lifeScience: SkillDefinition;
  medicine: SkillDefinition;
  mysticism: SkillDefinition;
  perception: SkillDefinition;
  physicalScience: SkillDefinition;
  piloting: SkillDefinition;
  profession1: SkillDefinition;
  profession2: SkillDefinition;
  senseMotive: SkillDefinition;
  sleightOfHand: SkillDefinition;
  stealth: SkillDefinition;
  survival: SkillDefinition;
}

const skillDefinitions: SkillDefinitions = {
  acrobatics: { ability: "dexterity", armorCheckPenaltyApplies: true },
  athletics: { ability: "strength", armorCheckPenaltyApplies: true },
  bluff: { ability: "charisma" },
  computers: { ability: "intelligence", trainedOnly: true },
  culture: { ability: "intelligence", trainedOnly: true },
  diplomacy: { ability: "charisma" },
  disguise: { ability: "charisma" },
  engineering: { ability: "intelligence", trainedOnly: true },
  intimidate: { ability: "charisma" },
  lifeScience: { ability: "intelligence", trainedOnly: true },
  medicine: { ability: "intelligence", trainedOnly: true },
  mysticism: { ability: "wisdom", trainedOnly: true },
  perception: { ability: "wisdom" },
  physicalScience: { ability: "intelligence", trainedOnly: true },
  piloting: { ability: "dexterity" },
  profession1: { ability: "intelligence", trainedOnly: true },
  profession2: { ability: "intelligence", trainedOnly: true },
  senseMotive: { ability: "wisdom" },
  sleightOfHand: {
    ability: "dexterity",
    trainedOnly: true,
    armorCheckPenaltyApplies: true
  },
  stealth: { ability: "dexterity", armorCheckPenaltyApplies: true },
  survival: { ability: "wisdom" }
};

const useSkills = (): {
  skillLevels: Skills;
  baseSkills: Skills;
  checkSkill: (key: keyof Skills) => void;
  uncheckSkill: (key: keyof Skills) => void;
} => {
  const [{ baseSkills }, { setBaseSkills }] = React.useContext(
    CharacterContext
  );
  const updateBaseSkill = (key: keyof Skills, newValue: boolean) => {
    setBaseSkills(baseSkills => ({
      ...baseSkills,
      [key]: newValue
    }));
  };
  return {
    skillLevels: <Skills>(
      forEachKey((key: keyof Skills) => baseSkills[key], baseSkills)
    ),
    baseSkills,
    checkSkill: (key: keyof Skills) => updateBaseSkill(key, true),
    uncheckSkill: (key: keyof Skills) => updateBaseSkill(key, false)
  };
};

export default useSkills;
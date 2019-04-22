import useAbilityScores from "./useAbilityScores";
import useBasicStats from "./useBasicStats";
import { classDefinitions } from "../rules/classes";

export interface SavingThrows {
  fortitude: number;
  reflex: number;
  will: number;
}

const useSavingThrows = (): SavingThrows => {
  const { abilityModifiers } = useAbilityScores();
  const { basicStats } = useBasicStats();
  const characterClass = classDefinitions[basicStats.class];
  return {
    fortitude:
      characterClass.savingThrows.fortitude +
      (abilityModifiers.constitution || 0),
    reflex:
      characterClass.savingThrows.reflex + (abilityModifiers.dexterity || 0),
    will: characterClass.savingThrows.will + (abilityModifiers.wisdom || 0)
  };
};

export default useSavingThrows;

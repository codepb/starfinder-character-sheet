import useAbilityScores from "./useAbilityScores";
import { useClassSavingThrows } from "../services/classService";

export interface SavingThrows {
  fortitude: number;
  reflex: number;
  will: number;
}

const useSavingThrows = (): SavingThrows => {
  const { abilityModifiers } = useAbilityScores();
  const savingThrows = useClassSavingThrows();
  return {
    fortitude: savingThrows.fortitude + (abilityModifiers.constitution || 0),
    reflex: savingThrows.reflex + (abilityModifiers.dexterity || 0),
    will: savingThrows.will + (abilityModifiers.wisdom || 0)
  };
};

export default useSavingThrows;

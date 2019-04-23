import useAbilityScores from "./useAbilityScores";
import { useBaseAttackBonus } from "../services/classService";

export interface AttackBonuses {
  ranged: number;
  melee: number;
  thrown: number;
}

const useAttackBonuses = (): AttackBonuses => {
  const { abilityModifiers } = useAbilityScores();
  const baseAttackBonus = useBaseAttackBonus();
  return {
    ranged: baseAttackBonus + (abilityModifiers.dexterity || 0),
    melee: baseAttackBonus + (abilityModifiers.strength || 0),
    thrown: baseAttackBonus + (abilityModifiers.strength || 0)
  };
};

export default useAttackBonuses;

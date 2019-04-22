import useAbilityScores from "./useAbilityScores";
import useBasicStats from "./useBasicStats";
import { classDefinitions } from "../rules/classes";

export interface AttackBonuses {
  ranged: number;
  melee: number;
  thrown: number;
}

const useAttackBonuses = (): AttackBonuses => {
  const { abilityModifiers } = useAbilityScores();
  const { basicStats } = useBasicStats();
  const baseAttackBonus = classDefinitions[basicStats.class].baseAttackBonus;
  return {
    ranged: baseAttackBonus + (abilityModifiers.dexterity || 0),
    melee: baseAttackBonus + (abilityModifiers.strength || 0),
    thrown: baseAttackBonus + (abilityModifiers.strength || 0)
  };
};

export default useAttackBonuses;

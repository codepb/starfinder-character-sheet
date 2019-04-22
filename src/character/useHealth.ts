import { classDefinitions } from "../rules/classes";
import useAbilityScores from "./useAbilityScores";
import { raceDetails } from "../rules/races";
import useBasicStats from "./useBasicStats";

const useHealth = (): {
  stamina: number;
  health: number;
  resolve: number;
} => {
  const { basicStats } = useBasicStats();
  const { abilityModifiers } = useAbilityScores();
  const characterClass = classDefinitions[basicStats.class];
  const race = raceDetails[basicStats.race];
  return {
    stamina: characterClass.stamina + (abilityModifiers.constitution || 0),
    health: characterClass.hp + race.hp,
    resolve: 1 + (abilityModifiers[characterClass.keyAbility] || 0)
  };
};

export default useHealth;

import { classDefinitions } from "../rules/classes";
import useAbilityScores from "./useAbilityScores";
import { raceDetails } from "../rules/races";
import useBasicStats from "./useBasicStats";
import {
  useClassHealthAndStamina,
  useKeyAbilityScore
} from "../services/classService";

const useHealth = (): {
  stamina: number;
  health: number;
  resolve: number;
} => {
  const { basicStats } = useBasicStats();
  const { abilityModifiers } = useAbilityScores();
  const healthAndStamina = useClassHealthAndStamina();
  const race = raceDetails[basicStats.race];
  const keyAbilityScore = useKeyAbilityScore();
  return {
    stamina: healthAndStamina.stamina + (abilityModifiers.constitution || 0),
    health: healthAndStamina.hp + race.hp,
    resolve: 1 + keyAbilityScore
  };
};

export default useHealth;

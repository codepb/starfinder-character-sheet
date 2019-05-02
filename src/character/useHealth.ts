import useAbilityScores from "./useAbilityScores";
import { raceDetails } from "../rules/races";
import useBasicStats from "./useBasicStats";
import {
  useClassHealthAndStamina,
  useKeyAbilityScore,
  useLevels
} from "../services/classService";
import CharacterContext, { HealthAndResolve } from "./CharacterContext";
import { useContext } from "react";

const useHealth = (): {
  max: HealthAndResolve;
  damage: HealthAndResolve;

  addDamage(amount: number): void;
  restoreStamina(amount: number): void;
  restoreHealth(amount: number): void;
} => {
  const [{ damage }, { setDamage }] = useContext(CharacterContext);
  const { basicStats } = useBasicStats();
  const { abilityModifiers } = useAbilityScores();
  const healthAndStamina = useClassHealthAndStamina();
  const levels = useLevels();
  const totalLevels = levels.reduce((rv, curr) => rv + curr[1], 0);
  const race = raceDetails[basicStats.race];
  const keyAbilityScore = useKeyAbilityScore();

  const maxStamina =
    healthAndStamina.stamina +
    (abilityModifiers.constitution || 0) * totalLevels;
  const maxHealth = healthAndStamina.hp + race.hp;
  return {
    max: {
      stamina: maxStamina,
      health: maxHealth,
      resolve: 1 + keyAbilityScore
    },
    damage,
    addDamage: (amount: number) => {
      setDamage(previous => {
        const staminaLeft = maxStamina - previous.stamina;
        if (staminaLeft >= amount) {
          return {
            ...previous,
            stamina: previous.stamina + amount
          };
        }
        const healthToRemove = amount - Math.max(staminaLeft, 0);
        return {
          ...previous,
          stamina: maxStamina,
          health: Math.min(previous.health + healthToRemove, maxHealth)
        };
      });
    },
    restoreHealth: (amount: number) => {
      setDamage(previous => ({
        ...previous,
        health: previous.health - amount
      }));
    },
    restoreStamina: (amount: number) => {
      setDamage(previous => ({
        ...previous,
        stamina: previous.stamina - amount
      }));
    }
  };
};

export default useHealth;

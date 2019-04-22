import useAbilityScores from "./useAbilityScores";

export interface ArmorClasses {
  kinetic: number;
  energy: number;
  combatManeuvers: number;
}

const useArmorClasses = (): ArmorClasses => {
  const { abilityModifiers } = useAbilityScores();
  const kinetic = 10 + (abilityModifiers.dexterity || 0);
  const energy = 10 + (abilityModifiers.dexterity || 0);
  const combatManeuvers = kinetic + 8;

  return {
    kinetic,
    energy,
    combatManeuvers
  };
};

export default useArmorClasses;

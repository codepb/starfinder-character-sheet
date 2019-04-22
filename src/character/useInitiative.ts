import useAbilityScores from "./useAbilityScores";

const useInitiative = (): number => {
  const { abilityModifiers } = useAbilityScores();
  return abilityModifiers.dexterity || 0;
};

export default useInitiative;

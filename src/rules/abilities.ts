import { AbilityScores } from "../character/useAbilityScores";
import { raceDetails, Race } from "./races";
import { themeDetails, Theme } from "./themes";

const calculateAbilityScore = (
  baseAbilityScores: AbilityScores,
  race: Race,
  theme: Theme
) => (key: keyof AbilityScores) => {
  const raceDetail = raceDetails[race];
  const themeDetail = themeDetails[theme];

  return (
    baseAbilityScores[key]! +
    10 +
    (raceDetail.abilityModifiers[key] || 0) +
    (themeDetail.abilityModifiers[key] || 0)
  );
};

const calculateAbilityModifier = (
  baseAbilityScores: AbilityScores,
  race: Race,
  theme: Theme
) => (key: keyof AbilityScores) =>
  Math.floor(calculateAbilityScore(baseAbilityScores, race, theme)(key) / 2) -
  5;

export { calculateAbilityModifier, calculateAbilityScore };

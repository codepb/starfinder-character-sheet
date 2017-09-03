import races from '../rules/races';
import themes from '../rules/themes';
import classes from '../rules/classes';
import AbilityScore from './abilityScore';
import { UNSPECIFIED } from '../rules/abilities';

export default class AbilityManager {
  baseScore = 10;

  getAbilityScore = (currentRace, currentTheme, abilityPoints, abilityName, isDefaultRaceBonus, isDefaultThemeBonus) => {
    const race = races[currentRace];
    let raceModifier = race.abilityModifiers[abilityName];
    if(!raceModifier) {
      raceModifier = 0;
    }
    if (race.hasUnspecifiedModifiers && isDefaultRaceBonus) {
      raceModifier += race.abilityModifiers[UNSPECIFIED];
    }
    const theme = themes[currentTheme];
    let themeModifier = theme.abilityModifiers[abilityName];
    if(!themeModifier) {
      themeModifier = 0;
    }
    if (theme.hasUnspecifiedModifiers && isDefaultThemeBonus) {
      themeModifier += theme.abilityModifiers[UNSPECIFIED];
    }

    return new AbilityScore({
      name: abilityName,
      baseScore: this.baseScore,
      raceModifier,
      themeModifier,
      pointsAssigned: abilityPoints
    });
  }

  getAbilityScoreFromState = (currentRace, currentTheme, abilityScores, ability) => {
    return this.getAbilityScore(
      currentRace,
      currentTheme,
      abilityScores.abilityPoints[ability],
      ability,
      abilityScores.defaultRaceBonus === ability,
      abilityScores.defaultThemeBonus === ability);
  };

  getKeyAbilityScoreFromState = (currentClass, currentRace, currentTheme, abilityScores, ) => {
    const keyAbility = classes[currentClass].keyAbility;
    return this.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, keyAbility);
  };
  
  getRemainingPointsToSpendFromState = (abilityScores) => {
    return 10 - Object.values(abilityScores.abilityPoints).filter(a => a > 0).reduce((a,b) => a + b, 0);
  }
}
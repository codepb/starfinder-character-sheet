import races from '../rules/races';
import themes from '../rules/themes';
import classes from '../rules/classes';
import AbilityScore from './abilityScore';
import { UNSPECIFIED } from '../rules/abilities';

export default class AbilityManager {
  baseScore = 10;
  getAbilityScoreFromState = (currentRace, currentTheme, abilityScores, ability) => {
    const race = races[currentRace];
    let raceModifier = race.abilityModifiers[ability];
    if(!raceModifier) {
      raceModifier = 0;
    }
    if (race.hasUnspecifiedModifiers && abilityScores.defaultRaceBonus === ability) {
      raceModifier += race.abilityModifiers[UNSPECIFIED];
    }
    const theme = themes[currentTheme];
    let themeModifier = theme.abilityModifiers[ability];
    if(!themeModifier) {
      themeModifier = 0;
    }
    if (theme.hasUnspecifiedModifiers && abilityScores.defaultThemeBonus === ability) {
      themeModifier += theme.abilityModifiers[UNSPECIFIED];
    }
    const pointsAssigned = abilityScores.abilityPoints[ability];

    return new AbilityScore({
      name: ability,
      baseScore: this.baseScore,
      raceModifier,
      themeModifier,
      pointsAssigned
    });
  };

  getKeyAbilityScoreFromState = (currentClass, currentRace, currentTheme, abilityScores, ) => {
    const keyAbility = classes[currentClass].keyAbility;
    return this.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, keyAbility);
  };
  
  getRemainingPointsToSpendFromState = (abilityScores) => {
    return 10 - Object.values(abilityScores.abilityPoints).filter(a => a > 0).reduce((a,b) => a + b, 0);
  }
}
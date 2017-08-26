import races from '../rules/races';
import themes from '../rules/themes';
import classes from '../rules/classes';
import AbilityScore from './abilityScore';
import { UNSPECIFIED } from '../rules/abilities';

export default class AbilityManager {
  baseScore = 10;
  getAbilityScoreFromState = (state, ability) => {
    const race = races[state.character.race];
    let raceModifier = race.abilityModifiers[ability];
    if(!raceModifier) {
      raceModifier = 0;
    }
    if (race.hasUnspecifiedModifiers && state.abilities.defaultRaceBonus === ability) {
      raceModifier += race.abilityModifiers[UNSPECIFIED];
    }
    const theme = themes[state.character.theme];
    let themeModifier = theme.abilityModifiers[ability];
    if(!themeModifier) {
      themeModifier = 0;
    }
    if (theme.hasUnspecifiedModifiers && state.abilities.defaultThemeBonus === ability) {
      themeModifier += theme.abilityModifiers[UNSPECIFIED];
    }
    const pointsAssigned = state.abilities.abilityPoints[ability];

    return new AbilityScore({
      name: ability,
      baseScore: this.baseScore,
      raceModifier,
      themeModifier,
      pointsAssigned
    });
  };

  getKeyAbilityScoreFromState = (state) => {
    const keyAbility = classes[state.character.class].keyAbility;
    return this.getAbilityScoreFromState(state, keyAbility);
  };
  
  getRemainingPointsToSpendFromState = (state) => {
    return 10 - Object.values(state.abilities.abilityPoints).filter(a => a > 0).reduce((a,b) => a + b, 0);
  }
}
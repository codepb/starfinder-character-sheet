import Character from '../models/character';
import AbilityScore from '../models/abilityScore';
import AbilityManager from '../models/abilityManager';
import * as Abilities from '../rules/abilities';
import races, * as RaceTypes from '../rules/races';
import * as ThemeTypes from '../rules/themes';

const abilityScores = {};
abilityScores[Abilities.STRENGTH] = new AbilityScore({
    name: Abilities.STRENGTH,
    racialModifier: 2,
    themeModifier: 1,
    isDefaultRacialModifier: true,
    isDefaultThemeModifier: true,
});
abilityScores[Abilities.DEXTERITY] = new AbilityScore({
    name: Abilities.DEXTERITY
});
abilityScores[Abilities.CONSTITUTION] = new AbilityScore({
    name: Abilities.CONSTITUTION
});
abilityScores[Abilities.INTELLIGENCE] = new AbilityScore({
    name: Abilities.INTELLIGENCE
});
abilityScores[Abilities.WISDOM] = new AbilityScore({
    name: Abilities.WISDOM
});
abilityScores[Abilities.CHARISMA] = new AbilityScore({
    name: Abilities.CHARISMA
});
export default {
    character: new Character({
        race: races.find(r => r.name == RaceTypes.HUMAN),
        theme: ThemeTypes.THEMELESS
    }),
    miscInitiative: 0,
    abilityScores: new AbilityManager({abilityScores: abilityScores})
}
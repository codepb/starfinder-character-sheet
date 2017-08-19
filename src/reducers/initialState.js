import Character from '../models/character';
import AbilityScore from '../models/abilityScore';
import * as Abilities from '../rules/abilities';
import * as RaceTypes from '../rules/races';
import * as ThemeTypes from '../rules/themes';

export default {
    character: new Character({
        race: RaceTypes.HUMAN,
        theme: ThemeTypes.THEMELESS
    }),
    abilityScores: [
        new AbilityScore({
            name: Abilities.STRENGTH,
            baseScore: 10,
            racialModifier: 2,
            themeModifier: 1,
            isDefaultRacialModifier: true,
            isDefaultThemeModifier: true,
        }),
        new AbilityScore({
            name: Abilities.DEXTERITY,
            baseScore: 10
        }),
        new AbilityScore({
            name: Abilities.CONSTITUTION,
            baseScore: 10
        }),
        new AbilityScore({
            name: Abilities.INTELLIGENCE,
            baseScore: 10
        }),
        new AbilityScore({
            name: Abilities.WISDOM,
            baseScore: 10
        }),
        new AbilityScore({
            name: Abilities.CHARISMA,
            baseScore: 10
        })
    ]
}
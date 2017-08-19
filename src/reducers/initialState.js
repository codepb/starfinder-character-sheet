import Character from '../models/character';
import AbilityScore from '../models/abilityScore';
import AbilityManager from '../models/abilityManager';
import * as Abilities from '../rules/abilities';
import * as RaceTypes from '../rules/races';
import * as ThemeTypes from '../rules/themes';

export default {
    character: new Character({
        race: RaceTypes.HUMAN,
        theme: ThemeTypes.THEMELESS
    }),
    abilityScores: new AbilityManager({abilityScores: [
        new AbilityScore({
            name: Abilities.STRENGTH,
            racialModifier: 2,
            themeModifier: 1,
            isDefaultRacialModifier: true,
            isDefaultThemeModifier: true,
        }),
        new AbilityScore({
            name: Abilities.DEXTERITY
        }),
        new AbilityScore({
            name: Abilities.CONSTITUTION
        }),
        new AbilityScore({
            name: Abilities.INTELLIGENCE
        }),
        new AbilityScore({
            name: Abilities.WISDOM
        }),
        new AbilityScore({
            name: Abilities.CHARISMA
        })
    ]})
}
import Character from '../models/character';
import AbilityScore from '../models/abilityScore';
import AbilityManager from '../models/abilityManager';
import * as Abilities from '../rules/abilities';
import * as Races from '../rules/races';
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
        race: Races.HUMAN_RACE,
        theme: ThemeTypes.THEMELESS
    }),
    miscInitiative: 0,
    abilityScores: new AbilityManager({abilityScores: abilityScores}),
    armorBonuses: { energy: 0, kinetic: 0, misc: 0, damageReduction: 0, resistances: '' }
}
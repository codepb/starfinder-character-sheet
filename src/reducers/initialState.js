import Character from '../models/character';
import * as Abilities from '../rules/abilities';
import * as Races from '../rules/races';
import * as ThemeTypes from '../rules/themes';
import * as Classes from '../rules/classes';

const abilityPoints = {
    [Abilities.STRENGTH]: 0,
    [Abilities.DEXTERITY]: 0,
    [Abilities.CONSTITUTION]: 0,
    [Abilities.INTELLIGENCE]: 0,
    [Abilities.WISDOM]: 0,
    [Abilities.CHARISMA]: 0
};

export default {
    character: new Character({
        race: Races.HUMAN,
        theme: ThemeTypes.THEMELESS,
        class: Classes.ENVOY
    }),
    miscInitiative: 0,
    abilities: {
        defaultThemeBonus: Abilities.STRENGTH,
        defaultRaceBonus: Abilities.STRENGTH,
        abilityPoints
    },
    armorBonuses: { misc: 0, damageReduction: 0, resistances: '' },
    currentHealth: { hitPoints: 10 , staminaPoints: 6, resolvePoints: 1 }
}
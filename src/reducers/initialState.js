import Character from '../models/character';
import * as Abilities from '../rules/abilities';
import * as Races from '../rules/races';
import * as ThemeTypes from '../rules/themes';
import * as Classes from '../rules/classes';
import skills from '../rules/skills';

const abilityPoints = {
    [Abilities.STRENGTH]: 0,
    [Abilities.DEXTERITY]: 0,
    [Abilities.CONSTITUTION]: 0,
    [Abilities.INTELLIGENCE]: 0,
    [Abilities.WISDOM]: 0,
    [Abilities.CHARISMA]: 0
};

const skillRanks = {};

for(let skill in skills) {
    skillRanks[skill] = 0;
}


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
    armor: { 
        name: '',
        penalty: 0,
        maxDexterity: 10,
        speedAdjustment: 0,
        bonuses: {misc: 0, damageReduction: 0, resistances: '' }
    },
    currentHealth: { hitPoints: 10 , staminaPoints: 6, resolvePoints: 1 },
    skills: {
        profession1Ability: Abilities.CHARISMA,
        profession2Ability: Abilities.CHARISMA,
        skillRanks        
    }
}
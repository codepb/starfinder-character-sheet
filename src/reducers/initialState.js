import Character from '../models/character';
import AbilityScore from '../models/abilityScore';

export default {
    character: new Character({
        
    }),
    abilityScores: [
        new AbilityScore({
            name: 'Strength',
            score: 12
        }),
        new AbilityScore({
            name: 'Dexterity',
            score: 10
        }),
        new AbilityScore({
            name: 'Constitution',
            score: 18
        }),
        new AbilityScore({
            name: 'Intelligence',
            score: 12
        }),
        new AbilityScore({
            name: 'Wisdom',
            score: 12
        }),
        new AbilityScore({
            name: 'Charisma',
            score: 12
        })
    ]
}
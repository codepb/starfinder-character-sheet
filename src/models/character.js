import AbilityScore from './abilityScore';

export default class Character {
    abilityScores = [];
    race;
    theme;

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
    }
}
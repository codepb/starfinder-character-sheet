import AbilityScore from './abilityScore';

export default class Character {
    abilityScores = [];

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
    }
}
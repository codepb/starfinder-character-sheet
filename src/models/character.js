export default class Character {
    abilityScores = [];
    name = '';
    race;
    theme;

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
    }
}
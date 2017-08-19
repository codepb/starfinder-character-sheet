export default class AbilityScore {
    name;
    score;
    get modifier() {
        return (this.score/2) - 5;
    }

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
    }

    getUpdatedAbilityScore = (newScore) => {
        return new AbilityScore({ ...this, score: newScore});
    }
}
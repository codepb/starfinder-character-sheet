export default class AbilityScore {
    name;
    baseScore = 0;
    raceModifier = 0;
    themeModifier = 0;
    pointsAssigned = 0;

    get score() {
        return this.baseScore + this.raceModifier + this.themeModifier + this.pointsAssigned;
    }
    get modifier() {
        return Math.floor(this.score / 2 - 5);
    }

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
    }
}
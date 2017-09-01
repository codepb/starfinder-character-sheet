export default class AbilityScore {
    name;
    baseScore = 0;
    raceModifier = 0;
    themeModifier = 0;
    pointsAssigned = 0;
    score;
    modifier;

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
        this.score = this.baseScore + this.raceModifier + this.themeModifier + this.pointsAssigned;
        this.modifier = Math.floor(this.score / 2 - 5);
    }
}
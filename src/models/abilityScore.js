export default class AbilityScore {
    name;
    get score() {
        return this.baseScore + this.racialModifier + this.themeModifier + this.pointsAssigned;
    }
    get modifier() {
        return Math.floor(this.score / 2 - 5);
    }
    baseScore = 10;
    pointsAssigned = 0;
    racialModifier = 0;
    themeModifier = 0;
    isDefaultRacialModifier = false;
    isDefaultThemeModifier = false;
    isKey = false;

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
    }

    updateTo = (newScore) => {
        return new AbilityScore({ ...this, points: newScore - this.racialModifier - this.themeModifier - this.baseScore});
    }
}
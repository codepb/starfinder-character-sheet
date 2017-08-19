export default class AbilityScore {
    name;
    get score() {
        return this.baseScore + this.racialModifier + this.themeModifier;
    }
    baseScore = 0;
    racialModifier = 0;
    themeModifier = 0;
    isDefaultRacialModifier = false;
    isDefaultThemeModifier = false;

    constructor(params) {
        for (let i in params) {
            this[i] = params[i];
        }
    }

    updateTo = (newScore) => {
        return new AbilityScore({ ...this, baseScore: newScore - this.racialModifier});
    }
}
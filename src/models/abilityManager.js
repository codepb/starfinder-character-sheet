export default class AbilityManager {
  abilityScores = []
  get totalPointsToSpend() {
    return 10;
  }
  remainingPointsToSpent = this.totalPointsToSpend;  

  constructor(params) {
      for (let i in params) {
          this[i] = params[i];
      }
  }
}
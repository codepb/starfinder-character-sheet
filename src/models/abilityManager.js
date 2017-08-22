export default class AbilityManager {
  abilityScores = []
  get totalPointsToSpend() {
    return 10;
  }
  remainingPointsToSpent = this.totalPointsToSpend;  

  getKeyAbilityScore = () => {
    for(let ability in this.abilityScores){
      if(this.abilityScores[ability].isKey) {
        return this.abilityScores[ability];
      }
    }
  }

  constructor(params) {
      for (let i in params) {
          this[i] = params[i];
      }
  }
}
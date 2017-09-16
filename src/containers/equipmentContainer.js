import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as equipmentActions from '../actions/equipmentActions';
import EquipmentList from '../components/equipmentList';
import * as abilities from '../rules/abilities';
import AbilityManager from '../models/abilityManager';

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();
  const abilityName = abilities.STRENGTH;
  const currentRace = state.character.race;
  const currentTheme = state.character.theme;
  const abilityPoints = state.abilityScores.abilityPoints[abilityName];
  const isDefaultRaceBonus = state.abilityScores.defaultRaceBonus === abilityName;
  const isDefaultThemeBonus = state.abilityScores.defaultThemeBonus === abilityName;
  
  const abilityScore = abilityManager.getAbilityScore(currentRace, currentTheme, abilityPoints, abilityName, isDefaultRaceBonus, isDefaultThemeBonus).score;
  const totalBulk = Math.floor(state.equipment.reduce((a,b) => { return a + b.weight}, 0));
  const encumberanceThreshold = abilityScore / 2;
  let encumberanceState = "unencumbered";
  if (totalBulk >= abilityScore) {
    encumberanceState = "overburdened";
  } else if (totalBulk >= encumberanceThreshold) {
    encumberanceState = "encumbered";
  }
  const armor = { name: state.armor.name, quantity: 1, level: state.armor.level, bulk: state.armor.bulk, canRemove: false };
  const weapons = state.weapons.map(w => { return { name: w.weapon, quantity: 1, level: w.level, bulk: w.bulk, canRemove: false }});
  const equipment = [armor, ...weapons, ...state.equipment.map(e => { return {...e, canRemove: true}})]
  return {
      equipment: equipment,
      totalBulk: totalBulk,
      encumberanceThreshold: encumberanceThreshold,
      encumberanceState: encumberanceState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(equipmentActions, dispatch);
}

const EquipmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EquipmentList);

export default EquipmentContainer;
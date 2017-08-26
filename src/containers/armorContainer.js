import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Armor from '../components/armor';
import * as armorActions from '../actions/armorActions';
import * as Abilities from '../rules/abilities';
import AbilityManager from '../models/abilityManager';

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();  
    return {
        dexterityModifier: Math.min(abilityManager.getAbilityScoreFromState(state, Abilities.DEXTERITY).modifier, state.armor.maxDexterity),
        armorBonuses: getArmorBonusesFromState(state),
        damageReduction: state.armor.bonuses.damageReduction,
        resistances: state.armor.bonuses.resistances,
        armorWorn: state.armor.name,
        armorPenalty: state.armor.penalty,
        armorMaxDexterity: state.armor.maxDexterity,
        armorSpeedAdjustment: state.armor.speedAdjustment
    };
}

function getArmorBonusesFromState(state) {
  return {
    kinetic: 0,
    energy: 0,
    misc: state.armor.bonuses.misc
  }
}

function mapDispatchToProps(dispatch) {
  return {
    armorActions: bindActionCreators(armorActions, dispatch)
  };
}


const ArmorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Armor);

export default ArmorContainer;
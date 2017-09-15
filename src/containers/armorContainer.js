import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Armor from '../components/armor';
import * as armorActions from '../actions/armorActions';
import * as Abilities from '../rules/abilities';
import AbilityManager from '../models/abilityManager';

class ArmorContainer extends Component {
  abilityManager = new AbilityManager();

  render() {
    const {armorLevel, armorBulk, armorBonuses, armorWorn, armorPenalty, armorMaxDexterity, armorSpeedAdjustment, armorActions, currentRace, currentTheme, abilityScores} = this.props;
    const dexterityModifier = Math.min(this.abilityManager.getAbilityScoreFromState(currentRace, currentTheme, abilityScores, Abilities.DEXTERITY).modifier, armorMaxDexterity);

    return <Armor
              dexterityModifier={dexterityModifier}
              armorBonuses={armorBonuses}
              damageReduction={armorBonuses.damageReduction}
              resistances={armorBonuses.resistances}
              armorWorn={armorWorn}
              armorPenalty={armorPenalty}
              armorMaxDexterity={armorMaxDexterity}
              armorSpeedAdjustment={armorSpeedAdjustment}
              armorBulk={armorBulk}
              armorLevel={armorLevel}
              armorActions={armorActions} />;
  }
}

function mapStateToProps(state) {
    return {
      armorBonuses: state.armor.bonuses,
      damageReduction: state.armor.bonuses.damageReduction,
      resistances: state.armor.bonuses.resistances,
      armorWorn: state.armor.name,
      armorPenalty: state.armor.penalty,
      armorMaxDexterity: state.armor.maxDexterity,
      armorBulk: state.armor.bulk,
      armorLevel: state.armor.level,
      armorSpeedAdjustment: state.armor.speedAdjustment,
      currentRace: state.character.race,
      currentTheme: state.character.theme,
      abilityScores: state.abilityScores
    };
}

function mapDispatchToProps(dispatch) {
  return {
    armorActions: bindActionCreators(armorActions, dispatch)
  };
}

const ConnectedArmorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArmorContainer);

export default ConnectedArmorContainer;
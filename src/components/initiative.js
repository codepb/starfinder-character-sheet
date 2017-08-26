import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'material-ui/Icon';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import AbilityInput from './utilities/abilityInput';
import * as initiativeActions from '../actions/initiativeActions';
import * as Abilities from '../rules/abilities';
import AbilityManager from '../models/abilityManager';

var styles = {
  icons: { verticalAlign: 'middle' }
};

class Initiative extends Component {
  miscUpdated = (ev) => {
    this.props.initiativeActions.updateMiscInitiative(ev.target.value * 1);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Initiative" />
        <CardContent>
          <AbilityInput label="Total" value={this.props.dexterityModifier + this.props.miscInitiative} disabled={true} />
          <Icon style={styles.icons}>drag_handle</Icon>
          <AbilityInput label="Dexterity" value={this.props.dexterityModifier} disabled={true} />
          <Icon style={styles.icons}>add</Icon>
          <AbilityInput label="Misc" type="number" value={this.props.miscInitiative} onChange={this.miscUpdated}/>
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const abilityManager = new AbilityManager();
  return {
      dexterityModifier: abilityManager.getAbilityScoreFromState(state, Abilities.DEXTERITY).modifier,
      miscInitiative: state.initiative
  };
}

function mapDispatchToProps(dispatch) {
  return {
      initiativeActions: bindActionCreators(initiativeActions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Initiative);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import * as healthActions from '../actions/healthActions';
import AbilityInput from './utilities/abilityInput';

var styles = {
  textFld: { width: 60, textAlign: 'center' },
  label: { width: 100, marginRight: '5px' },
  icons: { verticalAlign: 'middle' }
};

class Health extends Component {
  staminaPointsUpdated = (ev) => {
    this.props.healthActions.updateCurrentStaminaPoints(ev.target.value * 1);
  }

  hitPointsUpdated = (ev) => {
    this.props.healthActions.updateCurrentHitPoints(ev.target.value * 1);
  }

  resolvePointsUpdated = (ev) => {
    this.props.healthActions.updateCurrentResolvePoints(ev.target.value * 1);
  }

  render() {
    return (
      <Card raised={true}>
        <CardHeader title="Health and Resolve" />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Stamina Points</TableCell>
                <TableCell>Hit Points</TableCell>
                <TableCell>Resolve Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
            <TableCell>Total</TableCell>
            <TableCell ><AbilityInput type="number" value={this.props.staminaPoints.total} disabled={true} style={styles.textFld}/></TableCell>
            <TableCell><AbilityInput type="number" value={this.props.hitPoints.total} disabled={true} style={styles.textFld}/></TableCell>
            <TableCell><AbilityInput type="number" value={this.props.resolvePoints.total} disabled={true} style={styles.textFld}/></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>Current</TableCell>
            <TableCell><AbilityInput type="number" value={this.props.staminaPoints.current} onChange={this.staminaPointsUpdated} style={styles.textFld}/></TableCell>
            <TableCell><AbilityInput type="number" value={this.props.hitPoints.current} onChange={this.hitPointsUpdated} style={styles.textFld}/></TableCell>
            <TableCell><AbilityInput type="number" value={this.props.resolvePoints.current} onChange={this.resolvePointsUpdated} style={styles.textFld}/></TableCell>
          </TableRow>
          </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state) {    
    return {
      hitPoints: state.health.hitPoints,
      staminaPoints: state.health.staminaPoints,
      resolvePoints: state.health.resolvePoints
    };
}

function mapDispatchToProps(dispatch) {
  return {
    healthActions: bindActionCreators(healthActions, dispatch)
  };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Health);
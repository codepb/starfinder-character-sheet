import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import * as abilityScoreActions from '../actions/abilityScoreActions'
import AbilityScore from './abilityScore';
import themes from '../rules/themes';

class AbilityScores extends Component {

  render() {
      const rows = []; 
      for (let ability in this.props.abilityScores.abilityScores) {
        const abilityScore = this.props.abilityScores.abilityScores[ability];
        rows.push(<AbilityScore key={abilityScore.name} abilityScore={abilityScore}
            canEditDefaultRacial={this.props.currentRace.hasUnspecifiedModifiers}
            canEditDefaultTheme={themes.find(t => t.name === this.props.currentTheme).hasUnspecifiedModifiers} />)
      }
    return (
        <Card raised={true}>
            <CardHeader title="Ability Scores" />
            <CardContent>
                <Table>
                    <TableHead>
                            <TableRow>
                                <TableCell>Skill</TableCell>
                                <TableCell>Score</TableCell>
                                <TableCell>Modifier</TableCell>
                                <TableCell>Racial</TableCell>
                                <TableCell>Theme</TableCell>
                                <TableCell>Assigned</TableCell>                   
                                <TableCell>Racial Bonus</TableCell>
                                <TableCell>Theme Bonus</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                </Table>
                <Typography align='right'>Points Remaining: {this.props.abilityScores.remainingPointsToSpent}</Typography>
            </CardContent>
        </Card>
    );
  }
}

function mapStateToProps(state) {    
    return {
        abilityScores: state.abilityScores,
        currentRace: state.character.race,
        currentTheme: state.character.theme
    };
}

function mapDispatchToProps(dispatch) {
    return {
        abilityScoreActions: bindActionCreators(abilityScoreActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbilityScores);
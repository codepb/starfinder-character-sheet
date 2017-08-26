import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import AbilityScore from './abilityScore';

export default class AbilityScores extends Component {

  render() {
      const rows = []; 
      for (let ability in this.props.abilityScores) {
        const abilityScore = this.props.abilityScores[ability];
        rows.push(<AbilityScore key={abilityScore.name} abilityScore={abilityScore}
            canEditDefaultRaceBonus={this.props.canEditDefaultRaceBonus}
            canEditDefaultThemeBonus={this.props.canEditDefaultThemeBonus}
            isDefaultRaceBonus={this.props.defaultRaceBonus === ability}
            isDefaultThemeBonus={this.props.defaultThemeBonus === ability}
            isKey={ability === this.props.keyAbility} />)
      }
    return (
        <Card raised={true}>
            <CardHeader title="Ability Scores" />
            <CardContent>
                <Table>
                    <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
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
                <Typography align='right'>Points Remaining: {this.props.remainingPointsToSpent}</Typography>
            </CardContent>
        </Card>
    );
  }
}
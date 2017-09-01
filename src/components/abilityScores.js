import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import AbilityScore from './abilityScore';

export default class AbilityScores extends Component {
    render() {
        const {abilityScores, canEditDefaultRaceBonus, canEditDefaultThemeBonus, defaultRaceBonus, defaultThemeBonus, keyAbility, remainingPointsToSpent, abilityScoreActions} = this.props;
        const rows = [];
        for (let ability in abilityScores) {
            const abilityScore = abilityScores[ability];
            rows.push(<AbilityScore
                key={abilityScore.name}
                canEditDefaultRaceBonus={canEditDefaultRaceBonus}
                canEditDefaultThemeBonus={canEditDefaultThemeBonus}
                isDefaultRaceBonus={defaultRaceBonus === ability}
                isDefaultThemeBonus={defaultThemeBonus === ability}
                isKey={ability === keyAbility}
                abilityScoreActions={abilityScoreActions}
                {...abilityScore} />);
        }

        return (
            <Card raised={true}>
                <CardHeader title="Ability Scores" />
                <CardContent>
                    <Table>
                        <TableHead>
                                <TableRow>
                                    <TableCell disablePadding={true}></TableCell>
                                    <TableCell compact={true}>Skill</TableCell>
                                    <TableCell compact={true} style={{textAlign: 'center'}}>Score</TableCell>
                                    <TableCell compact={true} style={{textAlign: 'center'}}>Modifier</TableCell>
                                    <TableCell compact={true} style={{textAlign: 'center'}}>Race Bonus</TableCell>
                                    <TableCell compact={true} style={{textAlign: 'center'}}>Theme Bonus</TableCell>
                                    <TableCell compact={true} style={{textAlign: 'center'}}>Assigned</TableCell>
                                    <TableCell disablePadding={true} />
                                    <TableCell disablePadding={true} />  
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows}
                            </TableBody>
                    </Table>
                    <Typography align='right'>Points Remaining: {remainingPointsToSpent}</Typography>
                </CardContent>
            </Card>
        );
    }
}
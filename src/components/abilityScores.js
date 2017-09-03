import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default class AbilityScores extends Component {
    render() {
        const {children, remainingPointsToSpend} = this.props;

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
                                {children}
                            </TableBody>
                    </Table>
                    <Typography align='right'>Points Remaining: {remainingPointsToSpend}</Typography>
                </CardContent>
            </Card>
        );
    }
}
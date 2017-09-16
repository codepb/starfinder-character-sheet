import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import ComponentContainer from './componentContainer';

export default class AbilityScores extends Component {
    render() {
        const {children, remainingPointsToSpend} = this.props;

        return (
            <ComponentContainer title="Ability Scores">
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
            </ComponentContainer>
        );
    }
}
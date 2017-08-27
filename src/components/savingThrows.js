import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import SavingThrowRow from './savingThrowRow';

export default class SavingThrow extends Component {
  render() {
    const rows = []; 
    for (let savingThrow in this.props.savingThrows) {
      const savingThrowDetails = this.props.savingThrows[savingThrow];
      rows.push(<SavingThrowRow key={savingThrow}
          miscModifier={savingThrowDetails.miscModifier}
          abilityModifier={savingThrowDetails.abilityModifier}
          base={savingThrowDetails.base}
          name={savingThrow}
          savingThrowActions={this.props.savingThrowActions} />)
    }
    return (
      <Card raised={true}>
        <CardHeader title="Saving Throws" />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell compact={true}/>
                <TableCell compact={true}>Total</TableCell>
                <TableCell compact={true}>Base</TableCell>
                <TableCell compact={true}>Ability</TableCell>
                <TableCell compact={true}>Misc.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}
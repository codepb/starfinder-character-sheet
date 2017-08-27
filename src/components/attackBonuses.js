import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import AttackBonusRow from './attackBonusRow';

export default class SavingThrow extends Component {
  render() {
    const rows = [];
    for (let attackBonus in this.props.attackBonuses) {
      const attackBonusDetails = this.props.attackBonuses[attackBonus];
      rows.push(<AttackBonusRow key={attackBonus} {...attackBonusDetails}
          name={attackBonus}
          attackBonusActions={this.props.attackBonusActions} />)
    }

    return (
      <Card raised={true}>
        <CardHeader title="Attack Bonuses" />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell compact={true}/>
                <TableCell compact={true} style={{textAlign: 'center'}}>Total</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>BAB</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Ability</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Misc.</TableCell>
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
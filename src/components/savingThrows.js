import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import SavingThrowRow from './savingThrowRow';
import ComponentContainer from './componentContainer';

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
      <ComponentContainer title="Saving Throws">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell compact={true}/>
                <TableCell compact={true} style={{textAlign: 'center'}}>Total</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Base</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Ability</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Misc.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
      </ComponentContainer>
    );
  }
}
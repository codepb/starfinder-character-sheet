import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import SkillDisplay from './skillDisplay';

export default class SkillsList extends Component {
  render() {
    const rows = []; 
    for (let skill in this.props.skills) {
      const skillDetails = this.props.skills[skill];
      rows.push(<SkillDisplay key={skill} isTrainedOnly={skillDetails.isTrainedOnly}
          skill={skill}
          ability={skillDetails.ability}
          isClassSkill={skillDetails.isClassSkill}
          ranks={skillDetails.ranks}
          abilityModifier={skillDetails.abilityModifier}
          miscModifier={skillDetails.miscModifier}
          skillActions={this.props.skillActions} />)
    }
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell>Total</TableCell>
            <TableCell>Ranks</TableCell>
            <TableCell>Class Bonus</TableCell>
            <TableCell>Ability Mod.</TableCell>
            <TableCell>Misc. Mod.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    );
  }
}
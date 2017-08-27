import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableRow, TableCell} from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
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
          skillActions={this.props.skillActions}
          armorCheckPenalty={skillDetails.armorCheckPenalty}
          armorCheckPenaltyApplies={skillDetails.armorCheckPenaltyApplies} />)
    }
    return (
      <Card raised={true}>
        <CardHeader title="Skills" />
        <CardContent>
          <Typography align='right'>Skill Ranks per Level: {this.props.skillRanksPerLevel}</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell disablePadding={true}/>
                <TableCell disablePadding={true}/>
                <TableCell compact={true}/>
                <TableCell compact={true}>Total</TableCell>
                <TableCell compact={true}>Ranks</TableCell>
                <TableCell compact={true}>Class</TableCell>
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
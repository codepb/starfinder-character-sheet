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
      rows.push(<SkillDisplay key={skill} skill={skill} skillActions={this.props.skillActions} {...skillDetails} />);
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
                <TableCell compact={true} style={{textAlign: 'center'}}>Total</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Ranks</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Class</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Ability</TableCell>
                <TableCell compact={true} style={{textAlign: 'center'}}>Theme</TableCell>
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
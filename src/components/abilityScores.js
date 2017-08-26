import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import * as abilityScoreActions from '../actions/abilityActions'
import AbilityScore from './abilityScore';
import AbilityManager from '../models/abilityManager';
import themes from '../rules/themes';
import * as Abilities from '../rules/abilities';
import races from '../rules/races';
import classes from '../rules/classes';

class AbilityScores extends Component {

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

function mapStateToProps(state) {
    const abilityManager = new AbilityManager();
    const currentRace = races[state.character.race];
    const currentTheme = themes[state.character.theme];
    const currentClass = classes[state.character.class];
    return {
        abilityScores: getAbilityScoresFromState(state, abilityManager),
        currentRace: state.character.race,
        currentTheme: state.character.theme,
        canEditDefaultRaceBonus: currentRace.hasUnspecifiedModifiers,
        canEditDefaultThemeBonus: currentTheme.hasUnspecifiedModifiers,
        remainingPointsToSpent: abilityManager.getRemainingPointsToSpendFromState(state),
        defaultRaceBonus: state.abilities.defaultRaceBonus,
        defaultThemeBonus: state.abilities.defaultThemeBonus,
        keyAbility: currentClass.keyAbility
    };
}

function getAbilityScoresFromState(state, abilityManager) {
    return {
        [Abilities.STRENGTH]: abilityManager.getAbilityScoreFromState(state, Abilities.STRENGTH),
        [Abilities.DEXTERITY]: abilityManager.getAbilityScoreFromState(state, Abilities.DEXTERITY),
        [Abilities.CONSTITUTION]: abilityManager.getAbilityScoreFromState(state, Abilities.CONSTITUTION),
        [Abilities.INTELLIGENCE]: abilityManager.getAbilityScoreFromState(state, Abilities.INTELLIGENCE),
        [Abilities.WISDOM]: abilityManager.getAbilityScoreFromState(state, Abilities.WISDOM),
        [Abilities.CHARISMA]: abilityManager.getAbilityScoreFromState(state, Abilities.CHARISMA),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        abilityScoreActions: bindActionCreators(abilityScoreActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbilityScores);
import * as React from "react";
import injectSheet from "react-jss";
import { AbilityScores as AbilityScoresType } from "../../character/useAbilityScores";
import Container from "../layout/Container";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@material-ui/core";
import { alertRoll } from "../../services/dice";

const styles = {
  modifier: {
    fontWeight: "bold",
    width: 15,
    paddingRight: 10
  },
  ability: {
    width: 100,
    paddingRight: 10
  }
};

interface AbilityScoreModifiersProps {
  abilityScores: AbilityScoresType;
  abilityModifiers: AbilityScoresType;
  classes: any;
}

const formatModifier = modifier => (modifier >= 0 ? "+" + modifier : modifier);

const AbilityScoreModifiers: React.FC<AbilityScoreModifiersProps> = ({
  abilityScores,
  abilityModifiers,
  classes
}) => (
  <Container>
    <Table>
      <TableBody>
        {Object.entries(abilityScores).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell className={classes.ability}>{key}</TableCell>
            <TableCell className={classes.modifier}>
              {formatModifier(abilityModifiers[key])}
            </TableCell>
            <TableCell>{value}</TableCell>
            <TableCell>
              <Button
                color="primary"
                onClick={alertRoll(abilityModifiers[key])}
              >
                Roll
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Container>
);

export default injectSheet(styles)(AbilityScoreModifiers);

import * as React from "react";
import injectSheet from "react-jss";
import { AbilityScores as AbilityScoresType } from "../../character/useAbilityScores";

const styles = {
  modifier: {
    fontWeight: "bold"
  },
  score: {
    fontSize: 10,
    verticalAlign: "bottom"
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
  <>
    <table>
      <tbody>
        {Object.entries(abilityScores).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td className={classes.modifier}>
              {formatModifier(abilityModifiers[key])}
            </td>
            <td className={classes.score}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default injectSheet(styles)(AbilityScoreModifiers);

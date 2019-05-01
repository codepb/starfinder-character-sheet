import * as React from "react";
import {
  AbilityScores as AbilityScoresType,
  AbilityScores
} from "../../character/useAbilityScores";
import { Checkbox, Table } from "@material-ui/core";

interface AbilityScoresLevelUpProps {
  abilityScores: AbilityScoresType;
  abilityModifiers: AbilityScoresType;
  abilitiesRemaining: number;
  checkedAbilities: (keyof AbilityScores)[];
  onAbilityChange(ability: keyof AbilityScores, value: boolean): void;
}

const AbilityScoresLevelUp: React.FC<AbilityScoresLevelUpProps> = ({
  abilityScores,
  abilityModifiers,
  abilitiesRemaining,
  checkedAbilities,
  onAbilityChange
}) => (
  <>
    <Table>
      <tbody>
        {Object.entries(abilityScores).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            <td>{abilityModifiers[key]}</td>
            <td>
              <Checkbox
                id={`ability-${key}`}
                color="primary"
                value={key}
                checked={
                  checkedAbilities &&
                  checkedAbilities.includes(key as keyof AbilityScores)
                }
                onChange={event => {
                  onAbilityChange(
                    key as keyof AbilityScores,
                    event.target.checked
                  );
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div>Abilities Remaining: {abilitiesRemaining}</div>
  </>
);

export default AbilityScoresLevelUp;

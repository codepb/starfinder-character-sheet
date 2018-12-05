import * as React from "react";
import { AbilityScores as AbilityScoresType } from "../../character/useAbilityScores";

interface AbilityScoresProps {
  abilityScores: AbilityScoresType;
  onIncrement: (abilityScore: keyof AbilityScoresType) => void;
  onDecrement: (abilityScore: keyof AbilityScoresType) => void;
}

const AbilityScores: React.FC<AbilityScoresProps> = ({
  abilityScores,
  onIncrement,
  onDecrement
}) => (
  <table>
    <tbody>
      {Object.entries(abilityScores).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
          <td>
            <button onClick={() => onIncrement(key as keyof AbilityScoresType)}>
              +
            </button>
          </td>
          <td>
            <button onClick={() => onDecrement(key as keyof AbilityScoresType)}>
              -
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AbilityScores;

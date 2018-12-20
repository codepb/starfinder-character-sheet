import * as React from "react";
import { AbilityScores as AbilityScoresType } from "../../character/useAbilityScores";

interface AbilityScoresProps {
  abilityScores: AbilityScoresType;
  baseAbilityScores: AbilityScoresType;
  pointsRemaining: number;
  onIncrement: (abilityScore: keyof AbilityScoresType) => void;
  onDecrement: (abilityScore: keyof AbilityScoresType) => void;
  canIncrement: (keyof AbilityScoresType)[];
  canDecrement: (keyof AbilityScoresType)[];
}

const AbilityScores: React.FC<AbilityScoresProps> = ({
  abilityScores,
  baseAbilityScores,
  pointsRemaining,
  onIncrement,
  onDecrement,
  canIncrement,
  canDecrement
}) => (
  <>
    <table>
      <tbody>
        {Object.entries(abilityScores).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            <td>
              <button
                onClick={() => onIncrement(key as keyof AbilityScoresType)}
                disabled={
                  !canIncrement.includes(key as keyof AbilityScoresType)
                }
              >
                +
              </button>
            </td>
            <td>
              <button
                onClick={() => onDecrement(key as keyof AbilityScoresType)}
                disabled={
                  !canDecrement.includes(key as keyof AbilityScoresType)
                }
              >
                -
              </button>
            </td>
            <td>{baseAbilityScores[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>Points Remaining: {pointsRemaining}</div>
  </>
);

export default AbilityScores;

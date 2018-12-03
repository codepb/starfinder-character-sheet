import * as React from "react";
import { AbilityScores as AbilityScoresType } from "../../character/useAbilityScores";

interface AbilityScoresProps {
  abilityScores: AbilityScoresType;
  onIncrement: (abilityScore: keyof AbilityScoresType) => void;
}

const AbilityScores: React.FC<AbilityScoresProps> = ({
  abilityScores,
  onIncrement
}) => (
  <>
    <pre>{JSON.stringify(abilityScores, null, 4)}</pre>
    <button onClick={() => onIncrement("charisma")}>increment charisma</button>
  </>
);

export default AbilityScores;

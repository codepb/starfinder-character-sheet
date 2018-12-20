import * as React from "react";
import AbilitiyScores from "../../components/abilities/AbilityScores";
import useAbilityScores from "../../character/useAbilityScores";

const AbilityScoresContainer: React.FC = () => {
  const {
    abilityScores,
    baseAbilityScores,
    pointsRemaining,
    increment,
    decrement,
    canDecrement,
    canIncrement
  } = useAbilityScores();
  return (
    <AbilitiyScores
      abilityScores={abilityScores}
      baseAbilityScores={baseAbilityScores}
      pointsRemaining={pointsRemaining}
      onIncrement={increment}
      onDecrement={decrement}
      canIncrement={canIncrement}
      canDecrement={canDecrement}
    />
  );
};

export default AbilityScoresContainer;

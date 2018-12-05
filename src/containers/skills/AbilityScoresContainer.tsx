import * as React from "react";
import AbilitiyScores from "../../components/abilities/AbilityScores";
import useAbilityScores from "../../character/useAbilityScores";

const AbilityScoresContainer: React.FC = () => {
  const { abilityScores, increment, decrement } = useAbilityScores();
  return (
    <AbilitiyScores
      abilityScores={abilityScores}
      onIncrement={increment}
      onDecrement={decrement}
    />
  );
};

export default AbilityScoresContainer;

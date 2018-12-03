import * as React from "react";
import AbilitiyScores from "../../components/abilities/AbilityScores";
import useAbilityScores from "../../character/useAbilityScores";

const AbilityScoresContainer: React.FC = () => {
  const [abilityScores, setAbilityScores] = useAbilityScores();
  return (
    <AbilitiyScores
      abilityScores={abilityScores}
      onIncrement={abilityScore => {
        setAbilityScores(prevAbilityScores => ({
          ...prevAbilityScores,
          [abilityScore]: prevAbilityScores[abilityScore] + 1
        }));
      }}
    />
  );
};

export default AbilityScoresContainer;

import * as React from "react";
import AbilityScoreModifiers from "../../components/abilities/AbilityScoreModifiers";
import useAbilityScores from "../../character/useAbilityScores";

const CharacterDisplayContainer: React.FC = () => {
  const { abilityScores, abilityModifiers } = useAbilityScores();
  return (
    <>
      <AbilityScoreModifiers
        abilityScores={abilityScores}
        abilityModifiers={abilityModifiers}
      />
    </>
  );
};

export default CharacterDisplayContainer;

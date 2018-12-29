import * as React from "react";
import AbilityScoreModifiers from "../../components/abilities/AbilityScoreModifiers";
import useAbilityScores from "../../character/useAbilityScores";
import SkillsDisplay from "../../components/skills/SkillsDisplay";
import useSkills from "../../character/useSkills";

const CharacterDisplayContainer: React.FC = () => {
  const { abilityScores, abilityModifiers } = useAbilityScores();
  const { skillLevels, classSkills, trainedSkills } = useSkills();
  return (
    <>
      <AbilityScoreModifiers
        abilityScores={abilityScores}
        abilityModifiers={abilityModifiers}
      />
      <SkillsDisplay
        skillLevels={skillLevels}
        classSkills={classSkills}
        trainedSkills={trainedSkills}
      />
    </>
  );
};

export default CharacterDisplayContainer;

import * as React from "react";
import AbilityScoreModifiers from "../../components/abilities/AbilityScoreModifiers";
import useAbilityScores from "../../character/useAbilityScores";
import SkillsDisplay from "../../components/skills/SkillsDisplay";
import useSkills from "../../character/useSkills";
import useBasicStats from "../../character/useBasicStats";
import useHealth from "../../character/useHealth";
import HealthAndResolve from "../../components/characterDetails/HealthAndResolve";
import useInitiative from "../../character/useInitiative";
import Initiative from "../../components/characterDetails/Initiative";
import SavingThrows from "../../components/characterDetails/SavingThrows";
import useSavingThrows from "../../character/useSavingThrows";
import AttackBonuses from "../../components/characterDetails/AttackBonuses";
import useAttackBonuses from "../../character/useAttackBonuses";
import useArmorClasses from "../../character/useArmorClasses";
import ArmorClasses from "../../components/characterDetails/ArmorClasses";

const CharacterDisplayContainer: React.FC = () => {
  const { abilityScores, abilityModifiers } = useAbilityScores();
  const { skillLevels, classSkills, trainedSkills } = useSkills();
  const healthAndResolve = useHealth();
  const savingThrows = useSavingThrows();
  const initiative = useInitiative();
  const attackBonsues = useAttackBonuses();
  const armorClasses = useArmorClasses();
  return (
    <>
      <Initiative initiative={initiative} />
      <HealthAndResolve {...healthAndResolve} />
      <SavingThrows {...savingThrows} />
      <AbilityScoreModifiers
        abilityScores={abilityScores}
        abilityModifiers={abilityModifiers}
      />
      <AttackBonuses {...attackBonsues} />
      <ArmorClasses {...armorClasses} />
      <SkillsDisplay
        skillLevels={skillLevels}
        classSkills={classSkills}
        trainedSkills={trainedSkills}
      />
    </>
  );
};

export default CharacterDisplayContainer;

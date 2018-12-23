import * as React from "react";
import AssignSkills from "../../components/skills/AssignSkills";
import useSkills from "../../character/useSkills";

const AssignSkillsContainer: React.FC = () => {
  const {
    baseSkills,
    skillLevels,
    classSkills,
    checkSkill,
    uncheckSkill
  } = useSkills();
  return (
    <AssignSkills
      skills={baseSkills}
      skillLevels={skillLevels}
      classSkills={classSkills}
      onSkillChange={(key, value) => {
        value ? checkSkill(key) : uncheckSkill(key);
      }}
    />
  );
};

export default AssignSkillsContainer;

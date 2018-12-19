import * as React from "react";
import AssignSkills from "../../components/skills/AssignSkills";
import useSkills from "../../character/useSkills";

const AssignSkillsContainer: React.FC = () => {
  const { baseSkills, checkSkill, uncheckSkill } = useSkills();
  return (
    <AssignSkills
      skills={baseSkills}
      onSkillChange={(key, value) => {
        value ? checkSkill(key) : uncheckSkill(key);
      }}
    />
  );
};

export default AssignSkillsContainer;

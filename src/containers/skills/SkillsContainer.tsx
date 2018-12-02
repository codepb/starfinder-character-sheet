import * as React from "react";
import useSkills from "../../character/useSkills";
import Skills from "../../components/skills/Skills";

const SkillsContainer: React.FC = () => {
  const [skills, setSkills] = useSkills();
  return <Skills skills={skills} />;
};

export default SkillsContainer;

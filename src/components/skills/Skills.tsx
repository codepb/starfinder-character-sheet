import * as React from "react";
import { Skills } from "../../character/useSkills";

interface SkillsProps {
  skills: Skills;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <pre>{skills.toString}</pre>
);

export default Skills;

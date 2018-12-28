import * as React from "react";
import {
  Skills,
  skillDefinitions,
  SkillLevels
} from "../../character/useSkills";

interface AssignSkillsProps {
  skills: Skills;
  skillLevels: SkillLevels;
  classSkills: (keyof Skills)[];
  onSkillChange: (key: keyof Skills, checked: boolean) => void;
}

const AssignSkills: React.FC<AssignSkillsProps> = ({
  skills,
  skillLevels,
  classSkills,
  onSkillChange
}) => (
  <>
    {Object.keys(skillDefinitions).map(k => (
      <React.Fragment key={k}>
        <div key={k}>
          <label htmlFor={`skill-${k}`}>
            {classSkills.includes(k as keyof Skills) ? "*" : " "}
            {k}
          </label>{" "}
          <span>{skillLevels[k]}</span>
          <input
            id={`skill-${k}`}
            type="checkbox"
            value={k}
            checked={skills[k] || false}
            onChange={event => {
              onSkillChange(k as keyof Skills, event.target.checked);
            }}
          />
        </div>
      </React.Fragment>
    ))}
  </>
);

export default AssignSkills;

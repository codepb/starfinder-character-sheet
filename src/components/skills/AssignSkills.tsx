import * as React from "react";
import { Skills, skillDefinitions } from "../../character/useSkills";

interface AssignSkillsProps {
  skills: Skills;
  onSkillChange: (key: keyof Skills, checked: boolean) => void;
}

const AssignSkills: React.FC<AssignSkillsProps> = ({
  skills,
  onSkillChange
}) => (
  <>
    {Object.keys(skillDefinitions).map(k => (
      <React.Fragment key={k}>
        <div key={k}>
          <label htmlFor={`skill-${k}`}>{k}</label>{" "}
          <input
            id={`skill-${k}`}
            type="checkbox"
            value={k}
            checked={skills[k]}
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

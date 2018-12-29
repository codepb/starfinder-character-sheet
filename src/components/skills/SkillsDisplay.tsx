import * as React from "react";
import injectSheet from "react-jss";
import classnames from "classnames";
import {
  Skills,
  skillDefinitions,
  SkillLevels
} from "../../character/useSkills";

const styles = {
  unusable: {
    color: "#999"
  }
};

interface SkillsDisplayProps {
  skillLevels: SkillLevels;
  classSkills: (keyof Skills)[];
  trainedSkills: (keyof Skills)[];
  classes: any;
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({
  skillLevels,
  classSkills,
  trainedSkills,
  classes
}) => {
  return (
    <>
      {Object.keys(skillDefinitions).map(k => {
        const unusable =
          skillDefinitions[k].trainedOnly &&
          !trainedSkills.includes(k as keyof Skills);
        return (
          <React.Fragment key={k}>
            <div
              key={k}
              className={classnames({
                [classes.unusable]: unusable
              })}
            >
              <label htmlFor={`skill-${k}`}>
                {classSkills.includes(k as keyof Skills) ? "*" : " "}
                {k}
              </label>{" "}
              <span>{unusable ? "" : skillLevels[k]}</span>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default injectSheet(styles)(SkillsDisplay);

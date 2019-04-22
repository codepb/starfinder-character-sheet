import * as React from "react";
import injectSheet from "react-jss";
import classnames from "classnames";
import {
  Skills,
  skillDefinitions,
  SkillLevels
} from "../../character/useSkills";
import Container from "../layout/Container";
import { Table, TableRow, TableCell, Button } from "@material-ui/core";
import { alertRoll } from "../../services/dice";

const styles = {
  unusable: {
    color: "#999"
  },
  classSkill: {
    width: 10,
    paddingRight: 5
  },
  skillName: {
    paddingLeft: 5
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
    <Container>
      <Table>
        {Object.keys(skillDefinitions).map(k => {
          const unusable =
            skillDefinitions[k].trainedOnly &&
            !trainedSkills.includes(k as keyof Skills);
          return (
            <TableRow
              key={k}
              className={classnames({
                [classes.unusable]: unusable
              })}
            >
              <TableCell className={classes.classSkill}>
                {classSkills.includes(k as keyof Skills) ? "*" : ""}
              </TableCell>
              <TableCell className={classes.skillName}>{k}</TableCell>
              <TableCell>{unusable ? "" : skillLevels[k]}</TableCell>
              <TableCell>
                {unusable ? (
                  ""
                ) : (
                  <Button color="primary" onClick={alertRoll(skillLevels[k])}>
                    Roll
                  </Button>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </Container>
  );
};

export default injectSheet(styles)(SkillsDisplay);

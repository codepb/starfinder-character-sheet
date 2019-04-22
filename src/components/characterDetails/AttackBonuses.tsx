import * as React from "react";
import { FC } from "react";
import { alertRoll } from "../../services/dice";
import Container from "../layout/Container";
import { Button } from "@material-ui/core";

interface AttackBonusesProps {
  melee: number;
  ranged: number;
  thrown: number;
}

const AttackBonuses: FC<AttackBonusesProps> = ({ melee, ranged, thrown }) => {
  return (
    <Container>
      <div>
        <label>Melee</label> <span>{melee}</span>{" "}
        <Button color="primary" onClick={alertRoll(melee)}>
          Roll
        </Button>
      </div>
      <div>
        <label>Ranged</label> <span>{ranged}</span>{" "}
        <Button color="primary" onClick={alertRoll(ranged)}>
          Roll
        </Button>
      </div>
      <div>
        <label>Thrown</label> <span>{thrown}</span>{" "}
        <Button color="primary" onClick={alertRoll(thrown)}>
          Roll
        </Button>
      </div>
    </Container>
  );
};

export default AttackBonuses;

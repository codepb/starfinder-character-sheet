import * as React from "react";
import { FC } from "react";
import Container from "../layout/Container";
import { alertRoll } from "../../services/dice";
import { Button } from "@material-ui/core";

interface InitiativeProps {
  initiative: number;
}

const Initiative: FC<InitiativeProps> = ({ initiative }) => {
  return (
    <Container>
      <div>
        <label>Initiative</label> <span>{initiative}</span>
        <Button color="primary" onClick={alertRoll(initiative)}>
          Roll
        </Button>
      </div>
    </Container>
  );
};

export default Initiative;

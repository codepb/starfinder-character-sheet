import * as React from "react";
import { FC } from "react";
import Container from "../layout/Container";
import { sendAlert } from "../layout/Alert";
import { alertRoll } from "../../services/dice";
import { Button } from "@material-ui/core";

interface SavingThrowsProps {
  fortitude: number;
  reflex: number;
  will: number;
}

const SavingThrows: FC<SavingThrowsProps> = ({ fortitude, reflex, will }) => {
  return (
    <Container>
      <div>
        <label>Fortitude</label> <span>{fortitude}</span>
        <Button color="primary" onClick={alertRoll(fortitude)}>
          Roll
        </Button>
      </div>
      <div>
        <label>Reflex</label> <span>{reflex}</span>
        <Button color="primary" onClick={alertRoll(reflex)}>
          Roll
        </Button>
      </div>
      <div>
        <label>Will</label> <span>{will}</span>
        <Button color="primary" onClick={alertRoll(will)}>
          Roll
        </Button>
      </div>
    </Container>
  );
};

export default SavingThrows;

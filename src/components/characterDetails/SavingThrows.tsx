import * as React from "react";
import { FC } from "react";
import { alertRoll } from "../../services/dice";
import { Button, Grid, Typography } from "@material-ui/core";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";

type Classes = "container";

const styles: Record<Classes, CSSProperties> = {
  container: {
    textAlign: "center"
  }
};

interface SavingThrowsProps {
  fortitude: number;
  reflex: number;
  will: number;
  classes: Record<Classes, string>;
}

const SavingThrows: FC<SavingThrowsProps> = ({
  fortitude,
  reflex,
  will,
  classes
}) => {
  return (
    <div className={classes.container}>
      <Typography variant="h5">Saving Throws</Typography>
      <Grid container>
        <Grid item xs={4}>
          <label>Fortitude</label> <span>{fortitude}</span>
          <Button color="primary" onClick={alertRoll(fortitude)}>
            Roll
          </Button>
        </Grid>
        <Grid item xs={4}>
          <label>Reflex</label> <span>{reflex}</span>
          <Button color="primary" onClick={alertRoll(reflex)}>
            Roll
          </Button>
        </Grid>
        <Grid item xs={4}>
          <label>Will</label> <span>{will}</span>
          <Button color="primary" onClick={alertRoll(will)}>
            Roll
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(SavingThrows);

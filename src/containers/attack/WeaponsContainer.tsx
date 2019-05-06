import * as React from "react";
import useWeapons from "../../character/useWeapons";
import Weapon from "../../components/attack/Weapon";
import { Fab, Theme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { sendAlert, closeAlert } from "../../components/layout/Alert";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import AddWeaponContainer from "./AddWeaponContainer";

type Classes = "addButton";

const styles = (theme: Theme): Record<Classes, CSSProperties> => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

interface WeaponsContainerProps {
  classes: Record<Classes, string>;
}

const WeaponsContainer: React.FC<WeaponsContainerProps> = ({ classes }) => {
  const { weapons } = useWeapons();

  return (
    <>
      {weapons.map(w => (
        <Weapon key={w.id} weapon={w} />
      ))}
      <Fab
        className={classes.addButton}
        color="primary"
        onClick={() => sendAlert(<AddWeaponContainer onAdd={closeAlert} />)}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default withStyles(styles)(WeaponsContainer);

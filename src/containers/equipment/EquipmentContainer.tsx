import * as React from "react";
import useEquipment from "../../character/useEquipment";
import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Fab,
  withStyles,
  Theme,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import useWeapons from "../../character/useWeapons";
import useArmor from "../../character/useArmor";
import { sendAlert, closeAlert } from "../../components/layout/Alert";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import AddEquipmentContainer from "./AddEquipmentContainer";

type Classes = "addButton";

const styles = (theme: Theme): Record<Classes, CSSProperties> => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

const EquipmentContainer: React.FC<{ classes: Record<Classes, string> }> = ({
  classes
}) => {
  const {
    equipment,
    totalBulk,
    overburdenedBulk,
    isEncumbered,
    isOverburdened,
    removeEquipment
  } = useEquipment();
  const { weapons } = useWeapons();
  const { armor } = useArmor();

  return (
    <>
      <Typography>
        <strong>Total Bulk:</strong>{" "}
        <Typography
          component="span"
          color={isEncumbered ? "secondary" : "default"}
          inline
        >
          {totalBulk}
        </Typography>{" "}
        / {overburdenedBulk}{" "}
        {isOverburdened ? (
          <Typography
            component="span"
            color={isEncumbered ? "secondary" : "default"}
            inline
          >
            Overburdened
          </Typography>
        ) : isEncumbered ? (
          <Typography
            component="span"
            color={isEncumbered ? "secondary" : "default"}
            inline
          >
            Encumbered
          </Typography>
        ) : null}
      </Typography>
      <Typography variant="h6">Equipment</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>Bulk</TableCell>
            <TableCell>Price</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {equipment.map(e => (
            <TableRow key={e.id}>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.level}</TableCell>
              <TableCell>{e.bulk}</TableCell>
              <TableCell>{e.price}</TableCell>
              <TableCell>
                <Button
                  aria-label="Delete"
                  color="secondary"
                  onClick={ev => {
                    ev.stopPropagation();
                    removeEquipment(e.id);
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6">Weapons</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>Bulk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weapons.map(e => (
            <TableRow key={e.id}>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.level}</TableCell>
              <TableCell>{e.bulk}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6">Equipment</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>Bulk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {armor.map(e => (
            <TableRow key={e.id}>
              <TableCell>{e.model}</TableCell>
              <TableCell>{e.level}</TableCell>
              <TableCell>{e.bulk}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Fab
        className={classes.addButton}
        color="primary"
        onClick={() => sendAlert(<AddEquipmentContainer onAdd={closeAlert} />)}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default withStyles(styles)(EquipmentContainer);
